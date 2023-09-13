import React from 'react'
import style from './PntGift.module.css'
import { PntGiftType } from './PntGiftLast'
import { dateFormat } from '../PointHistoryDetail'

export default function PntGiftLastWarp({pntGift,setPntGift, token}:{pntGift : PntGiftType,setPntGift: React.Dispatch<React.SetStateAction<PntGiftType>>
    ,token:string}) {

    const date = new Date(pntGift.createdDate)

    const PntGiftAccepthandler = ()=>{
        fetch("https://smilekarina.duckdns.org/api/v1/gift/accept",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({giftId : pntGift.giftId})
        }).then(res => res.json())
        .then(data =>setPntGift({giftId: 0,
            senderLoginId: '',
            senderName: '',
            point: 0,
            giftMessage : '',
            giftImage: '',
            createdDate: '',
            result : false})).catch(error => console.log(error))
    }

    const PntGiftCancelhandler = () => {
        fetch("https://smilekarina.duckdns.org/api/v1/gift/cancel",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({giftId : pntGift.giftId})
        }).then(res => res.json())
        .then(data =>setPntGift({giftId: 0,
            senderLoginId: '',
            senderName: '',
            point: 0,
            giftMessage : '',
            giftImage: '',
            createdDate: '',
            result : false})).catch(error => console.log(error))
    }


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
                        <p className={style.btn2} onClick={PntGiftAccepthandler}>수락</p>
                        <p className={style.btn1_gray} onClick={PntGiftCancelhandler}>거절</p>
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
