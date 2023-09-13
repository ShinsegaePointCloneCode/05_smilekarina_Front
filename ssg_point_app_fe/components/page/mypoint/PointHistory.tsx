"use client"
import { PointType } from '@/types/PointType';
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import PointHistoryDetail from './PointHistoryDetail';
import { usePathname } from 'next/navigation';
import PointHistoryTotal from './PointHistoryTotal';
import { PointSortType } from './PointList';


export default function PointHistory({token,pointquery}:{token:string, pointquery:PointSortType}) {

    const pathname = usePathname();

    const [pointListData,setPointListData] = useState<PointType[]>();
    const [aTotalPoint, setATotalPoint] = useState<number>(-1);
    const [uTotalPoint,setUTotalPoint] = useState<number>(-1);
 

    useEffect(()=>{
        if(pathname === "/mypoint/pntHistory"){
            const getPointList = (()=>{
            fetch(`https://smilekarina.duckdns.org/api/v1/point/pointList?`+
                `pointType=${pointquery.pointType}`+
                `&rangeStartDate=${pointquery.rangeStartDate}`+
                `&rangeEndDate=${pointquery.rangeEndDate}`+
                `&usedType=${pointquery.usedType}`+
                `&pointHistoryType=${pointquery.pointHistoryType}`+
                `&page=0&size=10`,{
                    method : "GET",
                    headers:{
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                }).then(res=> res.json())
                .then(data => {
                    setPointListData(data.result.pointDetailOutList)
                    setATotalPoint(data.result.atotalPoint)
                    setUTotalPoint(data.result.utotalPoint)
                }).catch(error=> console.log(error))
            })
            getPointList()

        }

    },[pointquery])
    

    // // 더미 데이터 테스트 
    // const [pointData, setPointData] = useState<PointType[]>();


    // useEffect(()=>{
    //     const getData = async() => {
    //         await fetch('http://localhost:9999/pointlist')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setPointData(data.result.pntList)
    //             setATotalPoint(data.result.aTotalPoint)
    //             setUTotalPoint(data.result.uTotalPoint)
    //             console.log(data)
    //             console.log(session.data? session.data.user.token: null)
    //         })
    //     }
    //     getData();
    // },[])

  return (
    <div className={style.point_wrap}>
        <PointHistoryTotal aTotalPoint={aTotalPoint} uTotalPoint={uTotalPoint} />
        <ul className={style.point_history}>
            {pointListData ? pointListData.map((item: PointType) => 
                (<PointHistoryDetail data = {item} token={token}/>
            )) : null
            
            }
        </ul>
    </div>
  )
}
