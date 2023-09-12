"use client"
import React, { useEffect, useState } from 'react'
import style from "./CardManage.module.css"
import { useSession } from 'next-auth/react';

export default function CardBoxContent() {

    const [barcodeNumber, setbarcodeNumber] = useState<string>();
    const session = useSession();
    const token = session.data?.user.token

    const [point, setPoint] = useState<number>();

    useEffect(() => {
        if(token){
            const getCardNum = (async() => {
                await fetch("https://smilekarina.duckdns.org/api/v1/card/pointcard", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }).then(res => res.json())
                    .then(data => data.success ? setbarcodeNumber(data.result.cardNumber) : null)
            })
    
            const getPoint = (async()=>{
                await fetch("https://smilekarina.duckdns.org/api/v1/point/usablepoint", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }).then(res => res.json())
                    .then(data => data.success ? setPoint(data.result.totalPoint) : null)
            })
            getCardNum();
            getPoint();
        }
    }, [])

    return (
        <div className={style.card_cnt}>
            <div className={style.card_num}>
                <p id='targetDiv'>
                    {barcodeNumber?.substring(0,4)}
                    <span>-</span>
                    {barcodeNumber?.substring(4,8)}
                    <span>-</span>
                    {barcodeNumber?.substring(8,12)}
                    <span>-</span>
                    {barcodeNumber?.substring(12,16)}
                </p>
                <button className={style.copy_btn}>복사</button>
                <dl>
                    <dt>사용가능</dt>
                    <dd className={style.point}>{point}</dd>
                </dl>
            </div>
        </div>

    )
}
