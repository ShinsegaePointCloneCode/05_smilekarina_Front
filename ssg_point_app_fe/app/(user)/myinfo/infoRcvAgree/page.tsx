import Callinfo from '@/components/page/mymember/Callinfo'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="top_cnt0">
        <p className="sp_tit1">
          <strong>
            <span className="fc_pk">나에게 딱 알맞는 정보</span>
            를 원한다면-
          </strong>
        </p>
        <p className="sp_txt6">광고정보 수신동의를 하시면 신세계포인트의
          <br />다양한 혜택과 소식을 받으실 수 있습니다.
        </p>
      </div>
      <Callinfo />
    </div>
  )
}
