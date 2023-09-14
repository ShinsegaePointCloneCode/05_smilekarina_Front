'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function HeaderBottom() {

    const pathname = usePathname()

    return (
        <div className='header_bottom p-2'>
            <nav>
                <ul className='flex gap-4 justify-center items-center'>
                    <li className={pathname === '/couponPage' ? `text-sm font-bold active` : `text-sm font-bold`}>
                        <Link href='/couponPage'>쿠폰</Link>
                    </li>
                    <li className={pathname === '/' ? `text-sm font-bold active` : `text-sm font-bold`}>
                        <Link href='/'>홈</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBottom