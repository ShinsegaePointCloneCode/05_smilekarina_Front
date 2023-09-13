"use client"
import { PointType } from '@/types/PointType';
import React, { useEffect, useState } from 'react'
import style from "../MyPoint.module.css"
import PointHistoryTotal from '../PointHistoryTotal';
import PointHistoryDetail from '../PointHistoryDetail';
import { GiftSortType } from './PointGiftMainList';
import PointgiftHistoryDetail from './PointgiftHistoryDetail';



export default function PointHistory({ token, giftquery }: { token: string, giftquery: GiftSortType }) {

    const [pointListData, setPointListData] = useState<PointType[]>([] as PointType[]);
    const [aTotalPoint, setATotalPoint] = useState<number>(-1);
    const [uTotalPoint, setUTotalPoint] = useState<number>(-1);


    useEffect(() => {
        if (!token) return
        const getGiftPointList = (async() => {
           await fetch(`https://smilekarina.duckdns.org/api/v1/point/pointGiftList?giftGb=${giftquery.giftGb}&page=0&size=10`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setPointListData(data.result.giftDetailListOut)
                    setATotalPoint(data.result.atotalPoint)
                    setUTotalPoint(data.result.utotalPoint)
                }).catch(error => console.log(error))
        })
        getGiftPointList()

    }, [giftquery,token])


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
        {pointListData?.length > 0 ? (
             pointListData.map((item: PointType) =>(
             <PointgiftHistoryDetail data={item} token={token} giftquery={giftquery}/>
            )) 
            ) : (
                <p>No data available.</p>
            )}

        </ul>
    </div>
)
}
