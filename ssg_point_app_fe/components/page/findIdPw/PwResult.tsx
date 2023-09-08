'use client'

import React, { useEffect, useState } from 'react'
import styles from './PwResult.module.css'
import { FindPWFormDataType } from '@/types/userDataType'
import PublicModal from '@/components/widget/modal/Modal';
import { useDisclosure } from '@nextui-org/react';

export default function PwResult() {
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>("");
    const [routePath, setRoutePath] = useState<string>("");
    

    const [newPw, setNewPw] = useState<FindPWFormDataType>({
        loginId: '',
        password: '',
        passwordCk: '',
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPw({
            ...newPw,
            [name]: value
        });
    }

    const newPassword = async () => {
        if (newPw.password !== newPw.passwordCk) {
            setModalContent("비밀번호가 일치하지 않습니다.");
            setRoutePath("/member/findPwResult");
            onOpen();
        }
        const res = await fetch('https://smilekarina.duckdns.org/api/v1/member/findPw', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    loginId: newPw.loginId,
                    password: newPw.password
                }
            ),
        });
        const data = await res.json();
        console.log(data.success);
        if (data.success === true) {
            setModalContent("비밀번호가 변경되었습니다.");
            setRoutePath("/login");
            onOpen();
        }
        else {
            setModalContent("비밀번호 변경에 실패하였습니다.");
            setRoutePath("/member/findPwResult");
            onOpen();
        }
    }



    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLoginId = localStorage.getItem('loginId') || '';
            setNewPw((prevPw) => ({
                ...prevPw,
                loginId: storedLoginId,
            }));
        }
    }, []); 
    return (
        <div>
            <div>
                <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} content={modalContent} routePath={routePath} />
            </div>
            <div className={styles.cnt_box0}>
                <div className={styles.form_container}>
                    <div className={styles.form_box}>
                        <p className={styles.tit}> 비밀번호 </p>
                        <div className={styles.input_box}>
                            <input 
                                id="password" 
                                name='password' 
                                type="password" 
                                placeholder='비밀번호를 입력해주세요.' 
                                minLength={8} 
                                onChange={handleOnChange}    
                            />
                        </div>
                    </div>
                    <div className={styles.form_box}>
                        <p className={styles.tit}> 비밀번호 확인 </p>
                        <div className={styles.input_box}>
                            <input 
                                id="passwordCk" 
                                name='passwordCk' 
                                type="password" 
                                placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.' 
                                minLength={8} 
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.btn_box}>
                    <button 
                        className={styles.btn_primary}
                        onClick={() => {
                            
                            newPassword();
                            
                        }}
                        >확인</button>
                </div>
            </div>
            <div className={styles.notice_box}>
                <h3 className={styles.tit}>[유의사항]</h3>
                <ul className={styles.list_cnt}>
                    <li>영문 대/소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8-20자리로 입력해 주세요.</li>
                    <li>직전에 사용한 비밀번호는 사용하실 수 없습니다.</li>
                    <li>아이디와 동일한 비밀번호는 사용하실 수 없습니다.</li>
                    <li>생년월일, 전화번호와 동일하거나 일부를 포함한 비밀번호는 사용하실 수 없습니다.</li>
                    <li>3글자 이상의 동일한 숫자/문자 또는 연속된 숫자/문자, 키보드 상 연속된 배열의 문자는 입력하실 수 없습니다.</li>
                    <li>비밀번호 변경 시 신세계포인트 통합ID로 로그인하는 모든 신세계 그룹사 사이트의 비밀번호가 동일하게 변경됩니다. (최대 10분 소요)</li>
                </ul>
            </div>
        </div>
    )
}
