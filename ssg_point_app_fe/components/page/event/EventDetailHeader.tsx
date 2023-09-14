import React from 'react'
import style from './Event.module.css'

export default function EventDetailHeader() {
  return (
    <div className={style.event_desc_box01}>
        <p className={style.event_tit}>
        참~쉬운 적립 이벤트! 최대 2만P 추가 적립 혜택
        </p>
        <p className={style.event_txt}>
            기간: 
            <span className={style.ff_lato}>
                2023-09-01 ~ 2023-10-10
            </span>
        </p>
    </div>
  )
}
