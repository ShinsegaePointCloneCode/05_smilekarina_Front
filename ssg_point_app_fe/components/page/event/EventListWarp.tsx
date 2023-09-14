'use client'
import React, { useEffect, useMemo, useState } from 'react'
import EventListCard from './EventListCard';
import { EventType } from '@/types/eventype';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import modulestyle from './Event.module.css'


// export default async function EventList(events : any) {
export default function EventListWarp({orderType,eventData} : {orderType : Number , eventData : EventType[]}) {


  return (
    <>
    <div className={modulestyle.event_list}>
    <ul>
        {
            eventData ? eventData.map((item: EventType) => 
                (<EventListCard data = {item}/>
            )) : null
        }
    </ul>
  </div>
  </>
  )
}


