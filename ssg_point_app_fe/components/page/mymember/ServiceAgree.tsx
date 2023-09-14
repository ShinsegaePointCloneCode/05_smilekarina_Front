'use client'

import React from 'react'
import styles from './ServiceAgree.module.css'

export default function ServiceAgree() {
  return (
    <div className={`${styles.service_agree}`}>
      <section>
        <div className={`${styles.setting_list}`}>
          <strong className={`${styles.sp_txt1}`}>신세계포인트 제휴사간 통합 서비스</strong>
          <div className={`${styles.set_content_wrap} ${styles.line}`}>
            <div className={`${styles.set_contents}`}>
              <p className={`${styles.set_tit}`}>[선택] 신세계포인트 ↔ SSG.COM 옴니서비스를 위한 개인정보 제공 동의</p>
              <p className={`${styles.set_txt}`}>
                <button className={`${styles.agree_show}`}>
                  <span>내용보기</span>
                </button>
              </p>
            </div>
            <div className={`${styles.toggle_btn}`}>
              <input className="hidden" id="check01" type="checkbox" true-value="Y" false-value="N" />
              <label htmlFor="check01"> (선택) 신세계포인트(이마트, 신세계백화점) ↔ SSG.COM 개인정보 제공 동의 off</label>
            </div>
          </div>
          <div className={`${styles.set_date}`}>변경일 : </div>
          <strong className={`${styles.sp_txt1}`}>사이트 이용 약관 동의</strong>
          <div>
            <div className={`${styles.set_content_wrap} ${styles.line}`}>
              <div className={`${styles.set_contents}`}>
                <p className={`${styles.set_tit}`}> 이마트 사이트 이용 약관
                  <br />emart.com </p>
                <p className={`${styles.set_txt}`}>
                  <button className={`${styles.agree_show}`}>
                    <span>내용보기</span>
                  </button>
                </p>
              </div>
              <div className={`${styles.toggle_btn}`}>
                <input className="hidden" id="siteCheck0" type="checkbox" true-value="Y" false-value="N" />
                <label htmlFor="siteCheck0">이마트 사이트 이용 약관 동의 off</label>
              </div>
            </div>
            <div className={`${styles.set_date}`}>변경일 : </div>
          </div>
          <div>
            <div className={`${styles.set_content_wrap}`}>
              <div className={`${styles.set_contents}`}>
                <p className={`${styles.set_tit}`}> 신세계백화점 사이트 이용 약관
                  <br />shinsegae.com </p>
                <p className={`${styles.set_txt}`}>
                  <button className={`${styles.agree_show}`}>
                    <span>내용보기</span>
                  </button>
                </p>
              </div>
              <div className={`${styles.toggle_btn}`}>
                <input className="hidden" id="siteCheck1" type="checkbox" true-value="Y" false-value="N" />
                <label htmlFor="siteCheck1">신세계백화점 사이트 이용 약관 동의 off</label>
              </div>
            </div>
            <div className={`${styles.set_date}`}>변경일 : </div>
          </div>
        </div>

        <div className={`${styles.notice_box} ${styles.type2}`}>
          <h3 className={`${styles.tit}`}>[유의사항]</h3>
          <ul className={`${styles.list_cnt}`}>
            <li>관련 법령에 의거하여 동의는 언제든지 수정하실 수 있습니다.</li>
            <li>스위치를 클릭하여 활성화 모드이면 동의한 것으로, 비활성화 모드이면 거절한 것으로 반영됩니다.</li>
            <li>SSG.COM 가입을 하셔야 통합 서비스 제공이 가능하며, SSG.COM 휴면회원이 되시면 개인정보는 제공되지 않습니다.</li>
            <li className={`${styles.str}`}>개인정보 제3자 제공 및 활용 동의에 동의하지 않으시더라도 신세계포인트의 기본 서비스는 이용하실 수 있습니다.</li>
            <li> 이마트 또는 신세계백화점을 통해 신세계 유니버스 클럽에 가입한 회원의 경우, 해당 클럽을 먼저 탈회해 주셔야 각 사이트 이용 동의 철회가 가능합니다.
              <br />
              클럽 탈회는 가입처에 문의해 주세요. </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
