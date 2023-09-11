"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { EventType } from '@/types/eventype';
import SelectSortType from './SelectSortType';
import EventListWarp from './EventListWarp';
import { useSession } from 'next-auth/react';

export default function EventList() {

    const [orderType, setorderType] = useState<Number>(30);
    const path = usePathname();
    const query = useSearchParams();
    const [eventData, setEventData] = useState<EventType[]>([] as EventType[]);
    const session = useSession();
    const token = session.data?.user.token

    useEffect(() => {
        const getData = (() => {

            if (path === "/event/ingevent"){
                fetch(`https://smilekarina.duckdns.org/api/v1/event/ingevent/${orderType}?page=0&size=10`,{
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }) 
                .then(res => res.json())
                .then(data =>{data.success ? console.log("data") : console.log("error") 
                })

            }else if ( path === "/event/endevent"){

            }else if (path === "/event/winevent"){

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

            }else if (path === "/event/winevent"){

            }

        })
        getData();
    }, [path, query]);


  return (
    <>
        <SelectSortType orderType= {orderType} setorderType={setorderType} /> 
        <EventListWarp orderType={orderType} eventData={eventData}/>
    </>
  )
}
