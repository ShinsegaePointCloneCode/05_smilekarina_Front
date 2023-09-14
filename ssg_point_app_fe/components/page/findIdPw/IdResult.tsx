'use client'

import React, { useEffect, useState } from 'react'
import styles from './IdResult.module.css'
import Link from 'next/link'

export default function IdResult() {
    const [loginId, setLoginId] = useState<string>('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLoginId = localStorage.getItem('loginId') || '';
            setLoginId(storedLoginId);
        }
    }, [])

    
    

    return (
        <div>
            <div className={styles.cnt_box1}>
                <div className={styles.id_info_cnt}>
                    <dl className={styles.cnt}>
                        <dt className={styles.tit}> 아이디 </dt>
                        <dd className={styles.txt}> {loginId} </dd>
                    </dl>
                </div>
                <div className={styles.btn_box}>
                    <Link href="/login" className={styles.btn_primary}>로그인</Link>
                </div>
            </div>
            <div className={styles.find_pw_btn_box}>
                <p className={styles.sp_txt0}>
                    <strong>비밀번호가 생각나지 않으세요?</strong>
                    <br/>
                    본인인증 후 비밀번호를 변경하실 수 있습니다. </p>
                    <Link href="/member/findPw" className={styles.btn_arrow}>비밀번호 찾기</Link>
                    </div>
        </div>
    )
}
