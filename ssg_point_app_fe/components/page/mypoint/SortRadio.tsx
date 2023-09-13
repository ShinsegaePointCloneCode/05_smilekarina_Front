"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import style from './MyPoint.module.css'
import { FilterMenuData } from '@/datas/FilterMenuData'
import { PointSortType } from './PointList'

// 포인트 내역에 Menu  
export default function SortRadio(
  {pointquery, setPointquery}
  :
  {pointquery: PointSortType, setPointquery: Dispatch<SetStateAction<PointSortType>>}) {
  
  const handlefilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPointquery({
      ...pointquery,
      pointType: e.target.value
    });// tabGb 값 변경해주기 
  }

  const data = FilterMenuData;
  return (
    <div className={style.sort_radio_box}>
        {data.map((menu, idx)=>(
            <div key={idx} className={style.sort_box}>
              <input type="radio" value={menu.value} id={`sortRadio${menu.id}`} name="filterType" onChange={handlefilter}/>
              <label htmlFor={`sortRadio${menu.id}`}>{menu.name}</label>
            </div>
        ))}
    </div>
  )
}
