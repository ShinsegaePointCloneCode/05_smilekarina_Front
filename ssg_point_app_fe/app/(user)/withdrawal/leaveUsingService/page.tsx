import JoinServiceList from '@/components/page/mymember/JoinServiceList'
import React from 'react'

export default function page() {
    return (
        <div>
            <section>
                <div className="top_cnt0">
                    <p className="sp_tit1">
                        <strong className="txt_line0 pk">박건우</strong>
                        님이 현재 이용 중인
                        <br />신세계포인트 서비스입니다.
                    </p>
                </div>
                <JoinServiceList />
            </section>
        </div>
    )
}
