import React from 'react'
import style from './PntGift.module.css'
import PointGiftButton from './PointGiftButton'

export default function PntGiftMainHeader() {
    return (
        <>
            <div className={style.org_txt_box}>
                <h3 className={style.box_tit}>
                    마음을 담아<br />
                    <strong className={style.fc_pk}>신세계포인트를 선물</strong>
                    하세요.
                </h3>
                <p className={style.box_txt}>
                    신세계포인트 회원끼리 주고받는<br />
                    가장 실속있는 마음의 선물! <br />
                    친구나 가족, 소중한 사람에게 선물해 보세요.
                </p>
                <PointGiftButton/>
            </div>
            
        </>
    )
}
