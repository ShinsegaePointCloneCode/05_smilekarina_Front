"use client"
import React, { useState } from 'react'
import style from './Coupon.module.css'
import CouponRegister from './CouponRegister'

export default function CouponHeader() {

    const [visible, setVisible] = useState(false)

    const handleCouponRegister = ()=>{
        setVisible(true)
    }

  return (
    <div className={style.coupon_intro_box}>
        <div className={style.coupon_top}>
            <div className={style.coupon_tit}>
                <strong className={style.sp_tit2}>
                    쇼핑 할인에서 제휴 우대까지<br />
                    신세계포인트 회원만 <br />
                    누릴 수 있는 혜택!
                </strong>
                <p className={style.sp_txt5}>
                    원하는 쿠폰을 다운로드하고 <br />
                    마이 쿠폰함에 쓱- 담아 사용해보세요
                </p>
            </div>
        </div>
        <div className={style.coupon_bot}>
            <div className={style.coupon_banner}>

            </div>
            <div className={style.coupon_button}>
                <ul>
                    <li className={style.my_coupon}>
                        <a href="/benefits/myCoupon">마이쿠폰함으로 이동</a>
                    </li>
                    <li className={style.register_coupon}>
                        <p className={style.register_button} onClick={handleCouponRegister}>쿠폰 등록</p>
                    </li> 
                </ul>
                {visible && <CouponRegister visible = {visible} setVisible = {setVisible}/>}
                
            </div>
        </div>
    </div>
  )
}
