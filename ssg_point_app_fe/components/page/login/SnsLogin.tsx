'use client'

import Link from 'next/link'
import React from 'react'
import styles from './SnsLogin.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function SnsLogin() {

    const query = useSearchParams();
    const callBackUrl = query.get('callbackUrl');
    const session = useSession()


    const handleLogin = async (provider: string) => {

    
        const result = await signIn(provider, {
            redirect: true,
            callbackUrl: callBackUrl ? callBackUrl : '/'
        })
        



    };

    return (
        <div>
            <div className={styles.sns_list_box}>
                <h3 className={styles.tit}>간편 로그인</h3>
                <ul className={styles.sns_list}>
                    <li className={styles.naver}>
                        <button onClick={() => handleLogin('naver')} title="새창 열림" className={styles.btn}>
                            <span className='hidden'>naver</span>
                        </button>
                    </li>
                    <li className={styles.kakao}>
                        <button onClick={() => handleLogin('kakao')} title="새창 열림" className={styles.btn}>
                            <span className='hidden'>kakao</span>
                        </button>
                    </li>
                    <li className={styles.apple}>
                        <button onClick={() => signIn()} title="새창 열림" className={styles.btn}>
                            <span className='hidden'>apple</span>
                        </button>
                    </li></ul>
                {/* <div id="alertPopupsnsLoginListLoginErrorAlertPopup" className={styles.alert_popup}>
            <div className={styles.layer}>
            <div className={styles.pop_contents}>
                <p className={styles.alert_txt}>간편 인증 오류가 발생했습니다.
                <br/> 다시 시도해 주세요.</p>
            </div>
            <div className={styles.btn_box}>
                <button className={styles.btn0}>확인</button>
            </div>
            </div>
            <div className={styles.dimed}>
            </div>
        </div> */}
            </div>
        </div>
    )
}
