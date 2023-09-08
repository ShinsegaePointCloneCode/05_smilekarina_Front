import ModifyInfo from '@/components/page/mymember/ModifyInfo'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="top_cnt0">
                <p className="sp_tit5">회원정보 수정</p>
                <p className="sp_txt6">정확한 회원정보를 입력해주세요.</p>
            </div>
            <ModifyInfo />
        </div>
    )
}
