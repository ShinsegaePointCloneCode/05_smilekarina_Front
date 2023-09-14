'use client'

import React, { useState } from 'react'
import styles from './GroupJoinArea.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function GroupJoinArea(props: { name?: string }) {

    const [isContentHidden, setContentHidden] = useState(true); // 내용을 기본적으로 숨깁니다.

    const toggleContentVisibility = () => {
        setContentHidden(!isContentHidden);
    };
    const maskSecondCharacter = (str: string) => {
        return str[0] + '*' + str.slice(2);
    }

    return (
        <div>
            <div className={styles.group_join_box}>
                <p className={styles.top_tit}>
                    <strong>{props.name && maskSecondCharacter(props.name)}</strong>
                    님,
                    <br />
                    통합 ID로 더 다양한 서비스를
                    <br />
                    이용할 수 있습니다!
                </p>
                <div className={styles.group_join_tab}>
                    <div className={styles.group_join_accodian}>
                        <div className={`${styles.group_join_list} ${styles.gray_type}`}>
                            <div className={`${styles.tab}`} style={{ backgroundColor: 'rgb(255, 184, 28)' }}>
                                <button className={styles.link_box} onClick={toggleContentVisibility}>
                                    <span className={`${styles.logo_img}`}>
                                        <Image
                                            src={'https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/group-images/emart_join_52.png'}
                                            width={56}
                                            height={16}
                                            alt='이마트'
                                        />
                                    </span>
                                    <span className={`${styles.name}`}>이마트</span>
                                    <span className={`${styles.arr}`}>
                                        <span>약관 항목 보기</span>
                                    </span>
                                </button>
                            </div>
                            <div className={isContentHidden ? `${styles.tab_cnt} hidden` : styles.tab_cnt}>
                                <div className={`${styles.txt_cnt}`}>
                                    <p className={`${styles.txt0}`}>이마트 이용약관 및 개인정보 수집·이용동의 내용을 확인하였으며, 아래 내용에 동의합니다.</p>
                                    <p className={`${styles.txt1}`}>㈜이마트 귀중</p>
                                </div>
                                <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type0}`}>
                                    <li className={`${styles.agree_form}`}>
                                        <div className={`${styles.chk_box}`}>
                                            <input id="checkboxall0" type="checkbox" />
                                            <label htmlFor="checkboxall0">
                                                <span className={`${styles.in_box}`}>모두 동의합니다.</span>
                                            </label>
                                        </div>
                                        <p>※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.</p>
                                    </li>
                                </ul>
                                <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type0}`}>
                                    <li className={`${styles.agree_form}`}>
                                        <div className={`${styles.chk_box}`}>
                                            <input id="checkbox00" type="checkbox" className={`${styles.check_list_js}`} value="4003801" />
                                            <label htmlFor="checkbox00">
                                                <span className={`${styles.in_box}`}>[필수] 이마트 필수약관</span>
                                            </label>
                                        </div>
                                        <button className={`${styles.agree_show}`}>
                                            <span>내용보기</span>
                                        </button>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                                <div className={`${styles.btn_box}`}>
                                    <button className={`${styles.btn0}`}>동의하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cnt_box1}>
                <div className={styles.btn_box}>
                    <Link href="/login" className={styles.btn_primary}>신세계포인트 로그인하기</Link>
                </div>
            </div>
        </div>
    )
}
