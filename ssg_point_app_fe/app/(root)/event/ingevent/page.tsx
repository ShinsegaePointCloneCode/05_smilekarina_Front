import EventList from '@/components/page/event/EventList';
import SortMenu from '@/components/page/event/SelectSortType';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useMemo, useState } from 'react'

export default async function Ingevent() {
  // const resp = await fetch("http://localhost:9999/event" ,{next: {revalidate : 0}} ); //todd : 상위 com의 url에 따라 다른 API호출  
  // const event = await resp.json();

  return (
    <>
    {/* <EventList events={event}/> */}
    {/* <SortMenu /> */}
    <EventList/>
    </>
  )
}

