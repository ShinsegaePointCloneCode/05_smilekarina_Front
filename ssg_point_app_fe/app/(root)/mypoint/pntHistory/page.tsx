
"use client"
import CardBox from '@/components/page/mypoint/CardBox'
import PointList from '@/components/page/mypoint/PointList'
import { useSession } from 'next-auth/react'
import React from 'react'


export default async function page() {

  return (
    <div className='p-24'>
      <CardBox/>
      <PointList/>
    </div>
  )
}
