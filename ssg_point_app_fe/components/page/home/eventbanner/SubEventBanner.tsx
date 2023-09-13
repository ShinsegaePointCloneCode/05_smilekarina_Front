'use client'

import { EventBannerType } from '@/types/eventBannerDataType'
import React, { useEffect, useState } from 'react'

import SwiperComponent from './Swiper';
import { SubEventBannerData } from '@/datas/EventBannerData';

export default function SubEventBanner() {

    const [eventList, setEventList] = useState<EventBannerType[]>([])

    useEffect(() => {
        setEventList(SubEventBannerData)
    }, [])

    return (
        <div >
            <SwiperComponent height={660} start={0} end={4} eventList={eventList} />
            <SwiperComponent height={660} start={4} end={5} eventList={eventList} />
            <SwiperComponent height={660} start={5} end={8} eventList={eventList} />
            <SwiperComponent height={660} start={8} end={9} eventList={eventList} />
        </div>
    )
}
