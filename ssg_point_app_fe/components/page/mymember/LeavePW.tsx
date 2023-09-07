'use client'

import React, { useState } from 'react'
import styles from './LeavePW.module.css'
import { useDisclosure } from '@nextui-org/react';
import PublicModal from '@/components/widget/modal/Modal';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LeavePW() {
    const [pw, setPw] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>("");
    const [routePath, setRoutePath] = useState<string>("");
    const session = useSession()
    const router = useRouter();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
        console.log(pw);
    }

    const checkPw = async () => {
        if (!pw) {
            setModalContent("비밀번호를 입력해 주세요.");
            onOpen();
            return;
        }
        if (!session.data?.user.token) {
            console.error("Token is not provided.");
            return;
        }
        try{
            const response = await fetch("https://smilekarina.duckdns.org/api/v1/withdrawal/check", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${session.data.user.token}`
                    },
                    body: JSON.stringify({
                        password: pw,

                    })
                })
            const data = await response.json();
            if (data.success) {
                router.push('/withdrawal/leaveUsingService');
            } else {
                setModalContent("비밀번호가 일치하지 않습니다.");
                onOpen();
            }

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} content={modalContent} routePath={routePath} />
            </div>
            <div className={`${styles.cnt_box0}`}>
                <div className={`${styles.form_box} ${styles.pd_b25}`}>
                    <p className={`${styles.tit}`}> 비밀번호 </p>
                    <div className={`${styles.input_box}`}>
                        <input 
                            id="pw" 
                            name='pw' 
                            type="password" 
                            placeholder='비밀번호를 입력해주세요.' 
                            value={pw}
                            onChange={handleOnChange}
                        />
                        
                    </div>
                </div>
                <div className={`${styles.btn_box}`}>
                    <button onClick={checkPw} className={`${styles.btn_primary}`}>확인</button>
                </div>
            </div>
        </div>
    )
}
