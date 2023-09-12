"use client"
import React, { useState } from 'react'
import PntGiftsubCheckUser from './PntGiftsubCheckUser'
import PntGiftGetData from './PntGiftGetData'
import PntGiftsubSerchUser from './PntGiftsubSerchUser'
import { useSession } from 'next-auth/react'

export interface OtherUserInfo {
  otherUserName : string
  otherUserId : string
  result : boolean
}

export default function PntGiftContent() {

  const session = useSession();
  const token = session.data?.user.token 
  
  const [otherUserInfo, setOtherUserInfo] = useState<OtherUserInfo>({  
    otherUserName: '',
    otherUserId: '',
  result: false});

  return (
    <div className='box-border'>
        <PntGiftsubSerchUser token={token} otherUserInfo={otherUserInfo} setOtherUserInfo={setOtherUserInfo}/>
        {otherUserInfo.result ? 
        <>
          <PntGiftsubCheckUser otherUserInfo={otherUserInfo}/>
          <PntGiftGetData token={token}/>
          </> 
          : null}
        
    </div>
  )
}
