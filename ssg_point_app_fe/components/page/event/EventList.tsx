"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { EventType } from '@/types/eventype';
import SelectSortType from './SelectSortType';
import EventListWarp from './EventListWarp';

export default function EventList() {

    const [orderType, setorderType] = useState<Number>(30);
    const path = usePathname();
    const query = useSearchParams();
    const [eventData, setEventData] = useState<EventType[]>([] as EventType[]);

    useEffect(() => {
        const getData = (() => {

            if (path === "/event/ingevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/ingevent/${orderType}?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }else if ( path === "/event/endevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/endevent?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }else if (path === "/event/winevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/winevents?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }

        })
        getData();
    }, []);

    useEffect(() => {
        const getData = (() => {

            if (path === "/event/ingevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/ingevent/${orderType}?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }else if ( path === "/event/endevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/endevent?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }else if (path === "/event/winevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/winevents?page=0&size=10`) 
                .then(res => res.json())
                .then(data =>{data.success ? setEventData(data.result.content) : console.log("error") 
                })

            }

        })
        getData();
    }, [orderType,path, query]);


  return (
    <>
        {path === "/event/ingevent"?<SelectSortType orderType= {orderType} setorderType={setorderType} /> :null}
        
        <EventListWarp orderType={orderType} eventData={eventData}/>
    </>
  )
}
