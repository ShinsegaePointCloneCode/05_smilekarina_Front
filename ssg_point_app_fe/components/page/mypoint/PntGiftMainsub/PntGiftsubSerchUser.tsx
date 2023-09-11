import React, { Dispatch, useState } from 'react'
import style from './PntGiftMainsub.module.css'
import { handleOnChange } from '@/handler/CertHandle';
import { useSession } from 'next-auth/react';
import { OtherUserInfo } from './PntGiftContent';


export default function PntGiftsubSerchUser({otherUserInfo, setOtherUserInfo} : 
  {otherUserInfo: OtherUserInfo, setOtherUserInfo : Dispatch<React.SetStateAction<OtherUserInfo>>}) {

  const [phonNumber,setPhoneNumber] = useState<string>();
  const [otherName, setOtherName] = useState<string>();

  const handlePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const handleOtherName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOtherName(e.target.value)
  }

  // const session = useSession();
  // const SerchUserhandler = (e:any) => {
  //   e.preventDefault();
  //   const token = session.data?.user.token
  //   const res = fetch("https://smilekarina.duckdns.org/api/v1/user/pointpwdChg",
  //           {
  //               method: "POST",
  //               headers: {
  //                   "Content-Type": "application/json",
  //                   "Authorization": `Bearer ${token}`
  //               },
  //               body: JSON.stringify({ userName: otherName, phone: phonNumber})
  //           })
  //           .then(res => res.json())
  //           .then(data => data.success ? console.log('good') : console.log("error"))
  //       console.log(res)
  // }


  return (
    <form >
      <input 
        type="text" 
        id="otherphoneNumber" 
        className={style.input_box1} 
        placeholder="-없이 휴대폰 번호를 입력해 주세요." 
        onChange={handlePhoneNumber}/>
      <input 
        type="text" 
        id="otherName" 
        className={style.input_box1} 
        placeholder="실명을 정확하게 입력해주세요."
        onChange={handleOtherName}/>

      <button type="submit" className={style.serchUser}>조회하기</button>
    </form>
  )
}
