import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            userName: string,
            token: string,
            uuid: string,
        } & DefaultSession["user"]
    }
}