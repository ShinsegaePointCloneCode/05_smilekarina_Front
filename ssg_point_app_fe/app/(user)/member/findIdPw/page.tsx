
import CertPage from '@/components/page/cert/CertPage'
import React from 'react'


export default function page() {
  return (
    <div>
      <section id="content" className="content" >
        <div className="top_cnt1">
          <p className="sp_tit2">
            <strong>아이디</strong>가
            <br />
            생각나지 않으세요?
          </p>
          <p className="sp_txt6">본인인증 후 아이디를 확인하실 수 있습니다.</p>
        </div>
        <CertPage />
      </section>
    </div>
  )
}
