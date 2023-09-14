import CertPage from '@/components/page/cert/CertPage'
import React from 'react'

export default function page() {
  return (
    <div>
      <section id="content" className="content depth2 mypage" >
        <div className="top_cnt0">
          <p className="sp_tit5">본인인증
          </p>
          <p className="sp_txt6">개인정보 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요.</p>
        </div>
        <CertPage />
      </section>
    </div>
  )
}
