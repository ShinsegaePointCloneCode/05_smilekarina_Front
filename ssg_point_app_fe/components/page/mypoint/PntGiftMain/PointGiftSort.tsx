import React from 'react'
import style from "./PntGift.module.css"
import { useRouter } from 'next/navigation'
import { GiftSortType } from './PointGiftMainList';

export default function PointGiftSort({giftquery,setGiftquery}:{giftquery:GiftSortType,setGiftquery:React.Dispatch<React.SetStateAction<GiftSortType>>}) {

    const router = useRouter();

    const giftSortTypeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
      setGiftquery({giftGb: e.target.value})
    }

  return (
    <div className={style.sort_select}>
        <select onChange={giftSortTypeHandler}>
            <option value="all">전체</option>
            <option value="send">보낸선물</option>
            <option value="received">받은선물</option>
        </select>
    </div>
  )
}
