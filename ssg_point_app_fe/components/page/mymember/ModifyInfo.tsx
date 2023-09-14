'use client'

import React, { useEffect, useState } from 'react'
import styles from './ModifyInfo.module.css'
import { ModifyFormDataType } from '@/types/userDataType'
import { useRouter } from 'next/navigation';
import PublicModal from '@/components/widget/modal/Modal';
import { useDisclosure } from "@nextui-org/react";
import { DaumAddressType } from '@/types/DaumAddressType';
import PostCodeDaum from '@/components/widget/post/PostCodeDaum';
import { useSession } from 'next-auth/react';

export default function ModifyInfo() {

    const session = useSession()
    const isClient = typeof window !== 'undefined';
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>("");
    const [routePath, setRoutePath] = useState<string>("");
    const [isView, setIsView] = useState<boolean>(false);
    const [address, setAddress] = useState<DaumAddressType>();
    const [signupData, setSignupData] = useState<ModifyFormDataType>({
        loginId: '',
        password: '',
        userName: '',
        phone: '',
        zoneCode: '',
        address: '',
        detailAddress: '',
        email: '',
        emailDomain: '',
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setSignupData({
                ...signupData,
                [name]: checked
            });
        } else {
            setSignupData({
                ...signupData,
                [name]: value
            });
        }
    }
    const handleEmailDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === "직접입력") {
            setSignupData({
                ...signupData,
                emailDomain: ''
            });
        } else {
            setSignupData({
                ...signupData,
                emailDomain: value
            });
        }
    }


    const modifyInfo = async () => {

        const { loginId, userName, phone, zoneCode, address, detailAddress, email, emailDomain } = signupData;

        const fullAddress = zoneCode+ "," + address + "," + detailAddress;
        const fullEmail = email + "@" + emailDomain;

        try {
            if (!session.data?.user.token) {
                console.error("Token is not provided.");
                return;
            }

            const response = await fetch('https://smilekarina.duckdns.org/api/v1/myinfo/modify', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.data.user.token}`
                },
                body: JSON.stringify({
                    email: fullEmail,
                    address: fullAddress,
                    },
                )
            })
            const data = await response.json();
            if (data.success) {
                setModalContent("회원정보 수정이 완료되었습니다.");
                setRoutePath("/");
                onOpen();
            } else {
                setModalContent("정보를 다시 입력해 주세요.");
                onOpen();
            }
        } catch (error) {
            console.error("Error sending PUT request:", error);
        }
    }

    useEffect(() => {
        const tempName = isClient && localStorage.getItem('tempName');
        const tempPhone = isClient && localStorage.getItem('tempPhone');
        const temploginId = isClient && localStorage.getItem('loginId') || '';
        const tempAddress = isClient && localStorage.getItem('address') || '';
        const [zoneCode, addr, detailaddr] = tempAddress.split(',');

        if (tempName && tempPhone) {
            setSignupData({
                ...signupData,
                userName: tempName,
                phone: tempPhone,
                loginId: temploginId,
                zoneCode: zoneCode?.trim(),
                address: addr?.trim(),
                detailAddress: detailaddr?.trim(),
            });
        }

        if (address) {
            setSignupData({
                ...signupData,
                zoneCode: address.zonecode,
                address: address.address,
                detailAddress: ""
            });
        }
    }, [address]);

    return (
        <div>
            <p></p>
            <div>
                <div>
                    <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} routePath={routePath} content={modalContent} />
                </div>
            </div>
            <div className={styles.cnt_box0}>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 아이디<span className="hidden">필수항목</span></p>
                    <div className={styles.input_btn_box}>
                        <div className={styles.input_box}>
                            <input type="text" id="loginId" name='loginId'
                                placeholder='영문, 숫자 6~20자리 입력해주세요.' title="회원 가입을 위한 아이디 입력"
                                value={signupData.loginId.toString()} readOnly className={styles.readonly_bg} />
                        </div>
                    </div>
                    <p className={styles.error_txt}> 아이디 형식에 맞게 입력해주세요. </p>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 이름 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="text" id="name" name='name' title="이름" value={signupData.userName.toString()} readOnly
                            className={styles.readonly_bg} />
                    </div>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 휴대폰번호 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_box}>
                        <input type="text" id="phone" name='phone' title="휴대폰번호" value={signupData.phone.toString()} readOnly className={styles.readonly_bg} />
                    </div>
                </div>
                <div className={`${styles.form_box} ${styles.required}`}>
                    <p className={styles.tit}> 자택주소 <span className="hidden">필수항목</span></p>
                    <div className={styles.input_address_box}>
                        <div className={`${styles.input_btn_box} ${styles.w_type2}`}>
                            <div className={styles.input_box}>
                                <input type="text" id="zoneCode" name='zoneCode' value={signupData.zoneCode.toString()} readOnly placeholder='우편번호' />
                            </div>
                            <div className={styles.btn_box}>
                                <div className={styles.btn2}>
                                    <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress} /></div>
                            </div>
                        </div>
                        <div className={`${styles.input_box} mb-2`}>
                            <input type="text" id="address" name='address' value={signupData.address.toString()} readOnly placeholder='주소' />
                        </div>
                        <div className={styles.input_box} >
                            <input type="text" id="detailAddress" name='detailAddress' placeholder='상세주소' value={signupData.detailAddress.toString()} onChange={handleOnChange} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.form_box}`}>
                    <p className={`${styles.tit}`}> 이메일 </p>
                    <div className={`${styles.input_mail_box}`}>
                        <div className={`${styles.col2_box}`}>
                            <div className={`${styles.input_box}`}>
                                <input id="email" name='email' type="text" onChange={handleOnChange} value={signupData.email} />
                            </div>
                            <span className={`${styles.deco}`}>@</span>
                            <div className={`${styles.input_box}`}>
                                <input id="emailDomain" name='emailDomain' type="text" onChange={handleOnChange} value={signupData.emailDomain} />
                            </div>
                        </div>
                        <div className={`${styles.select_box}`}>
                            <select id="" title="이메일 선택" onChange={handleEmailDomainChange}>
                                <option value=""> 직접입력 </option>
                                <option value="naver.com"> naver.com </option>
                                <option value="daum.net"> daum.net </option>
                                <option value="gmail.com"> gmail.com </option>
                                <option value="kakao.com"> kakao.com </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cnt_box2}>
                <div className={styles.btn_box}>
                    <button className={styles.btn_primary}
                        onClick={() => {
                            modifyInfo();
                        }}>확인</button>
                </div>
            </div>
            <div className={styles.notice_box}>
                <h3 className={styles.tit}>[유의사항]</h3>
                <ul className={`${styles.list_cnt}`}>
                    <li>본인인증을 통해 확인된 정보는 수정하실 수 없습니다.</li>
                    <li>회원정보 수정 시 신세계포인트 오프라인 및 통합ID로 로그인하는 모든 신세계 그룹사 사이트의 회원정보가 동일하게 변경됩니다. (최대 10분 소요) </li>
                </ul>
            </div>
        </div>
    )
}
