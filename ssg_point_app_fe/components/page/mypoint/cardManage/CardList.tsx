"use client"
import React, { useEffect, useState } from 'react'
import CardListWarp from './CardListWarp'
import style from "./CardManage.module.css"
import { CardType } from '@/types/CardType';
import { useSession } from 'next-auth/react';
import CreditCardListWarp from './CreditCardListWarp';

export default function CardList() {

  const [onlineCard, setOnlineCard] = useState<CardType[]>([]as CardType[]);
  const [creditCard, setCreditCard] = useState<CardType[]>([]as CardType[]);
  const [offlineCard, setOfflineCard] = useState<CardType[]>([]as CardType[]);

  const session = useSession();
  const token = session.data?.user.token

  useEffect(()=>{
    const getOnlineData  = (async()=>{
      await fetch("https://smilekarina.duckdns.org/api/v1/pointcard/online",{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => data.success? setOnlineCard(data.result) : console.log("error"))
    })

    const getCreditData  = (async()=>{
      await fetch("https://smilekarina.duckdns.org/api/v1/pointcard/credit",{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => data.success? setCreditCard(data.result) : console.log("error"))
    })

    const getOfflineData  = (async()=>{
      await fetch("https://smilekarina.duckdns.org/api/v1/pointcard/offline",{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => data.success? setOfflineCard(data.result) : console.log("error"))
    })

    getOnlineData();
    getCreditData();
    getOfflineData(); 

  },[])



  return (
    <div className={style.table_cnt0}>
      <p className={style.table_cnt_tit}>온라인 카드</p>
      <CardListWarp data = {onlineCard}/>
      <p className={style.table_cnt_tit}>제휴 신용카드</p>
      <CreditCardListWarp data = {creditCard}/>
      <p className={style.table_cnt_tit}>오프라인 카드</p>
      <CardListWarp data = {offlineCard}/>
    </div>
  )
}
