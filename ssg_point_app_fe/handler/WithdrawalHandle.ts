import { signOut } from "next-auth/react";

export const withdrawal = async (props: {token?: string}) => {
    if (!props.token) {
        console.error("Token is not provided.");
        return;
    }
    try{

        const response = await fetch("https://smilekarina.duckdns.org/api/v1/withdrawal", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                },                    
            })
        const data = await response.json();
        if (data.success) {
            console.log("Withdrawal success.");
            signOut({ callbackUrl: '/' })
            
        } 

    } catch(e) {
        console.log(e);
    }
};