import React from 'react'
import style from "./CardManage.module.css"

export default function CardBoxContent() {




    return (
        <div className={style.card_cnt}>
            <div className={style.card_num}>
                <p id='targetDiv'>
                    9350
                    <span>-</span>
                    1200
                    <span>-</span>
                    1863
                    <span>-</span>
                    5634
                </p>
                <button className={style.copy_btn}>복사</button>
                <dl>
                    <dt>사용가능</dt>
                    <dd className={style.point}>6</dd>
                </dl>
            </div>
        </div>

    )
}
