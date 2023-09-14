import EventList from '@/components/page/event/EventList'
import { usePathname } from 'next/navigation'
import React from 'react'

export default async function Endevent() {
  // const resp = await fetch("http://localhost:9999/event" ,{next: {revalidate : 0}} ); //todd : 상위 com의 url에 따라 다른 API호출  
  // const event = await resp.json();

  return (
    // <EventList events={event}/>
    <EventList/>
  )
}
