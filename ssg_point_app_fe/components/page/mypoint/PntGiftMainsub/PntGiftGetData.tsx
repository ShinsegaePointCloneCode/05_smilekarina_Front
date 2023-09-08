import React from 'react'
import style from './PntGiftMainsub.module.css'

export default function PntGiftGetData() {
  return (
    <form>
      <div className={style.checkpoint}>
        <p className={style.p_txt2}>선물가능 포인트</p>
        <p className={style.point}>6 </p>
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}>선물할 포인트</p>
        <input type="text" id="point" className={style.input_box1} placeholder="포인트 액수를 입력하세요" />
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}> 포인트 비밀번호</p>
        <input
          className={style.input_box1}
          type="password"
          id='pointPw'
          maxLength={4}
          datatype='number'
        />
        <a href="/mypoint/chgPntPwdCert" className={style.p_txt1}>포인트 비밀번호가 기억나지 않으세요? </a>
      </div>

      {/* 포인트 선물 메시지 */}
      <div className={style.margin_box}>
        <p className={style.p_txt2}>포인트 선물 메시지</p>
        <div className={`${style.rd_group_box} ${style.col2}`}>
          <div className={style.rd_box}>
            <input id="isUsed"
              type="radio"
              name='isUsed' />
            <label htmlFor="isUsed">사용</label>
          </div>
          <div className={style.rd_box}>
            <input id="isnoUsed"
              type="radio"
              name='isUsed' />
            <label htmlFor="isnoUsed">사용 안함</label>
          </div>
        </div>
      </div>


      <div className={style.cardChoose}>
        <p className={style.nochosse}>축하해요</p>
        <p className={style.nochosse}>감사해요</p>
        <p className={style.nochosse}>미안해요</p>
        <p className={style.nochosse}>사랑해요</p>
      </div>

      <div className='box-border my-[20px] flex justify-center'>
        <div className={style.gift_card_paper}>
          <div className='w-[315px] mx-auto'>
            <div className={style.card_cotents}>
              <textarea name="cardContents" id="메세지카드내용" maxLength={50} rows={3}
                className={style.card_cotents_textarea} />
            </div>
          </div>
        </div>
      </div>

      <div className={style.btn_box}>
        <p className={style.btn1}>미리보기</p>
        <button type='submit' className={style.btn_primary}>
          선물하기
        </button>
      </div>
    </form >
  )
}
