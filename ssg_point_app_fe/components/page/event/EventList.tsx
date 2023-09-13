'use client'
import React, { useEffect, useMemo, useState } from 'react'
import EventListCard from './EventListCard';
import { EventType } from '@/types/eventype';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import modulestyle from './Event.module.css'


// export default async function EventList(events : any) {
export default function EventList() {

    const path = usePathname();
    const query = useSearchParams();

    const [eventData, setEventData] = useState<EventType[]>();
    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:9999/event?_sort=${query.get('_sort')}&_order=${query.get('_order')}` ,{next: {revalidate : 1800}} ) 
            .then(res => res.json())
            .then(data =>{
                setEventData(data)
                // console.log(data)
            })
        }
        getData();
    }, [query]);


        

  return (
    <>
    <div className={modulestyle.event_list}>
    <ul>
        {
            eventData ? eventData.map((item: EventType) => 
                (<EventListCard 
                    key = {item.id}
                    id = {item.id}
                    img = {item.event_thumbnail}
                    title = {item.eventHead}
                    startdate = {item.event_start}
                    enddate = {item.event_end}
                />
            )) : null
        }
    </ul>
  </div>
  </>
  )
}


