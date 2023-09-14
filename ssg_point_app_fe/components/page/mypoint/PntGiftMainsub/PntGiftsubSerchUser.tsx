import React, { Dispatch, useEffect, useState } from 'react'
import style from './PntGiftMainsub.module.css'
import { handleOnChange } from '@/handler/CertHandle';
import { useSession } from 'next-auth/react';
import { OtherUserInfo } from './PntGiftContent';


export default function PntGiftsubSerchUser({token, otherUserInfo, setOtherUserInfo} : 
  {token:string, otherUserInfo: OtherUserInfo, setOtherUserInfo : Dispatch<React.SetStateAction<OtherUserInfo>>}) {

  const [phonNumber,setPhoneNumber] = useState<string>();
  const [otherName, setOtherName] = useState<string>();
  const [checkUser,setCheckUser] = useState<boolean>(false);

  const handlePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const handleOtherName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOtherName(e.target.value)
  }

  // console.log(token)
  const SerchUserhandler = (e:any) => {
    e.preventDefault();
    setCheckUser(true)
  }

  useEffect(()=>{
    if(token){
      // console.log(token,otherName,phonNumber)
      const getUser = (()=>{
        fetch("https://smilekarina.duckdns.org/api/v1/user/checkuser",{
          method :"POST",
          headers :{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body : JSON.stringify({userName:otherName, phone:phonNumber})
        }).then(res=>res.json())
        .then(data => data.success? setOtherUserInfo({otherUserName : data.result.userName,
          otherUserId : data.result.userLoginId,
          result : true}) :console.log("error"))
      })
      getUser();
      setCheckUser(false)
    }
  },[checkUser])
    


  return (
    <form onSubmit={SerchUserhandler}>
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
