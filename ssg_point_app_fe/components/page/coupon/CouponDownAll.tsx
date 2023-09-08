"use client"
import React, { useEffect, useState } from 'react'
import style from './Coupon.module.css'
import { useSession } from 'next-auth/react'
import { CouponType } from '@/types/CouponType';
import { useRouter } from 'next/navigation';

export default function CouponDownAll({couponlist} : {couponlist : CouponType[]}) {

  const [coupondownlist, setCouponList] = useState<number[]>(); 
  const [reload, setreload] = useState<boolean>(false);

  useEffect(() => {
    const res = couponlist.map(
      (coupon : CouponType) => {
        return coupon.couponId
      })

      console.log(res)
      setCouponList(res)
    console.log(couponlist)
  },[])

  const session = useSession();
  const router = useRouter();

  const handleCouponDownAll= ()=>{
      console.log("전체 다운 POST 요청하기")
      const token = session.data?.user.token

      const res = fetch("https://smilekarina.duckdns.org/api/v1/benefits/couponDownAll",
              {
                  method : "POST",
                  headers : {
                      "Content-Type" : "application/json",
                      "Authorization" : `Bearer ${token}` 
                  },
                  body : JSON.stringify({couponList: coupondownlist})
              })
              .then(res=> res.json())
              .then(data => data.success? router.push('/benefits/myCoupon') : null)
      console.log(res)

    }


  return (
    <div className={style.all_btn_wrap}>
      <p className={style.coupon_all_btn} onClick={handleCouponDownAll}>
          전체다운
      </p>
    </div>
  )
}
