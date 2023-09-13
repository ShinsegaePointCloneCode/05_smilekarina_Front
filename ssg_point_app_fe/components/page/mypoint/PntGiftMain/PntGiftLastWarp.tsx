import React from 'react'
import style from './PntGift.module.css'
import { PntGiftType } from './PntGiftLast'
import { dateFormat } from '../PointHistoryDetail'

export default function PntGiftLastWarp({pntGift}:{pntGift : PntGiftType}) {

    const date = new Date(pntGift.createdDate)

    return (
        <div className={style.gift_accept_message_box}>
            <p className={style.message_tit}>
                포인트 선물을 기다리고 있어요!
            </p>
            <div className={style.message_box}>
                <div className={style.cnt0}>
                    <p className={style.sender}>보낸사람 : <strong>{pntGift.senderName}(ID:{pntGift.senderLoginId})</strong></p>
                    <div className={style.txt_cnt}>
                        <p className={style.date}>{dateFormat({formatdate:date})}</p>
                        <p className={style.message_view}>메시지보기</p>
                    </div>
                </div>
                <div className={style.cnt1}>
                    <p className={style.point}>{pntGift.point}</p>
                    <div className={style.btn_box}>
                        <p className={style.btn2}>수락</p>
                        <p className={style.btn1_gray}>거절</p>
                    </div>
                </div>
                <ul className={style.list_cnt}>
                    <li>
                        수락 유효기간은 보낸 날짜로부터
                        <strong> 15일 </strong>
                        입니다.
                    </li>
                </ul>
            </div>
        </div>
    )
}
