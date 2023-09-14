import React from 'react'
import styles from './BookmarkStore.module.css'

export default function BookmarkStore() {
    return (
        <div>
            <div className={`${styles.regular_reg02}`}>
                <ul>
                    <li>
                        <div className={`${styles.regular_location}`}>
                            <img src="/static/brand/images/map/B200003370.png" alt="로고 이미지" className={`${styles.logo_img}`}/>
                                <p className={`${styles.regular_tit}`}> 성동연무장점 </p>
                                <p className={`${styles.regular_txt}`}> 서울 성동구 연무장길 58(성수동2가)
                                </p><button className={`${styles.regular_mark}`}> 단골매장 삭제 </button>
                        </div>
                    </li>
                </ul>
                <div className={`${styles.btn_box}`}>
                    <a href="" className={`${styles.btn_primary}`}>단골 매장 등록하기</a>
                </div>
            </div>
        </div>
    )
}
