import LeavePW from '@/components/page/mymember/LeavePW'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="top_cnt0">
        <p className="sp_tit1">개인정보 보호를 위해
          <br />
          <strong className="fc_pk">비밀번호를 확인</strong>
          하고 있습니다.
        </p>
        <p className="sp_txt6">현재 사용 중인 비밀번호를 입력해주세요.</p>
      </div>
      <LeavePW />
    </div>
  )
}
