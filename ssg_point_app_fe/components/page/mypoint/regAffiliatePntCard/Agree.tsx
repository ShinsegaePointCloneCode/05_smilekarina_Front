import React from 'react'
import style from './regAffiliatePntCard.module.css'

export default function Agree() {
    return (
        <div>
            <div className={style.agree_membership}>
                <div className={style.agree_box}>
                    <p>
                        [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
                        <button className={style.agree_show}>
                            <span >내용보기</span>
                        </button>
                    </p>
                </div>
                <div className={style.chk_box}>
                    <input type="checkbox" id="agree0000" true-value="Y" false-value="N" />
                    <label htmlFor="agree0000">동의합니다.</label>
                </div>
            </div>
        </div>
    )
}
