'use client'
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import FilterMenu from './SortRadio'
import PointFilter, { dateFormat } from './PointFilter'
import PointWrap from './PointWrap'
import SortRadio from './SortRadio'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


export interface PointSortType{
  pointType: string,
  rangeStartDate : string,
  rangeEndDate: string,
  usedType: string,
  pointHistoryType: string
} 


export default function PointList() {


  const queryParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const nowdate = new Date(); // 현재 날짜 조회 
  const endDt = dateFormat({formatdate:nowdate}); // 조회 종료 날짜 (미래 데이터는 조회 불가능)
  
  const defultdate = new Date();
  defultdate.setMonth(nowdate.getMonth()-1); // 기본 설정 날짜 설정 
  const startDt = dateFormat({formatdate:defultdate}); 
  
  // query parameter 들 상태 관리 및 기본값 설정 
  const [pointquery,setPointquery] = useState<PointSortType>({
    pointType: "all",
    rangeStartDate : startDt,
    rangeEndDate:endDt,
    usedType: "all",
    pointHistoryType: "all"
  } as PointSortType);

  useEffect(()=>{
    // 이거쓰면 query 다가져 옴 
    // 해당 부분을 넣으니까 초기에 들어 갈 때 데이터를 두번 로드하는 현상이 해결 됨 
    if( queryParam.toString() === `pointType=${pointquery.pointType}&rangeStartDate=${pointquery.rangeStartDate}&rangeEndDate=${pointquery.rangeEndDate}&usedType=${pointquery.usedType}&pointHistoryType=${pointquery.pointHistoryType}`) {
      return 
    }
    console.log('open')
    router.push(
      `${pathname}?pointType=${pointquery.pointType}&rangeStartDate=${pointquery.rangeStartDate}&rangeEndDate=${pointquery.rangeEndDate}&usedType=${pointquery.usedType}&pointHistoryType=${pointquery.pointHistoryType}`
    )
  },[pointquery])

  return (
    <div className={style.point_list_box}>
      {/* 상태 관리하는 query parameter들을 하위 컴포넌트로 전달하기 */}
      <SortRadio 
        pointquery = {pointquery}
        setPointquery = {setPointquery}
      />
      <PointFilter
        pointquery = {pointquery}
        setPointquery = {setPointquery}
      />
      <PointWrap
        pointquery = {pointquery}
      />
    </div>
  )
}
