import React from 'react'
import styles from './AttendCheck.module.css';

export default function AttendCheck() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const todayDate = currentDate.getDate();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const weekDays = ['sun', '', '', '', '', '', 'sat'];
    return (
        <div>
            <div id="stampCalendar" className={`${styles.my_benebit_event}`}>
                <h3 className={`${styles.hidden}`}>출석체크</h3>
                <button className={`${styles.share_btn}`}>
                    <span className={`${styles.blind}`}></span> 공유
                </button>
                <div className={`${styles.chcheck_event_box}`}>
                    <div className={`${styles.chcheck_img}`}>
                        <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/9fd9fefd-1f0e-4eab-bc89-b41670321140.jpg" alt="신세계포인트 매일매일 출석체크! 매일 출석체크하고 포인트 받으세요! 기간: 9월 1일 ~ 9월 30일. 매일 출석체크하고 포인트 받기, 10일 연속 출석하고 추가 포인트 받기" />
                    </div>

                    <div className={`${styles.chcheck_calendar_box} ${styles.renewal}`}>
                        <ul className={`${styles.chcheck_calendar} ${styles.space5}`}>
                            {Array(daysInMonth).fill(null).map((_, idx) => (
                                <li className={styles[weekDays[(firstDay + idx) % 7]]} key={idx}>
                                    <div className={`${styles.chcheck} ${(idx + 1 < todayDate) ? styles.end : ''} ${todayDate === idx + 1 ? styles.today : ''}`}>
                                        <span className={styles.chcheck_in}>
                                            <span className={styles.num}>{idx + 1}</span>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.chcheck_img}`}>
                        <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/webapp/20230824/bc806426-bc95-4c3f-8aaa-7396b2d69978.jpg" alt="출석체크 참여방법 : 신세계포인트에 로그인하기 - 캘린더에서 오늘의 날짜 선택하여 출석체크 하기 - 출석 횟수에 따라서 포인트 받기   (유의사항) 1일 1회 참여 가능합니다. 지급된 포인트는 당일 사용이 가능합니다" />
                    </div>
                </div>
            </div>

        </div>
    )
}
