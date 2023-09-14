import Link from 'next/link'
import React from 'react'
import styles from './SignUpSeq.module.css'

export default function SignUpSeq() {
  return (
    <div>
        <div className={styles.cnt_box0}>
          <ol className={styles.step_list}>
            <li className={styles.step1}>
              <span className={styles.txt0}>STEP. 1</span>
              <span className={styles.txt1}>본인인증</span>
            </li>
            <li className={styles.step2}>
              <span className={styles.txt0}>STEP. 2</span>
              <span className={styles.txt1}>약관동의</span>
            </li>
            <li className={styles.step3}>
              <span className={styles.txt0}>STEP. 3</span>
              <span className={styles.txt1}>정보입력</span>
            </li>
            <li className={styles.step4}>
              <span className={styles.txt0}>STEP. 4</span>
              <span className={styles.txt1}>가입완료</span>
            </li>
          </ol>
          <div className={styles.btn_box}>
            <Link href="/member/join/cert" className={styles.btn_primary}>회원가입</Link>
            <p className={styles.sub_txt0}>만 14세 미만 아동은 회원가입할 수 없습니다.</p>
          </div>
        </div>
    </div>
  )
}
