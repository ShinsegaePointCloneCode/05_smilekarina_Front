import React from 'react'
import style from './PntGiftMainsub.module.css'

export default function PntGiftsubCheckUser() {
  return (
    <div className={style.checkUser}>
        <p className={style.box_txt}>포인트 선물 받으실 분을 확인하세요</p>
        <div className={style.Usercontent}>
            <p className={style.p_txt1}>선물 받을 분:</p>
            <p className={style.p_txt2}>안선영 (ID:121212)</p>
        </div>
  </div>
  )
}
