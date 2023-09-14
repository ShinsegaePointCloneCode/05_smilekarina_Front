import React, { useState } from 'react'
import styles from './Menu.module.css'
import { SideMenuData } from '@/datas/sideMenuData'
import { useSession } from 'next-auth/react'

export default function Menu() {
    const [openSubtitles, setOpenSubtitles] = useState<string[]>([]);

    const toggleMenu = (subtitle: string) => {
        if (openSubtitles.includes(subtitle)) {
            setOpenSubtitles(prev => prev.filter(item => item !== subtitle));
        } else {
            setOpenSubtitles(prev => [...prev, subtitle]);
        }
    };

    const session = useSession();

    const renderMenusByTitleAndSubtitle = (title: string, subtitle: string) => {
        return SideMenuData.filter(menu => menu.title === title && menu.subtitle === subtitle).map((menu) => (
            <li key={menu.id}>
                <a href={menu.menuUrl}>
                    <img alt={menu.menuName} aria-hidden="true" src={menu.menuIcon} />
                    {menu.menuName}
                </a>
            </li>
        ));
    }

    const renderAccordionForMyPage = (subtitle: string) => (
        <>
            <button className={`${styles.acco_btn} ${openSubtitles.includes(subtitle) ? styles.on : ''}`} onClick={() => toggleMenu(subtitle)}>
                {subtitle}
                <span className={styles.arr}>
                    <em>메뉴 열기</em>
                </span>
            </button>
            <div className={styles.acco_cnt} style={{ display: openSubtitles.includes(subtitle) ? 'block' : 'none' }}>
                <ul className={styles.menu_list}>
                    {renderMenusByTitleAndSubtitle("마이 페이지", subtitle)}
                </ul>
            </div>
        </>
    );

    return (
        <div className={styles.lnb_menu}>
            {session.status === 'authenticated' ?
                <div>
                    <div className={`${styles.lnb_menu_box} ${styles.menu_box0}`}>
                        <h3 className={styles.menu_tit}>마이 페이지</h3>
                        <div className={styles.lnb_accodian}>
                            {["마이 포인트", "마이 혜택", "마이 라운지", "마이 회원정보"].map(subtitle => (
                                <div className={styles.acco_box} key={subtitle}>
                                    {renderAccordionForMyPage(subtitle)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.lnb_menu_box} ${styles.menu_box1}`}>
                        <h3 className={`${styles.menu_tit}`}>신세계포인트</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type1}`}>
                            {renderMenusByTitleAndSubtitle("신세계포인트", "")}
                        </ul>

                        <h3 className={`${styles.menu_tit}`}>멤버십 서비스</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type2}`}>
                            {renderMenusByTitleAndSubtitle("멤버십 서비스", "")}
                        </ul>
                        <h3 className={`${styles.menu_tit}`}>고객센터</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type2}`}>
                            {renderMenusByTitleAndSubtitle("고객센터", "")}
                        </ul>

                    </div>

                    
                </div>
                :
                <div className={`${styles.lnb_menu_box} ${styles.menu_box1}`}>
                        <h3 className={`${styles.menu_tit}`}>신세계포인트</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type1}`}>
                            {renderMenusByTitleAndSubtitle("신세계포인트", "")}
                        </ul>

                        <h3 className={`${styles.menu_tit}`}>멤버십 서비스</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type2}`}>
                            {renderMenusByTitleAndSubtitle("멤버십 서비스", "")}
                        </ul>
                        <h3 className={`${styles.menu_tit}`}>고객센터</h3>
                        <ul className={`${styles.menu_list} ${styles.w_type2}`}>
                            {renderMenusByTitleAndSubtitle("고객센터", "")}
                        </ul>

                    </div>
            }

        </div>
    )
}
