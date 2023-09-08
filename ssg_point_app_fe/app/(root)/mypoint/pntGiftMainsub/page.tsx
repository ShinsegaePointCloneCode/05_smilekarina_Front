import PntGiftContent from '@/components/page/mypoint/PntGiftMainsub/PntGiftContent'
import PntGiftForm from '@/components/page/mypoint/PntGiftMainsub/PntGiftContent'
import PntGiftsubCheckUser from '@/components/page/mypoint/PntGiftMainsub/PntGiftsubCheckUser'
import PntGiftsubHeader from '@/components/page/mypoint/PntGiftMainsub/PntGiftsubHeader'
import PntGiftsubSerchUser from '@/components/page/mypoint/PntGiftMainsub/PntGiftsubSerchUser'
import React from 'react'

export default function page() {
  return (
    <div className='box-bording px-5'>
        <PntGiftsubHeader/>
        <PntGiftContent/>
    </div>
  )
}
