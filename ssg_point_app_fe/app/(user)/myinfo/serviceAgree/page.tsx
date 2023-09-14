import ServiceAgree from '@/components/page/mymember/ServiceAgree'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="top_cnt0">
        <p className="sp_tit1 fw500">서비스 동의 관리</p>
        <p className="sp_txt4">신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.</p>
      </div>
      <div className="tab_menu_box">
        <ul role="tablist">
          <li role="presentation">
            <a href="" role="tab" aria-selected="true" className="tab on">서비스 동의
              <span className="hidden">선택됨</span>
            </a>
          </li>
          <li role="presentation">
            <a href="/myinfo/clubAgree" role="tab" aria-selected="false" className="tab">클럽 동의</a>
          </li>
        </ul>
      </div>
      <ServiceAgree />
    </div>
  )
}
