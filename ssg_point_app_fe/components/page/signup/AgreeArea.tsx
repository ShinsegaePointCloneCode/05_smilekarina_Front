'use client'

import React, { useState } from 'react'
import styles from './AgreeArea.module.css'
import { useRouter } from 'next/navigation'

export interface AgreeDataType {
  agree1: boolean;
  agree2: boolean;
  agree3: boolean;
  agree4: boolean;
  agree5: boolean;
  agree6: boolean;
}

export default function AgreeArea() {

  const router = useRouter()

  const [agreetData, setAgreeData] = useState<AgreeDataType>({
    agree1: false,
    agree2: false,
    agree3: false,
    agree4: false,
    agree5: false,
    agree6: false
  });

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgreeData(prevData => ({
        ...prevData,
        agree1: checked,
        agree2: checked,
        agree3: checked,
        agree4: checked,
        agree5: checked,
        agree6: checked
    }));
}
const isAllChecked = (): boolean => {
    return !!agreetData.agree1 && !!agreetData.agree2 && !!agreetData.agree3 && !!agreetData.agree4 && !!agreetData.agree5 && !!agreetData.agree6;
}

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreeData({
      ...agreetData,
      [name]: checked
    });
    
  }

  const handleLocalStorage = (agree1: boolean, agree2: boolean) => {
    localStorage.setItem('tempagree1', agree1.toString())
    localStorage.setItem('tempagree2', agree2.toString())
}

  return (
    <div>
      <div className={styles.cnt_box0}>
        <div className={`${styles.join_agree_box} ${styles.check_box_js}`}>
          <div className={styles.chk_box2}>
            <input type="checkbox" id="termsAllChk" className={styles.check_all_js} checked={isAllChecked()} onChange={handleAllCheck} />
            <label htmlFor="termsAllChk">모두 동의합니다.</label>
          </div>
          <p className={`${styles.fc_g2} ${styles.sp_txt8}`}>※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.</p>
          <p className={styles.tit}> 신세계포인트 통합회원 </p>
          <p className={styles.txt}>㈜이마트, ㈜신세계, ㈜광주신세계, ㈜신세계동대구복합환승센터 귀중</p>
          <ul className={`${styles.agree_list} ${styles.btn_type0} ${styles.txt_type0}`}>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms4001701" className={`${styles.check_list_js} ${styles.required_list}`} value="4001701" name='agree3' checked={!!agreetData.agree3} onChange={handleOnChange} />
                <label htmlFor="terms4001701">[필수] 신세계포인트 회원 이용약관</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms104001701" className={`${styles.check_list_js} ${styles.required_list}`} value="104001701" name='agree4' checked={!!agreetData.agree4} onChange={handleOnChange} />
                <label htmlFor="terms104001701">[필수] 개인정보 수집 및 이용동의</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms104001702" className={`${styles.check_list_js} ${styles.required_list}`} value="104001702" name='agree5' checked={!!agreetData.agree5} onChange={handleOnChange} />
                <label htmlFor="terms104001702">[필수] 이마트/신세계 공동 개인정보 수집 및 이용 동의</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms104001703" className={`${styles.check_list_js} ${styles.required_list}`} value="104001703" name='agree6' checked={!!agreetData.agree6} onChange={handleOnChange} />
                <label htmlFor="terms104001703">[필수] 통합회원 서비스 제공 개인정보 제3자 제공 동의</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms104001704" className={`${styles.check_list_js} ${styles.optional_list}`} name='agree1' checked={!!agreetData.agree1} onChange={handleOnChange} />
                <label htmlFor="terms104001704">[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
            <li className={styles.agree_form}>
              <div className={styles.chk_box}>
                <input type="checkbox" id="terms104001705" className={`${styles.check_list_js} ${styles.optional_list}`} name='agree2' checked={!!agreetData.agree2} onChange={handleOnChange} />
                <label htmlFor="terms104001705">[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의</label>
              </div>
              <button className={styles.agree_show}>
                <span>내용보기</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.btn_box}>
          <button onClick={() => {handleLocalStorage(agreetData.agree1, agreetData.agree2)
            router.push('/member/join/form');}} className={`${styles.btn_primary} ${styles.disabled}`}>다음</button>
        </div>
      </div>
    </div>
  )
}
