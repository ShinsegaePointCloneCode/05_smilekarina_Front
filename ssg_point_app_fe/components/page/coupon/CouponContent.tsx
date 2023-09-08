"use client"
import React, { useState } from 'react'
import style from './Coupon.module.css'
import CouponShowBarcode from './CouponShowBarcode'
import { CouponType } from '@/types/CouponType'
import { dateFormat } from '../mypoint/PointHistoryDetail'
import { useSession } from 'next-auth/react'

export default function CouponContent({props}:{props:CouponType}) {
    // console.log(props)

    const session = useSession();
    const token = session.data?.user.token
    const [couponNum, setCouponNum] = useState(props.couponNumber);

    const handlelDownOne = (e:any)=>{
        console.log("Down")
        const postdata = (async()=>{
            await fetch("https://smilekarina.duckdns.org/api/v1/benefits/myCoupon",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}` 
                },
                body : JSON.stringify({couponId: props.couponId})
            }).then(res => res.json())
            .then(data => data ? setCouponNum(data.result.couponNum): console.log("error"))
        })
        postdata();
    }

    const enddate =  new Date(props.couponEnd)
    const startdate = new Date(props.couponStart)
    const today = new Date()
    let diff = Math.abs(enddate.getTime() - today.getTime()); 
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    

  return (
    <li>
        <div className={style.coupon_headline}>
            <div className={style.coupon_point_box}>
                <img src={props.couponImg} alt="쿠폰 네모 이미지" />
            </div>
            <img src={props.imageUrl} alt="쿠폰 제휴사 이미지" className={style.brand_img} />
        </div>
        <div className={style.coupon_content}>
            <p className={style.cnt_desc}>{props.partnerName}</p>
            <p className={style.cnt_tit}>{props.couponName}</p>
            <p className={style.cnt_term}>
                {`${dateFormat({formatdate : startdate})} ~ ${dateFormat({formatdate : enddate})}`}
                <span className={style.cnt_remaining}>{diff}일 남음</span>
            </p>
            <div className={style.franchisee_barcode}>
                <div className={style.coupon_btn_wrap}>
                    <div className={style.img_box}>
                        <img src={props.imageUrlCircle} alt="쿠폰제휴사 원형이미지" className={style.franchisee_img}/>
                    </div>
                    { couponNum != null ? 
                        <CouponShowBarcode couponNumber={props.couponNumber}/> :
                        <p className={style.coupon_all_btn} onClick={handlelDownOne}></p>}
                </div>
            </div>
        </div>
    </li>
  )
}
