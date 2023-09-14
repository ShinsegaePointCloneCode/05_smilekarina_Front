'use client'

import React from 'react'
import styles from './Step.module.css';
import { usePathname } from 'next/navigation';

export default function Step(props: { step: number, title: string, description?: string, loginId?: string, name?: string }) {

    const pathname = usePathname();

    let stepStyle;

    switch (props.step) {
        case 1:
            stepStyle = styles.step1;
            break;
        case 2:
            stepStyle = styles.step2;
            break;
        case 3:
            stepStyle = styles.step3;
            break;
        case 4:
            stepStyle = styles.step4;
    }

    const maskSecondCharacter = (str: string) => {
        return str[0] + '*' + str.slice(2);
    }

    return (
        <div><section id="content" className={styles.content} >
            <div className={styles.top_cnt1}>
                <div className={`${styles.join_step} ${stepStyle}`}>
                    <ol>
                        <li>
                            <span aria-hidden="true">1</span>
                            <i className="hidden">현재 1단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">2</span>
                            <i className="hidden">2단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">3</span>
                            <i className="hidden">3단계</i>
                        </li>
                        <li>
                            <span aria-hidden="true">4</span>
                            <i className="hidden">4단계</i>
                        </li>
                    </ol>
                    <p className={styles.tit}>{props.title}</p>
                    <p className={styles.txt}>{props.description}</p>

                    {pathname === '/member/join/success'
                        ?
                        <div>
                            <p className="sp_tit1">
                                <strong className="txt_line0">{props.name && maskSecondCharacter(props.name)}</strong> 님,
                                <span className="user_underline"> {props.loginId} ID</span>로
                                <br />신세계포인트
                                <strong className="fw500"> 통합 회원 가입</strong>이
                                <br />
                                완료되었습니다.
                            </p>
                        </div>
                        : null
                    }
                </div>
            </div>
        </section></div>
    )
}
