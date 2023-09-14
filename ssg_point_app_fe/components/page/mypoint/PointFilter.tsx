"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import style from './MyPoint.module.css'
import FilterButton from './FilterButton';
import { PointSortType } from './PointList';

// 날짜 형식 바꾸기 
export function dateFormat({formatdate}:{formatdate : Date}){
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() <9 ? "0"+(formatdate.getMonth()+1) : (formatdate.getMonth()+1)}-${formatdate.getDate() <9 ? "0"+(formatdate.getDate()) : (formatdate.getDate())}`
  return result
}

export default function PointFilter(
  {pointquery, setPointquery}
  :
  {pointquery: PointSortType, setPointquery: Dispatch<SetStateAction<PointSortType>>}
) {

  const nowdate = new Date(); // 현재 날짜 조회 
  const endDt = dateFormat({formatdate:nowdate}); // 조회 종료 날짜 (미래 데이터는 조회 불가능)
  
  const defultdate = new Date();
  defultdate.setMonth(nowdate.getMonth()-1); // 기본 설정 날짜 설정 

  const handleSortType = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const startDate = new Date(); // 조회 시작날짜 설정
    // 일주일인 경우 : 현재 날짜의 date에서 -7일
    // 그외의 경우 : 개월 계산 
    {e.target.value === "7" ? 
      startDate.setDate(nowdate.getDate() - Number(e.target.value)) :
      startDate.setMonth(nowdate.getMonth() - Number(e.target.value))
    }
    setPointquery({
      ...pointquery,
      rangeStartDate: dateFormat({formatdate : startDate}),
      rangeEndDate: dateFormat({ formatdate: nowdate})
    })
  }

  return (
    <div className={style.class_sch}>
      <div className={style.sort_select}>
        <select id="" onChange={handleSortType}>
          <option defaultValue="1" selected disabled hidden>선택하세요</option>
          <option value="7">1주일</option>
          <option value="1">1개월</option>
          <option value="3">3개월</option>
          <option value="6">6개월</option>
          <option disabled value="0">직접입력</option>
        </select>
      </div>
      <div className={style.term}>
        <p className={style.ff_lato}>{`${pointquery.rangeStartDate} ~ ${pointquery.rangeEndDate}`}</p>
      </div>
      <FilterButton/>
    </div>
  )
}
