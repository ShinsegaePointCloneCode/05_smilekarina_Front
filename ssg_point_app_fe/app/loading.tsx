import Image from 'next/image'
import React from 'react'
import loadingimg from '/public/images/login-loading.gif'

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
        <Image src={loadingimg} alt="loading" width={200} height={200} />
    </div>
  )
}
