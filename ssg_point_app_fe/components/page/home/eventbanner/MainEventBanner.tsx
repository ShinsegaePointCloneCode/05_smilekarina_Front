'use client'


import React, { useEffect, useState } from 'react'
import { EventBannerType } from '@/types/eventBannerDataType'
import SwiperComponent from './Swiper';
import { EventBannerData } from '@/datas/EventBannerData';


export default function EventBanner() {

  const [eventList, setEventList] = useState<EventBannerType[]>([])

  useEffect(() => {
    setEventList(EventBannerData)
  }, [])

  return (
    <div className='mb-4'>
      
      <SwiperComponent height={680} start={0} end={6} eventList={eventList} />
    
    </div>
  )
}
