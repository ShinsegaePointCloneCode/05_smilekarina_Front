import ChangePwForm from '@/components/page/mymember/ChangePwForm'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="top_cnt0">
                <p className="sp_tit1">
                    <strong className="fc_pk">새로운 비밀번호</strong>
                    를 입력해주세요.
                </p>
                <p className="sp_txt6">비밀번호 입력 시 아래의 유의사항을 꼭 확인해 주세요.</p>
            </div>
            <ChangePwForm />
        </div>
    )
}
