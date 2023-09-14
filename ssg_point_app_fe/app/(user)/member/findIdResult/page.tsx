import IdResult from '@/components/page/findIdPw/IdResult'
import React from 'react'


export default function FindIdResult() {
    return (
        <div>
            <section id="content" className="content" >
                <div className="top_cnt1">
                    <p className="sp_tit1"> 입력하신 정보로 가입된
                        <strong className="fw700"> 아이디</strong>
                        는
                        <br />
                        아래와 같습니다.
                    </p>
                </div>
                <IdResult />
            </section>
        </div>
    )
}
