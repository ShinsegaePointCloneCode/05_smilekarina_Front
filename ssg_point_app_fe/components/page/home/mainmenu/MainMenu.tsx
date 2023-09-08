
import React from 'react'
import styles from './MainMenu.module.css'
import Link from 'next/link'

export default function MainMenu() {
    return (
        <div>
            <div className={styles.main_menu}>
                <h3 className="hidden">메인 메뉴</h3>
                <ul>
                    <li>
                        <Link href="/event/ingevent">
                            <img src="/images/logo1.png"
                                aria-hidden="true" alt="" />이벤트</Link>
                    </li>
                    <li>
                        <Link href="/benefits/pntPlus/attend">
                            <img src="/images/logo2.png"
                                aria-hidden="true" alt="" />출석체크</Link>
                    </li>
                    <li>
                        <Link href="/benefits/pntPlus/roulette">
                            <img src="/images/logo3.png"
                                aria-hidden="true" alt="" />럭키룰렛</Link>
                    </li>
                    <li>
                        <Link href="/benefits/benefitMyLuck">
                            <img src="/images/logo5.png" aria-hidden="true" alt="" />운세서비스</Link>
                    </li>
                    <li>
                        <a href="">
                            <img src="/images/logo4.png"
                                aria-hidden="true" alt="" />영수증</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
