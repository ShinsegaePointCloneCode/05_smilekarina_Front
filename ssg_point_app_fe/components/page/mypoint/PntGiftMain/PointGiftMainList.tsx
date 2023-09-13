"use client"
import React, { useEffect, useState } from 'react'
import style from './PntGift.module.css'
import PointGiftSort from './PointGiftSort'
import PntGiftWrap from './PntGiftWrap'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


export interface GiftSortType{
  giftGb: string
} 

export default function PointGiftMainList() {

  const queryParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [giftquery,setGiftquery] = useState<GiftSortType>({
    giftGb : "all"
  }); 

  useEffect(()=>{
    // 이거쓰면 query 다가져 옴 
    // 해당 부분을 넣으니까 초기에 들어 갈 때 데이터를 두번 로드하는 현상이 해결 됨 
    if( queryParam.toString() === `giftGb=${giftquery.giftGb}`) {
      return 
    }
    // console.log('open')
    router.push(
      `${pathname}?giftGb=${giftquery.giftGb}`
    )
  },[giftquery])

  return (
    <div className={style.point_list_box}>
      {/* 상태 관리하는 query parameter들을 하위 컴포넌트로 전달하기 */}
      <PointGiftSort giftquery={giftquery} setGiftquery={setGiftquery}/>
      <PntGiftWrap giftquery ={giftquery}/>
    </div>
  )
}
