"use client"
import React, { use } from 'react'
import style from "./MyPoint.module.css"
import PointHistory from './PointHistory'
import { useSession } from 'next-auth/react'
import { PointSortType } from './PointList'
import { usePathname } from 'next/navigation'
// 내역 리스트 
export default function PointWrap({pointquery}:{pointquery:PointSortType}) {

  const session = useSession();
  const token = session.data?.user.token

  const pathname = usePathname();

  return (
    <div className={style.point_wrap}>
      {pathname === "/mypoint/pntHistory" ? 
        <PointHistory token={token} pointquery ={pointquery}/> :
        <PointHistory token={token} pointquery ={pointquery}/>
      }
      
    </div>
  )
}
