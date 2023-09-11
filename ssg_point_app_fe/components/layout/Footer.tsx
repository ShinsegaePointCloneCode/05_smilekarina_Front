'use client'

import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import Image from 'next/image';
import footermark from '../../public/images/footermark.png';
import Link from 'next/link';
import DarkMode from './DarkMode';

export default function Footer() {

  
    return (
        <div >
        <footer className={`${styles.font} `}>
            <div className={styles.footer_box} style={{ transitionDuration: '300ms', transform: 'unset' }}>
                <ul className={`${styles.terms} flex justify-between`}>
                    <div>
                        <li><Link href="#">서비스 이용약관</Link></li>
                        <li><Link href="#" className={styles.fnt_color}>개인정보 처리방침</Link></li>
                    </div>
                    
                    <li><DarkMode></DarkMode></li>
                </ul>
                <div className={styles.info}>
                    <p className={styles.tit}>신세계포인트 고객센터</p>
                    <button className={styles.tel}>1899-4349</button>
                    <p className={styles.txt0}>
                        운영시간 : <em>09</em>시 - <em>18</em>시<br />
                        점심시간 : <em>12</em>시 - <em>13</em>시<br />
                        (공휴일 제외)
                    </p>
                </div>
                <div className={styles.txt_cnt}>
                    <p className={styles.txt}>
                        <span className={styles.txt0}>㈜이마트 서울시 중구 세종대로 7길 37(순화동)</span>
                        <span className={styles.txt1}>대표자 : 강희석</span>
                        <span className={styles.txt2}>사업자등록번호 : 206-86-50913</span>
                    </p>
                    <p className={styles.copyright}>COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.</p>
                </div>
                <div className={styles.wa_mark}>
                    <Link title="새창" href="http://www.wa.or.kr/board/list.asp?BoardID=0006" target="_blank" rel="noopener noreferrer">
                        <Image
                            className={styles.wa}
                            src={footermark}
                            width={67}
                            height={46.156}
                            alt="(사)한국장애인단체총연합회 한국웹접근성인증평가원 웹 접근성 우수사이트 인증마크 (WA인증마크)"
                        />
                    </Link>
                </div>
            </div>

            {/* <div id="alertCustomerTel" className="alert_popup">
                <div className="layer">
                    <div className="pop_contents">
                        <p className="alert_txt">
                            고객센터에 연결하시겠습니까?<br />
                            운영시간 : 9시 ~ 18시<br />
                            점심시간 : 12시 ~ 13시<br />
                            <span className="sm sm_block">(공휴일 제외)</span>
                        </p>
                    </div>
                    <div className="btn_box">
                        <button className="btn1">아니오</button>
                        <a href="#" className="btn0">예</a>
                    </div>
                </div>
                <div className="dimmed"></div>
            </div> */}
        </footer>
        </div>
    );

}

