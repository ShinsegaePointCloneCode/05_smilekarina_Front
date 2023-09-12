"use client"
import React, { useState } from 'react'
import style from "./MyPoint.module.css"
import { usePathname } from 'next/navigation'
import PointHistoryCard from './pntHistory/PointHistoryCard';
import { useBarcode } from 'next-barcode';
import { useSession } from 'next-auth/react';
import CardBoxContent from './cardManage/CardBoxContent';
import Barcode from '@/components/layout/Barcode';

export default function CardBox() {
    const pathname = usePathname();

    const [barcode, setbarcode] = useState<string>("000000000000");
    const [showBarcode, setShowBarcode] = useState<boolean>(false);


    const session = useSession();
    const token = session.data?.user.token
    if(pathname === "/mypoint/cardManage"){
      const barcode = (()=>{
        fetch("https://smilekarina.duckdns.org/api/v1/card/pointcard",{
          method : "GET",
          headers : {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }).then(res => res.json())
        .then(data => data.success ? setbarcode(data.result.cardNumber) : null)
      }) 
      barcode();
    }


    const handleBarcode = (()=>{
      setShowBarcode(true);
    })

  return (
    <div className={style.point_info_cardbox}>
      <div className={style.cardbox}>
          <div className={style.top_cnt}>
              <h3 className={style.tit_img}>SHINSEGAE POINT</h3>
              {pathname === "/mypoint/pntHistory"? <button className={style.btn_info}></button> : 
                pathname === "/mypoint/cardManage" ? 
                <>
                  <img src="/images/barcode.png" alt="바코드" className={style.barcode} onClick={handleBarcode} />
                  <Barcode isActive={showBarcode} token={token} onClose={() => setShowBarcode(false)} />
                </>
                : null}
          </div>
          {pathname === "/mypoint/pntHistory"?<PointHistoryCard/> :
            pathname === "/mypoint/cardManage" ? <CardBoxContent/> : null}
      </div>
    </div>
  )
}
