import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

export const options: NextAuthOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                loginId: { label: "loginId", type: "text", placeholder: "SSGPOINT" },
                password: { label: "password", type: "password" }
                
            },
            async authorize(credentials, req) {


                if (!credentials?.loginId || !credentials?.password) return null

                const res = await fetch("https://smilekarina.duckdns.org/api/v1/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        loginId: credentials?.loginId,
                        password: credentials?.password,

                    })
                })

                // const user = await res.json()
                const user = await res.json()


                if (res.ok && user) {
                    //console.log(user.result.token)
                    return user.result
                }

                // Return null if user data could not be retrieved
                return null
            }
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET
        }),
        
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET
        })
        
    ],
    secret: process.env.CRED_SECRET_KEY,
    

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(user)
            return true
        },


        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },

        async redirect({ url, baseUrl }) {
            
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        
        
    },
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}  