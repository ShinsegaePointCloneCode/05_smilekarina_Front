import React from 'react'
import CardList from './CardList'
import CardBox from '../CardBox'
import style from "./CardManage.module.css"

export default function CardManage() {
    return (
        <>
            <div className={style.point_info_cardbox}>
                <p className={style.top_txt}>
                    <strong>총 4건</strong>
                    의
                    <span className={style.wp}>
                        신세계 포인트 카드를 보유하고 있습니다.
                    </span>
                </p>
                <CardBox />
            </div>
            <CardList />
        </>
    )
}
