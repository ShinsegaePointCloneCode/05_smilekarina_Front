import React from 'react'
import styles from './ClubAgree.module.css'

export default function ClubAgree() {
  return (
    <div>
      <section>
        <div className={`${styles.service_agree}`}>
          <h3 className="hidden">클럽 동의</h3>
          <p className={`${styles.txt_info}`}>※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다. </p>
          <div className={`${styles.setting_list}`}>
            <strong className={`${styles.sp_txt1}`}>맘키즈 클럽</strong>
            <div className={`${styles.set_content_wrap} ${styles.line}`}>
              <div className={`${styles.set_contents}`}>
                <p className={`${styles.set_tit}`}> [선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의 </p>
                <p className={`${styles.set_txt}`}>
                  <button className={`${styles.agree_show}`}>
                    <span>내용보기</span>
                  </button>
                </p>
              </div>
              <div className={`${styles.toggle_btn}`}>
                <input className='hidden' id="check01" type="checkbox" true-value="Y" false-value="N"/>
                  <label htmlFor="check01">[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의 off</label>
              </div>
            </div>
            <div className={`${styles.club_info}`}>
              <div className={`${styles.club_info_box}`} style={{"display": "none"}}>
                <div className={`${styles.benefits_cnt}`}>
                  <div className={`${styles.form_box}`}>
                    <div className={`${styles.radio_group_box} ${styles.col2}`}>
                      <p className={`${styles.tit}`}> 자녀1 </p>
                      <div className={`${styles.radio_box}`}>
                        <input id="radio00" type="radio" name="radioName00" value="01"/>
                          <label htmlFor="radio00">남자</label>
                      </div>
                      <div className={`${styles.radio_box}`}>
                        <input id="radio01" type="radio" name="radioName00" value="02"/>
                          <label htmlFor="radio01">여자</label>
                      </div>
                      <div className={`${styles.input_box}`}>
                        <input id="name00" type="number" defaultValue=""/>
                          <label htmlFor="name00" className="">
                            <span className={`${styles.in_box}`}>생년월일
                              <em>ex)20170201</em>
                            </span>
                          </label>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.form_box}`}>
                    <div className={`${styles.radio_group_box} ${styles.col2}`}>
                      <p className={`${styles.tit}`}> 자녀2 </p>
                      <div className={`${styles.radio_box}`}>
                        <input id="radio03" type="radio" name="radioName01" value="01"/>
                          <label htmlFor="radio03">남자</label>
                      </div>
                      <div className={`${styles.radio_box}`}>
                        <input id="radio04" type="radio" name="radioName01" value="02"/>
                          <label htmlFor="radio04">여자</label>
                      </div>
                      <div className={`${styles.input_box}`}>
                        <input id="name01" type="number" defaultValue=""/>
                          <label htmlFor="name01" className="">                                 <span className={`${styles.in_box}`}>생년월일 <em>ex)20170201</em></span>
                          </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={`${styles.sp_txt4} ${styles.btn_detail}`}>나의 자녀 정보 열기</button>
            </div>
            <ul className={`${styles.list_cnt}`}>
              <li>맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.</li>
              <li>자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
              <li>맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.<br />(온·오프라인 옴니동의 시 SSG.COM 이용 가능)</li>
            </ul>
            <div className={`${styles.btn_box}`}>
              <button className={`${styles.btn_primary}`}>확인</button>
            </div>
            <strong className={`${styles.sp_txt1}`}>차량 서비스</strong>
            <div>
              <div className={`${styles.set_content_wrap} ${styles.line}`}>
                <div className={`${styles.set_contents}`}>
                  <p className={`${styles.set_tit}`}> [선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의 </p>
                  <p className={`${styles.set_txt}`}>
                    <button className={`${styles.agree_show}`}>
                      <span>내용보기</span>
                    </button>
                  </p>
                </div>
                <div className={`${styles.toggle_btn}`}>
                  <input id="agree0" type="checkbox" className={`${styles.benefit_agreement} hidden`} value="604001702"/>
                    <label htmlFor="agree0">[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의 off</label>
                </div>
              </div>
            </div>
            <div>
              <div className={`${styles.set_content_wrap} ${styles.line}`}>
                <div className={`${styles.set_contents}`}>
                  <p className={`${styles.set_tit}`}> [선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의 </p>
                  <p className={`${styles.set_txt}`}>
                    <button className={`${styles.agree_show}`}>
                      <span>내용보기</span>
                    </button>
                  </p>
                </div>
                <div className={`${styles.toggle_btn}`}>
                  <input id="agree1" type="checkbox" className={`${styles.benefit_agreement} hidden`} value="604001703"/>
                    <label htmlFor="agree1">[선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의 off</label>
                </div>
              </div>
            </div>
            <div className={`${styles.club_info}`}>
              <div className={`${styles.club_info_box}`} style={{"display": "none"}}>
                <div className={`${styles.benefits_cnt}`}>
                  <div className={`${styles.form_box}`}>
                    <div className={`${styles.form_cont}`}>
                      <div className={`${styles.select_box}`}>
                        <select id="areaCarno" title="지역번호">
                        <option defaultValue="" >지역번호없음</option>
                          <option value="서울">서울</option>
                          <option value="부산">부산</option>
                          <option value="경기">경기</option>
                          <option value="강원">강원</option>
                          <option value="충북">충북</option>
                          <option value="충남">충남</option>
                          <option value="전북">전북</option>
                          <option value="전남">전남</option>
                          <option value="경북">경북</option>
                          <option value="경남">경남</option>
                          <option value="제주">제주</option>
                          <option value="대구">대구</option>
                          <option value="인천">인천</option>
                          <option value="광주">광주</option>
                          <option value="대전">대전</option>
                        </select>
                      </div>
                      <div className={`${styles.benefits_select_box}`}>
                        <div className={`${styles.input_box} ${styles.size2} ${styles.location}`}>
                          <input id="name040" type="number" defaultValue="" title="차량 앞자리 번호를 입력해주세요"/>
                            <label htmlFor="name040" className="">
                              <span className={`${styles.in_box}`}>차량 앞자리 번호</span>
                            </label>
                        </div>
                        <div className={`${styles.input_box} ${styles.size2} ${styles.word}`} >
                          <input id="name050" type="text" defaultValue="" title="차량 중간 글자를 입력해주세요"/>
                            <label htmlFor="name050" className="">
                              <span className={`${styles.in_box}`}>차량 중간 글자</span>
                            </label>
                        </div>
                        <div className={`${styles.input_box} ${styles.size2} ${styles.number}`}>
                          <input id="name060" type="number" defaultValue="" title="차량 마지막 번호를 입력해주세요"/>
                            <label htmlFor="name060" className="">
                              <span className={`${styles.in_box}`}>차량 마지막 번호</span>
                            </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={`${styles.sp_txt4} ${styles.btn_detail}`}>나의 차량 정보 열기</button>
            </div>
            <ul className={`${styles.list_cnt}`}>
              <li>이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.
                <ul className={`${styles.list_cnt} ${styles.dash}`}>
                  <li>이마트 : 일부 점포 제외 (이마트앱 &gt; 주차 &gt; 무료주차 가능점포)</li>
                  <li>백화점 : 경기점, 타임스퀘어점 제외</li>
                </ul>
              </li>
              <li className={`${styles.fw500} ${styles.fc_b}`}>차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부 차량번호는 등록되지 않습니다.</li>
            </ul>
            <div className={`${styles.btn_box}`}>
              <button className={`${styles.btn_primary}`}>확인</button>
            </div>
            <strong className={`${styles.sp_txt1}`}>뷰티 클럽</strong>
            <div className={`${styles.set_content_wrap} ${styles.line}`}>
              <div className={`${styles.set_contents}`}>
                <p className={`${styles.set_tit}`}> 뷰티 클럽 가입 </p>
              </div>
              <div className={`${styles.toggle_btn}`}>
                <input id="check04" type="checkbox" true-value="Y" false-value="N"/>
                  <label htmlFor="check04">뷰티 클럽 가입 동의 off</label>
              </div>
            </div>
            <div className={`${styles.brand_info}`}>
              <strong className={`${styles.sp_txt4}`}>해당 브랜드</strong>
              <ul className={`${styles.list_cnt}`}>
                <li> 아모레퍼시픽 </li>
                <li> 이자녹스 </li>
                <li> 더샘 </li>
                <li> 수려한 </li>
                <li> 토니모리 </li>
                <li> 더페이스샵 </li>
                <li> 이니스프리 </li>
                <li> 비욘드 </li>
                <li> 미샤 </li>
                <li> 엔프라니 </li>
                <li> 네이처리퍼블릭 </li>
              </ul>
            </div>
            <p className={`${styles.sp_txt8}`}>이마트 매장에서 브랜드 화장품 구매 시 신세계포인트 2~5% 추가 적립 혜택을 받으실 수 있습니다.</p>
            <div className={`${styles.btn_box}`}>
              <button className={`${styles.btn_primary}`}>확인</button>
            </div>
            <strong className={`${styles.sp_txt1}`}>비즈 클럽</strong>
            <ul className={`${styles.list_cnt} ${styles.line} ${styles.biz}`}>
              <li>개인 사업자 고객님들을 위한 편리한 세금계산서 발행 서비스입니다.</li>
              <li>비즈 클럽 가입 시 등록하신 이메일 주소로 세금계산서가 발송되며, 약 1~2주 정도 소요됩니다.</li>
              <li>세금계산서 발행 거래의 포인트 적립 건은 개인 포인트 적립내역에 합산됩니다.</li>
              <li>혜택은 이마트 매장에서만 적용됩니다.</li>
            </ul>
            <div className={`${styles.btn_box}`}>
              <button className={`${styles.btn_primary}`}>비즈 클럽 바로가기</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
