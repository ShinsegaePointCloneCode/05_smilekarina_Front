"use client"
import React, { Dispatch, useEffect, useState } from 'react'
import style from './PntGiftMainsub.module.css'
import { useSession } from 'next-auth/react';
import { OtherUserInfo } from './PntGiftContent';
import { useRouter } from 'next/navigation';

export interface giftType {
  point : number,
  pointPw : string,
  cardContents : Text
}

export default function PntGiftGetData({token, otherUserInfo}:{token:string, otherUserInfo:OtherUserInfo,
  setOtherUserInfo : Dispatch<React.SetStateAction<OtherUserInfo>> }) {

  // 사용가능한 포인트 불러오기 
  const [point, setPoint] = useState();
  useEffect(()=>{
    const Point = (()=>{
      fetch("https://smilekarina.duckdns.org/api/v1/point/usablepoint",{
        method : "GET",
        headers : {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => data.success ? setPoint(data.result.totalPoint): console.log("error"))
    })
    Point();
  },[])

  // 포인트 선물 메시지 사용유무
  const [isUsed,setIsUsed] = useState<string>();
  const handelMessageUse = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setIsUsed(e.target.value)

  }

  // 포인트 선물하기 
  const router = useRouter();
  const [pointPW,setpointPW] = useState<boolean>(false);
  const [giftData,setGiftData] = useState<giftType>({} as giftType);
  const handelgiftPoint = (e: React.ChangeEvent<HTMLInputElement>) => {

      const {name,value} = e.target
      // console.log(name,value)
      setGiftData({
        ...giftData, [name]:value 
      })
  }

  const giftPointHandler = () => {
    // console.log(giftData.pointPw)
    fetch("https://smilekarina.duckdns.org/api/v1/check/pointPassword",{
      method : "POST",
      headers:{
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}` 
      },
      body : JSON.stringify({password:giftData.pointPw})
    }).then(res => res.json())
    .then(data => {setpointPW(data.success)}).catch(error => console.log(error))
    
    if(pointPW){
      fetch("https://smilekarina.duckdns.org/api/v1/point/gift",{
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}` 
        },
        body : JSON.stringify({point : giftData.point, giftImage :null, giftMessage : giftData.cardContents ,
           pointPassword : giftData.pointPw , recipientLoginId : otherUserInfo.otherUserId })
      }).then(res => res.json())
      .then(data => router.push("/mypoint/pntGiftMain")).catch(error => console.log(error))
    }
  }


  return (
    <>
      <div className={style.checkpoint}>
        <p className={style.p_txt2}>선물가능 포인트</p>
        <p className={style.point}>{point}</p>
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}>선물할 포인트</p>
        <input type="number" name="point" className={style.input_box1} placeholder="포인트 액수를 입력하세요" max={point} onChange={handelgiftPoint}/>
      </div>
      <div className={style.margin_box}>
        <p className={style.p_txt3}> 포인트 비밀번호</p>
        <input
          className={style.input_box1}
          type="password"
          name='pointPw'
          maxLength={4}
          datatype='number'
          onChange={handelgiftPoint}
        />
        <a href="/mypoint/chgPntPwdCert" className={style.p_txt1}>포인트 비밀번호가 기억나지 않으세요? </a>
      </div>

      {/* 포인트 선물 메시지 */}
      <div className={style.margin_box}>
        <p className={style.p_txt2}>포인트 선물 메시지</p>
        <div className={`${style.rd_group_box} ${style.col2}`}>
          <div className={style.rd_box}>
            <input id="isUsed"
              value="isUsed"
              type="radio"
              name='isUsed' 
              onChange={handelMessageUse}/>
            <label htmlFor="isUsed">사용</label>
          </div>
          <div className={style.rd_box}>
            <input id="isnoUsed"
              value="isnoUsed"
              type="radio"
              name='isUsed' 
              onChange={handelMessageUse}/>
            <label htmlFor="isnoUsed">사용 안함</label>
          </div>
        </div>
      </div>

      {isUsed === "isUsed" ? 
              <>
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
              </> : null}


      <div className={style.btn_box}>
        <p className={style.btn1}>미리보기</p>
        <p  className={style.btn_primary} onClick={giftPointHandler}>
          선물하기
        </p>
      </div>
      </>
  )
}
