import LeaveInfo from '@/components/page/mymember/LeaveInfo'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="top_cnt0">
                <p className="sp_tit1 space"> 신세계포인트 통합ID서비스를
                    <br />
                    탈퇴하시면 아래 가입하신 모든 사이트를
                    <br />
                    <strong className="fc_pk">더 이상 이용하실 수 없게</strong>
                    됩니다.
                </p>
                <p className="sp_txt6">탈퇴 유의사항을 꼭 확인해 주세요.</p>
            </div>
            <LeaveInfo />
        </div>
    )
}
