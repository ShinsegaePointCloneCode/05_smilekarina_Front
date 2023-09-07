import React from 'react'
import style from './Coupon.module.css'
import CouponShowBarcode from './CouponShowBarcode'
import { CouponType } from '@/types/CouponType'
import { dateFormat } from '../mypoint/PointHistoryDetail'



export default function CouponContent({props}:{props:CouponType}) {

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
                {props.couponStart} ~ {props.couponEnd}
                <span className={style.cnt_remaining}>남은날짜</span>
            </p>
            <div className={style.franchisee_barcode}>
                <div className={style.coupon_btn_wrap}>
                    <div className={style.img_box}>
                        <img src={props.imageUrlCircle} alt="쿠폰제휴사 원형이미지" className={style.franchisee_img}/>
                    </div>
                    {props.couponNumber != null ? 
                        <CouponShowBarcode couponNumber={props.couponNumber}/> :
                        <p className={style.coupon_all_btn}></p>}
                </div>
            </div>
        </div>
    </li>
  )
}
