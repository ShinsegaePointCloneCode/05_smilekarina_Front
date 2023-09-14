'use client'

import React, { useEffect, useRef } from 'react'
import styles from './SideMenu.module.css'
import SideContents from './SideContents'

function SideMenu(props: { isOpened: Boolean, setIsOpened: React.Dispatch<React.SetStateAction<Boolean>> }) {

    const { isOpened, setIsOpened } = props;
    const sideMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpened && sideMenuRef.current) {
            sideMenuRef.current.focus();
            document.body.style.overflow = 'hidden';  // overflow를 hidden으로 설정
        } else {
            document.body.style.overflow = 'auto';  // overflow를 원래 상태로 복원
        }
    }, [isOpened]);

    return (
        <>
            <div 
                tabIndex={0}
                ref={sideMenuRef} 
                className={isOpened ? `${styles.sidemenuwrap} ${styles.open}` : `${styles.sidemenuwrap}`}
            >
                <SideContents />
            </div>
            <div className={isOpened ? styles.overlay : ''} onClick={() => setIsOpened(false)}>
            </div>
        </>
    )
}

export default SideMenu
