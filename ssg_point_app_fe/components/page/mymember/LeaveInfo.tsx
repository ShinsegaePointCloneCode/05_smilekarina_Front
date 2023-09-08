'use client'

import React, { useState } from 'react'
import styles from './LeaveInfo.module.css'
import { signOut, useSession } from 'next-auth/react';
import { useDisclosure } from '@nextui-org/react';
import PublicModal from '@/components/widget/modal/Modal';


export default function LeaveInfo() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>("");
    const [routePath, setRoutePath] = useState<string>("");
    const [sendToken, setSendToken] = useState<string>("");
    const session = useSession()

    // const withdrawal = async () => {
    //     if (!session.data?.user.token) {
    //         console.error("Token is not provided.");
    //         return;
    //     }
    //     try{
    
    //         const response = await fetch("https://smilekarina.duckdns.org/api/v1/withdrawal", {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${session.data?.user.token}`
    //                 },                    
    //             })
    //         const data = await response.json();
    //         if (data.success) {
    //             console.log("Withdrawal success.");
    //             signOut({ callbackUrl: '/' })
                
    //         } else {
                
    //         }
    
    //     } catch(e) {
    //         console.log(e);
    //     }
    // };

    const checkWithdrawal = async () => {
        setModalContent('정말로 탈퇴하시겠습니까?');
        setSendToken(session.data?.user.token);
        onOpen();
        // withdrawal();
    }

    return (
        <div>
            <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} content={modalContent} routePath={routePath} token={sendToken} />
            <div className={`${styles.terms_agree_box_wrap}`}>
                <h3 className={`${styles.tit}`}> 회원 탈퇴 사이트 </h3>
                <div className={`${styles.terms_agree_box2}`}>
                    <div className={`${styles.agree_form_box2}`}>
                        <div className={`${styles.chk_box}`}>
                            <input id="addPush00" type="checkbox" />
                            <label htmlFor="addPush00">신세계포인트 통합ID 서비스</label>
                        </div>
                        <div className={`${styles.agree_sub_box}`}>
                            <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type1}`}>
                                <li className={`${styles.agree_form}`}>
                                    <div className={`${styles.chk_box} ${styles.simple}`}>
                                        <input id="agree0" type="checkbox" className={`${styles.signup_online_lists}`} />
                                        <label htmlFor="agree0"> 이마트
                                            <span className={`${styles.txt0}`}>(가입일자 : 2023-09-05)</span>
                                        </label>
                                    </div>
                                    <button className={`${styles.agree_show}`}>
                                        <span>탈퇴하기</span>
                                    </button>
                                </li>
                                <li className={`${styles.agree_form}`}>
                                    <div className={`${styles.chk_box} ${styles.simple}`}>
                                        <input id="agree1" type="checkbox" className={`${styles.signup_online_lists}`} />
                                        <label htmlFor="agree1"> 신세계백화점
                                            <span className={`${styles.txt0}`}>(가입일자 : 2023-09-05)</span>
                                        </label>
                                    </div>
                                    <button className={`${styles.agree_show}`}>
                                        <span>탈퇴하기</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <ul className={`${styles.list_cnt} ${styles.pd_t20}`}>
                            <li>일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${styles.notice_box} ${styles.pd_b40}`}>
                <h3 className={`${styles.tit}`}>[유의사항]</h3>
                <ul className={`${styles.list_cnt}`}>
                    <li className={`${styles.str} ${styles.none}`}>회원 탈퇴 시 현재 이용 중인 모든 신세계포인트 통합ID 서비스 및 사이트를 더 이상 이용하실 수 없어요!</li>
                    <li>신세계포인트 정책에 따라 회원탈퇴 후 5일 동안 다시 가입할 수 없습니다.</li>
                    <li>회원 탈퇴 시 보유하고 계신 포인트, 쿠폰, 각종 적립금 등 모든 혜택은 자동 소멸되며 복구되지 않습니다.</li>
                    <li>트레이더스 유료 멤버십(TRADERS CLUB) 회원인 경우, 클럽(멤버십)을 먼저 탈회하신 뒤에 회원탈퇴가 가능합니다.</li>
                    <li>회원 탈퇴 후 다시 가입하시는 경우 신규 회원으로 가입되며, 이전의 회원정보 및 혜택은 복원되지 않습니다.</li>
                    <li>회원 탈퇴 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.</li>
                    <li>회원 탈퇴 시 신세계포인트 온라인 통합ID 회원만 탈퇴되며, 오프라인 서비스는 계속 이용하실 수 있습니다. (단, 오프라인 카드 미보유 회원은 완전히 탈퇴되며, 신세계포인트의 모든 서비스를 더 이상 이용하실 수 없습니다.)</li>
                </ul>
            </div>
            <div className={`${styles.cnt_box4}`}>
                <div className={`${styles.chk_box}`}>
                    <input id="leaveagree" type="checkbox" />
                    <label htmlFor="leaveagree">탈퇴 유의사항을 모두 확인하였으며,
                        <br />
                        신세계포인트 온라인 통합ID 서비스 탈퇴에 동의합니다.
                    </label>
                </div>
                <div className={`${styles.btn_box}`}>
                    <button onClick={checkWithdrawal} className={`${styles.btn1}`}>온라인 통합ID 탈퇴하기</button>
                </div>
            </div>
        </div>
    )
}
