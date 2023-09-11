import React, { Dispatch, SetStateAction } from 'react'
import style from './Coupon.module.css'

export default function CouponRegister({visible, setVisible}:{visible: boolean, setVisible: Dispatch<SetStateAction<boolean>>}) {

    const handleCouponRegister = ()=>{
        setVisible(false)
    }

  return (
    <div className={style.register_coupon_box}>
        <p className={style.sp_txt1}>
            신세계포인트 쿠폰 등록을 위해 <br />
            <span> 쿠폰 번호를 입력</span> 해주세요
        </p>
        <form>
            <div className={style.input_box_coupon_num}>
                <input type="text" id='couponNum' placeholder='대소문자를 구분해 정확히 입력해주세요'/>
                <button className={style.del}></button>
            </div>
            <div className={style.btn_box}>
                    <p className={style.btn1_gray} onClick={handleCouponRegister}>다음에 하기</p>
                    <button className={style.btn_primary} type='submit'>등록하기</button>
            </div>
        </form>
    </div>
  )
}
