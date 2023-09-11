"use client"
import React from 'react'
import style from "./MyPoint.module.css"
import { usePathname } from 'next/navigation'
import PointHistoryCard from './pntHistory/PointHistoryCard';
import { useBarcode } from 'next-barcode';
import { useSession } from 'next-auth/react';
import CardBoxContent from './cardManage/CardBoxContent';

export default function CardBox() {
    const pathname = usePathname();

    // const session = useSession();
    // const token = session.data?.user.token
    // if(pathname === "/mypoint/cardManage"){
    //   const barcode = (()=>{
    //     fetch("https://smilekarina.duckdns.org/api/v1/card/pointcard",{
    //       method : "GET",
    //       headers : {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${token}`
    //       }
    //     }).then(res => res.json())
    //     .then(data => data ? )
    //   }) 

    // }

    const { inputRef } = useBarcode({
      value: "12345678",
      options: {
        background: '#ffffff',
        displayValue: false,
      }
    });

  return (
    <div className={style.point_info_cardbox}>
      <div className={style.cardbox}>
          <div className={style.top_cnt}>
              <h3 className={style.tit_img}>SHINSEGAE POINT</h3>
              {pathname === "/mypoint/pntHistory"? <button className={style.btn_info}></button> : 
                pathname === "/mypoint/cardManage" ? <img ref={inputRef} alt="바코드" className={style.barcode} /> : null}
          </div>
          {pathname === "/mypoint/pntHistory"?<PointHistoryCard/> :
            pathname === "/mypoint/cardManage" ? <CardBoxContent/> : null}
      </div>
    </div>
  )
}
