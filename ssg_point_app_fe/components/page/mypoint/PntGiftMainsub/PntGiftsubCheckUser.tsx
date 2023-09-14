import React from 'react'
import style from './PntGiftMainsub.module.css'
import { OtherUserInfo } from './PntGiftContent'
import { maskingID, maskingName } from '../PointHistoryDetail'

export default function PntGiftsubCheckUser({otherUserInfo}:{otherUserInfo:OtherUserInfo}) {
  return (
    <div className={style.checkUser}>
        <p className={style.box_txt}>포인트 선물 받으실 분을 확인하세요</p>
        <div className={style.Usercontent}>
            <p className={style.p_txt1}>선물 받을 분:</p>
            <p className={style.p_txt2}>{`${maskingName(otherUserInfo.otherUserName)}(${maskingID(otherUserInfo.otherUserId)})`}</p>
        </div>
  </div>
  )
}
