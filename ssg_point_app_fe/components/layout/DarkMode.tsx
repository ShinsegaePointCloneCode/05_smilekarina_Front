'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import '@/app/globals.css'


export default function DarkMode() {
    let router = useRouter()

    const handleModeToggle = () => {
        let cookieValue = '';
        if (typeof window !== 'undefined') {
            cookieValue = ('; ' + document.cookie).split(`; mode=`)?.pop()?.split(';')[0] ?? '';
        }

        if (cookieValue === 'light') {
            document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400);
            document.documentElement.setAttribute('data-theme', 'dark-mode');

        } else {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
            document.documentElement.setAttribute('data-theme', 'light');
        }
        router.refresh();
    };



    useEffect(() => {
        let cookieValue = '';
        if (typeof window !== 'undefined') {
            cookieValue = ('; ' + document.cookie).split(`; mode=`)?.pop()?.split(';')[0] ?? '';
        }

        if (cookieValue === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);


    return (
        <span onClick={() => {
            handleModeToggle()
        }}> 🌙 </span>
    )
}

