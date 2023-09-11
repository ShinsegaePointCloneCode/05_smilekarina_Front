import React from 'react'
import style from './PntGift.module.css'

export default function PointGiftButton() {
  return (
    <div className={style.btn_box}>
        <a href="/mypoint/pntGiftMainsub" className={style.btn_primary}>선물하기</a>
    </div>
  )
}
