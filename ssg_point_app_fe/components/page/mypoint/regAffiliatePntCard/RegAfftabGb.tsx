import React from 'react'
import style from "./regAffiliatePntCard.module.css"

export default function RegAfftabGb() {
  return (
    <div className={style.membership_introduce_box}>
        <div className={style.membership_tab}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className={style.box}>
            <p className={style.tit_samsung}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAA…kjkEjveM8QIAA7wD+E2AAWRDu6fIYcdEAAAAASUVORK5CYII=" alt="" />
            </p>
            <dl>
                <dt>적용상품</dt>
                <dd>
                    삼성전자가 공급한 제품<br/>
                    (이마트 내 삼성전자 매장)
                </dd>
            </dl>
            <dl>
                <dt>적립</dt>
                <dd>
                    구매 금액의 0.2% 신세계포인트와 동시적립
                </dd>
            </dl>
        </div>
    </div>
  )
}
