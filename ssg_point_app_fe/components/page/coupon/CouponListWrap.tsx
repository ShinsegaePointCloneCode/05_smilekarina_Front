"use client"
import React, { useEffect, useState } from 'react'
import CouponContent from './CouponContent'
import CouponSortType from './CouponSortType'
import CouponDownAll from './CouponDownAll'
import style from './Coupon.module.css'
import { useSession } from 'next-auth/react'
import { CouponType } from '@/types/CouponType'


export default function CouponListWrap() {

  const session = useSession();
  const islogin = session == null ? false : true
  console.log(islogin)

  const [couponlist, setCouponList] = useState<CouponType[]>([] as CouponType[]);
  const [orderType, setorderType] = useState<Number>(30);
  const [page, setPage] = useState(0);
  const size = 10;


  useEffect(() => {
    console.log(islogin, orderType, page, size)
    const token = session.data?.user.token
    const getdata = (() => {
        if (islogin) {
          fetch(`https://smilekarina.duckdns.org/api/v1/couponPage/${orderType}?page=${page}&size=${size}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            })
            .then(res => res.json())
            .then(data => {
              // console.log(data.result)
              setCouponList(data.result.content)
            })
        } else {
          fetch(`https://smilekarina.duckdns.org/api/v1/couponPage/notLogged/${orderType}?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setCouponList(data.result.content))
        }
        
      })
      getdata();

  }, [])

  useEffect(() => {
    console.log(islogin, orderType, page, size)
    const token = session.data?.user.token
    const getdata = (() => {
        if (islogin) {
          fetch(`https://smilekarina.duckdns.org/api/v1/couponPage/${orderType}?page=${page}&size=${size}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            })
            .then(res => res.json())
            .then(data => setCouponList(data.result.content))
        } else {
          fetch(`https://smilekarina.duckdns.org/api/v1/couponPage/notLogged/${orderType}?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setCouponList(data.result.content))
        }
        
      })
      getdata();

  }, [orderType,page])


  return (
    <div className={style.coupon_lists_wrap}>
      <div className={style.coupon_serch}>
        <CouponSortType orderType={orderType} setorderType={setorderType} />
        {
          couponlist.length > 0 ?  <CouponDownAll couponlist={couponlist}/> : 'loading'
        }
       
      </div>
      <ul>
        {
          couponlist ? couponlist.map((item: CouponType) =>
          (<CouponContent props={item} />
          )) : null
        }
      </ul>
    </div>
  )
}
