import React from 'react'
import LoginArea from '@/components/page/login/LoginArea'
import SnsLogin from '@/components/page/login/SnsLogin'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from "next/navigation";




export const metadata = {
  title: '신세계포인트 - 로그인',
  description: '로그인 페이지',
}

export default async function LoginPage() {

  const session = await getServerSession(options)

  if (session !== null) {
    redirect('/')
  }


  return (

    <div className='content'>
      <div className='login_cnt'>
        <h2 className='sp_img_tit'>
          <span className="hidden">SHINSEGAE POINT</span>
        </h2>
        <LoginArea />
      </div>
      <SnsLogin />
    </div>
  )
}
