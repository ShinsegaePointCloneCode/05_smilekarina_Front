import React from 'react'
import style from "./regAffiliatePntCard.module.css"
import RegAfftabGb from './RegAfftabGb'
import Agree from './Agree'

export default function RegAffiliatePntCard() {
  return (
    <div className={style.tab_content}>
      <div className={style.org_txt_box}>
        <h3 className={style.box_tit}>
          <span>
            신세계포인트에
            <strong className={style.fc_pk}>제휴사 포인트</strong>
            더하기 !
          </span>
        </h3>
        <p className={style.box_txt}>
          이마트 제휴 멤버십 포인트 카드를 등록하면<br />
          신세계포인트와 제휴사 포인트를<br />
          모두 적립할 수 있어요. 
        </p>
      </div>
      {/* <RegAfftabGb/> */}
      {/* <Agree/> */}
    </div>
  )
}
