'use client'

import React, { useState } from 'react'
import styles from './Callinfo.module.css'
import Link from 'next/link'

export interface agreeList {
    agree1: Boolean,
    agree2: Boolean,
    agree3: Boolean,
    agree4: Boolean,
    agree5: Boolean,
    agree6: Boolean,
}

export default function Callinfo() {
    const [agreeList, setAgreeList] = useState<agreeList>({
        agree1: false,
        agree2: false,
        agree3: false,
        agree4: false,
        agree5: false,
        agree6: false,
    })

    const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setAgreeList(prevData => ({
            ...prevData,
            agree3: checked,
            agree4: checked,
            agree5: checked,
            agree6: checked
        }));
    }

    const isAllChecked = (): boolean => {
        return !!agreeList.agree3 && !!agreeList.agree4 && !!agreeList.agree5 && !!agreeList.agree6;
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setAgreeList({
                ...agreeList,
                [name]: checked
            });
        } 
    }
    
    return (
        <div>
            <div className={`${styles.user_info_cnt} ${styles.bg_w}}`}>
                <p className={`${styles.tit}`}> 등록된 연락처 정보를 확인하세요. </p>
                <div className={`${styles.user_info}`}>
                    <dl>
                        <dt>휴대폰 번호</dt>
                        <dd>010-43**-04**</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>
                        </dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>부산 남구 용소로, ***** </dd>
                    </dl>
                </div>
            </div>

            <div className={`${styles.txt_btn_box} ${styles.bg_w}`}>
                <p className={`${styles.tit}`}>
                    <strong>연락처 정보 변경이 필요하시나요?</strong>
                    <br /> 회원정보 수정 메뉴에서 변경하실 수 있습니다.
                </p>
                <div className={`${styles.btn_box}`}>
                </div>
                <Link href="/myinfo/cert" className={`${styles.btn_arrow}`}>회원정보 수정</Link>
            </div>

            <div className={styles.terms_agree_box}>
                <div className={styles.agree_form_box}>
                    <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type0}`}>
                        <li className={`${styles.agree_form} ${styles.join_agree}`}>
                            <div className={styles.chk_box}>
                                <input type="checkbox" id="terms0" name='agree1' checked={!!agreeList.agree1} onChange={handleOnChange} />
                                <label htmlFor="terms0">[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의</label>
                            </div>
                            <button className={styles.agree_show}><span>내용보기</span></button>
                        </li>
                        <li className={`${styles.agree_form} ${styles.join_agree}`}>
                            <div className={styles.chk_box}>
                                <input type="checkbox" id="terms1" name='agree2' checked={!!agreeList.agree2} onChange={handleOnChange} />
                                <label htmlFor="terms1">[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의</label>
                            </div>
                            <button className={styles.agree_show}><span>내용보기</span></button>
                        </li>
                    </ul>
                    <div className={styles.agree_sub_box}>
                        <p className={styles.add_info_agree_tit}> 신세계포인트 광고정보 수신동의 </p>
                        <div className={`${styles.chk_box} ${styles.simple}`}>
                        <input id="receiveAllspoint" type="checkbox" value="0" checked={isAllChecked()} onChange={handleAllCheck} />
                            <label htmlFor="receiveAllspoint">전체동의</label>
                        </div>
                        <div className={`${styles.chk_group_box} ${styles.col_f}`}>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="receivespoint0" type="checkbox" name='agree3' checked={!!agreeList.agree3} onChange={handleOnChange} />
                                <label htmlFor="receivespoint0">이메일</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="receivespoint1" type="checkbox" name='agree4' checked={!!agreeList.agree4} onChange={handleOnChange} />
                                <label htmlFor="receivespoint1">문자</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="receivespoint2" type="checkbox" name='agree5' checked={!!agreeList.agree5} onChange={handleOnChange} />
                                <label htmlFor="receivespoint2">DM</label>
                            </div>
                            <div className={`${styles.chk_box} ${styles.simple}`}>
                                <input id="receivespoint3" type="checkbox" name='agree6' checked={!!agreeList.agree6} onChange={handleOnChange} />
                                <label htmlFor="receivespoint3">TM</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.add_info_agree_txt}>
                <p>
                    당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
                    <br />
                    ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
                </p>
            </div>

            <div className={styles.cnt_box2}>
                <div className={styles.btn_box}>
                    <button className={styles.btn_primary}
                        >확인</button>
                </div>
            </div>
            <div className={styles.notice_box}>
                <h3 className={styles.tit}>[유의사항]</h3>
                <ul className={styles.list_cnt}>
                    <li>광고정보 수신거부와 관계없이 회원 및 서비스 정책 변경, 주문/배송 안내, 법적 의무사항 등 안내성 고지 사항은 정상 발송됩니다.</li>
                    <li>광고정보 수신거부 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.</li>
                </ul>
            </div>
        </div>
    )
}
