"use client"
import React from 'react'
import style from './Coupon.module.css'
import { useSession } from 'next-auth/react'
import { CouponType } from '@/types/CouponType';

// export default function CouponDownAll({couponlist} : {couponlist : CouponType[]}) {
export default function CouponDownAll() {

  // const coupondownlist = couponlist.map(item => item.couponId) 
  // console.log(couponlist)

  const session = useSession();

    const handleCouponDownAll= ()=>{
        console.log("전체 다운 POST 요청하기")
        // const token = session.data?.user.token

        // const res = fetch("https://smilekarina.duckdns.org/api/v1//benefits/couponDownAll",
        //         {
        //             method : "POST",
        //             headers : {
        //                 "Content-Type" : "application/json",
        //                 "Authorization" : `Bearer ${token}` 
        //             },
        //             body : JSON.stringify({pointPassword: PointlastPw})
        //         })
        //         .then(res=> res.json())
        //         .then(data => data.success ? router.push("/mypoint/cardManage") : console.log("error"))
        // console.log(res)

    }


  return (
    <div className={style.all_btn_wrap}>
      <p className={style.coupon_all_btn} onClick={handleCouponDownAll}>
          전체다운
      </p>
    </div>
  )
}
