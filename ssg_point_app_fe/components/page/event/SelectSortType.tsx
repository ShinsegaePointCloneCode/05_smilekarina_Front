"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

export default function SelectSortType ({orderType,setorderType} :
  {orderType : Number, setorderType :  React.Dispatch<React.SetStateAction<Number>>}) {

  const router = useRouter();
  const pathname = usePathname();


  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if(pathname === "/event/ingevent"){
      // router.push(`/event/ingevent?_sort=${e.target.value}&_order=${e.target.value === "reg_date" ? "desc" : "asc"}`);
      // router.push(`/event/ingevent/${e.target.value}`);
      setorderType(Number(e.target.value))
      
    }else if(pathname === "/couponPage"){
      setorderType(Number(e.target.value));
    }
    
  }

  return (
    <>
    <div className='event_sort_box'>
        <form>
        <select className='select_box' onChange={handleSort}>
            <option value={30}>최신순</option>
            <option value={40}>마감임박순</option>
        </select>
        </form>
    </div> 
    </>
  )
}