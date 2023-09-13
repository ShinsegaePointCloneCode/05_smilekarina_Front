"use client"
import React, { useEffect, useState } from 'react'
import style from './PntGift.module.css'
import PntGiftLastWarp from './PntGiftLastWarp'
import { useSession } from 'next-auth/react'
import { error } from 'console'

export interface PntGiftType {
    giftId: number,
    senderLoginId: string,
    senderName: string,
    point: number,
    giftMessage : string,
    giftImage: string,
    createdDate: string,
    result : boolean
}


export default function PntGiftLast() {

    const [pntGift,setPntGift] = useState<PntGiftType>({
        giftId: 0,
        senderLoginId: '',
        senderName: '',
        point: 0,
        giftMessage : '',
        giftImage: '',
        createdDate: '',
        result : false
    });
    const session = useSession();
    const token = session.data?.user.token

    useEffect(()=>{
        const  GiftLast = (()=>{
            fetch("https://smilekarina.duckdns.org/api/v1/gift/getlast",{
                method : "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => setPntGift({giftId: data.result.giftId,
                senderLoginId: data.result.senderLoginId,
                senderName: data.result.senderName,
                point: data.result.point,
                giftMessage : data.result.giftMessage,
                giftImage: data.result.giftImage,
                createdDate: data.result.createdDate,
                result : true
            })).catch(error=> console.log(error))
        })
        GiftLast()
    },[])

    return (
        <>
            {pntGift.result ? <PntGiftLastWarp pntGift = {pntGift} setPntGift={setPntGift} token={token}/> :null}
        </>
       
    )
}
