import React from 'react'
import style from './PntGiftMainsub.module.css'

export default function PntGiftsubHeader() {
    return (
        <>
            <div className={style.org_txt_box}>
                <h3 className={style.box_tit}>
                    선물하기
                </h3>
                <p className={style.box_txt}>
                    신세계포인트를 선물 받을실 분의 <br />
                    정보를 정확하게 입력해 주세요.
                </p>
            </div>

        </>
    )
}
