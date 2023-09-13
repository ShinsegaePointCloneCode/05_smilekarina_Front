import CardBox from '@/components/page/mypoint/CardBox'
import PointList from '@/components/page/mypoint/PointList'
import React from 'react'


export default async function page() {


  return (
    <div className='p-24'>
      <CardBox/>
      <PointList/>
    </div>
  )
}
