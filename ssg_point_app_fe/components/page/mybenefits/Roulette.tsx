'use client'

import React, { useState, useEffect } from 'react'
import styles from './Roulette.module.css'
import { Wheel } from 'react-custom-roulette'

export default function Roulette() {
    const [isClient, setIsClient] = useState(false); // 클라이언트 사이드 여부를 나타내는 상태

    useEffect(() => {
        setIsClient(true); // 컴포넌트가 마운트될 때 클라이언트 사이드임을 설정
    }, []);
    const data = [
        { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
        { option: '1', style: { backgroundColor: 'white' } },
        { option: '2' },
    ]
    return (
        <div>
            <div id="ruckyRoulette" className={`${styles.my_benebit_event}`}>
                <h3 className={`${styles.hidden}`}>럭키룰렛</h3>
                <button className={`${styles.share_btn} ${styles.black}`}>
                    <span className={`${styles.blind}`}></span>
                    공유
                </button>
                <div className={`${styles.roulette_event_box}`}>
                    <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/095bb0ee-3954-4a83-b1d4-aa780cda0afe.jpg" alt="럭키룰렛! 푸시 알림 설정 ON 하시고 행운의 룰렛을 돌리면 최대 1000포인트 획득! 잊지마세요 매일 100% 당첨인 럭키 룰렛~ 기간: 9월 1일 ~ 9월 30일 " className={`${styles.img0}`} />
                    <div className={`${styles.roulette_board} ${styles.renewal}`}>
                        <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/16168219-cc5a-4591-9ed2-e5274852a178.jpg" alt="럭키룰렛! 푸시 알림 설정 ON 하시고 행운의 룰렛을 돌리면 최대 1000포인트 획득! 잊지마세요 매일 100% 당첨인 럭키 룰렛~ 기간: 9월 1일 ~ 9월 30일" className={`${styles.img0}`} />
                        <div className={`${styles.roulette_img}`}>
                            <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/21a3d291-1fc4-44c0-8e4d-2b669c4432a8.png" alt="럭키룰렛! 푸시 알림 설정 ON 하시고 행운의 룰렛을 돌리면 최대 1000포인트 획득! 잊지마세요 매일 100% 당첨인 럭키 룰렛~ 기간: 9월 1일 ~ 9월 30일" className={`${styles.img1}`} style={{ "transform": "rotate(0deg)" }} />
                        </div>
                        <div className={`${styles.roulette_btn}`} >
                            <button className={`${styles.btn}`} disabled={true}>
                                <span>참여완료</span>
                            </button>
                        </div>
                    </div>
                </div>
                <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/00b72c00-7bfa-486f-9184-2625223e4e28.jpg" alt="START 를 눌러 룰렛 돌리기 잠깐! 푸시 알림 동의하는 방법을 안내드립니다. (단 앱에서만 가능합니다.) 하나, 앱 설정에서 버튼을 ON으로! - 상단의 메뉴바 클릭 - 설정 아이콘 클릭 - 푸시 알림 동의 버튼 클릭 둘, 광고정보 수신관리에서 체크! - 하단 메뉴의 마이회원정보 클릭 - 광고정보 수신관리 클릭 - 푸시알림 동의 체크 클릭   유의사항) 앱 푸시 알림 동의 회원에 한해 1일 1회 참여가 가능합니다. 지급된 포인트는 당일 사용이 가능합니다. " className={`${styles.notice_img}`} />
            </div>
            {/* {isClient && (
                <div>
                    <Wheel
                        mustStartSpinning={false}
                        prizeNumber={3}
                        data={data}
                        backgroundColors={['#3e3e3e', '#df3428']}
                        textColors={['#ffffff']}
                    />
                </div>
            )} */}
        </div>
    )
}
