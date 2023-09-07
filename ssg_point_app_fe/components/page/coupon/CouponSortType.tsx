import React from 'react'
import SelectSortType from '../event/SelectSortType'
import style from './Coupon.module.css'

export default function CouponSortType({orderType, setorderType} : 
  {orderType:Number, setorderType:  React.Dispatch<React.SetStateAction<Number>>}) {

  return (
    <div className={style.select_box}>
      <SelectSortType orderType= {orderType} setorderType={setorderType} /> 
    </div>
  )
}
