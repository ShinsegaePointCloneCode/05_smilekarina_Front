"use client"
import React, { use } from 'react'
import style from "../MyPoint.module.css"
import { useSession } from 'next-auth/react'
import PntGiftHistory from './PntGiftHistory'
import { GiftSortType } from './PointGiftMainList'
// 내역 리스트 
export default function PointWrap({giftquery}:{giftquery:GiftSortType}) {

  const session = useSession();
  const token = session.data?.user.token
  console.log(token)

  return (
    <div className={style.point_wrap}>
        <PntGiftHistory token={token} giftquery ={giftquery}/> 
    </div>
  )
}