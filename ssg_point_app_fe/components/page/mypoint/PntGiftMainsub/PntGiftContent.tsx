"use client"
import React, { useState } from 'react'
import PntGiftsubCheckUser from './PntGiftsubCheckUser'
import PntGiftGetData from './PntGiftGetData'
import PntGiftsubSerchUser from './PntGiftsubSerchUser'

export interface OtherUserInfo {
  otherUserName : string
  otherUserId : string
  result : boolean
}

export default function PntGiftContent() {
  
  const [otherUserInfo, setOtherUserInfo] = useState<OtherUserInfo>({  
    otherUserName: '',
    otherUserId: '',
  result: false});


  return (
    <div className='box-border'>
        <PntGiftsubSerchUser otherUserInfo={otherUserInfo} setOtherUserInfo={setOtherUserInfo}/>
        <PntGiftsubCheckUser/>
        <PntGiftGetData/>
    </div>
  )
}
