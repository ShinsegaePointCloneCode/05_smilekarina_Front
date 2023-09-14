'use client'

import React from 'react'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { headerMenuDatas } from '@/datas/headerMenuDatas';




function Logo(props: { imgUrl: string, imgAlt: string }) {
    const { imgUrl, imgAlt } = props
    const pathname = usePathname();
    let router = useRouter()
    
    

    const matchedMenu = headerMenuDatas.find((menu) => menu.url === pathname);
    
    
    return (
        <div className='header_logo flex align-center'>
            <button onClick={ () => {router.back()}} className="back_btn flex justify-center items-center">
                <div className="w-2 relative">
                    <Image
                        src={imgUrl}
                        alt={imgAlt}
                        width={48} 
                        height={56} 
                        priority
                    />
                </div>
            </button>

            <p className="inline-block tit_font flex justify-center items-center">
                {matchedMenu ? matchedMenu.name : 'Default Text'}
            </p>
        </div>
    )
}

export default Logo