import React from 'react'
import style from './Coupon.module.css'
import Barcode from '@/components/layout/Barcode'
import { useBarcode } from 'next-barcode';

export default function CouponShowBarcode({couponNumber} : {couponNumber :string}) {

  const { inputRef } = useBarcode({
    value: couponNumber,
    options: {
      background: '#ffffff',
      displayValue: false,
    }
  });

  return (
    // todo 눌렀을 때 모달창으로 바코드 띄우기
    <p className={style.coupon_use_btn}>사용하기 <img ref={inputRef} alt="바코드" /></p>
  )
}
