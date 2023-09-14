import PwResult from '@/components/page/findIdPw/PwResult'
import React from 'react'

export default function page() {
    return (
        <div>
            <section id="content" className="content" >
                <div className="top_cnt1">
                    <p className="sp_tit1">
                        <strong>새로운 비밀번호</strong>
                        를 입력해주세요.
                    </p>
                    <p className="sp_txt6">비밀번호 입력 시 아래의 유의사항을 꼭 확인해 주세요.</p>
                </div>
                <PwResult />
            </section>
        </div>
    )
}
