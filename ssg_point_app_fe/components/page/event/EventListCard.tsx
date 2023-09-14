'use client'
import Link from 'next/link'
import React from 'react'
import EndDate from './EndDate'
import { usePathname } from 'next/navigation'
import EndEventImg from './EndEventImg'
import WinEventImg from './WinEventImg'
import modulestyle from './Event.module.css'
import { dateFormat } from '../mypoint/PointHistoryDetail'
import { EventType } from '@/types/eventype'


function EventListCard({data} : {data : EventType}) 
{
        const enddt = new Date(data.eventEnd)
        const startdt = new Date(data.eventStart)
        const pathname = usePathname();
        
  return (
    <li>
        <Link href={{pathname:'/event/eventDetail', query : {eventNo : data.id}}}>
          {pathname == "/event/ingevent" ? <EndDate enddate={enddt}/> : 
            pathname == "/event/endevent" ? data.eventType !== "PA" ? <EndEventImg/> : <WinEventImg/> : <WinEventImg/>}
          <img src={data.eventThumbnail} alt={data.eventHead} />

            
        </Link>
        <div className={modulestyle.event_end_date}>
              <p className={modulestyle.event_title}> {data.eventHead} </p>
              <p className={modulestyle.event_date}>{dateFormat({formatdate : startdt}) + " ~ " + dateFormat({formatdate : enddt})}</p>
        </div>
        
    </li>
    
  )
}

export default EventListCard
