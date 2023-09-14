import CertPage from '@/components/page/cert/CertPage'
import React from 'react'

export default function page() {
  return (
    <>
        <div className='top_cnt1'>
            <p className='sp_tit2'>
                포인트비밀번호변경
            </p>
            <p className='sp_txt6'>비밀번호 변경을 위해 본인인증을 진행하고 있습니다. <br />
                자주 사용하시는 인증수단을 선택해주세요.
            </p>
        </div>
        <CertPage/>
    </>
  )
}
