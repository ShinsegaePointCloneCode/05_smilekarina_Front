import React from 'react'

import SignUpSeq from '@/components/page/signup/SignUpSeq'

export default function Join() {
  return (
    <div>
      <section id="content" className="content" >
        <div className="top_cnt1">
          <p className="sp_tit2"> 신세계포인트
            <br />
            <strong>통합ID 회원가입</strong>
            으로
            <br /> 다양한 혜택을 누리세요!
            <br />
          </p>
        </div>
        <SignUpSeq/>
      </section>
    </div>
  )
}
