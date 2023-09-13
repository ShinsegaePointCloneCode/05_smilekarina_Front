'use client'
import React, { useEffect, useState } from 'react'
import style from "../MyPoint.module.css"

interface pointinfo{
  totalPoint : number,
  addPoint : number,
  extPoint : number,
  extNextPoint : number
}

// 날짜 형식 바꾸기 
export function dateFormat({formatdate}:{formatdate : Date}){
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() <9 ? "0"+(formatdate.getMonth()+1) : (formatdate.getMonth()+1)}-01`
  return result
}



export default async function PointHistoryCard({token}:{token:string}) {
  const [pointInfo,setPointinfo] = useState<pointinfo>({
    totalPoint : -1,
    addPoint : -1,
    extPoint : -1,
    extNextPoint : -1
  });
  const nowdate = new Date();
  const extdate = new Date(nowdate);
  extdate.setMonth(nowdate.getMonth()+1);
  const formextdate = dateFormat({formatdate : extdate});
  const extNextdate = new Date();
  extNextdate.setMonth(nowdate.getMonth()+2);
  const formnextextdate = dateFormat({formatdate : extNextdate});

  useEffect(()=>{
    if(!token) return 
    const getData = async () => {
      await fetch("https://smilekarina.duckdns.org/api/v1/point/pointinfo",
      {
        method: "GET",
        headers:{
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        } 
      }) 
      .then(res => res.json())
      .then(data =>{
          setPointinfo({totalPoint : data.result.totalPoint,
            addPoint : data.result.addPoint,
            extPoint : data.result.extPoint,
            extNextPoint : data.result.extNextPoint})
          console.log(data)
        }).catch(error=> console.log(error))
  }
  getData();
  },[token])
  console.log(pointInfo)

  return (
    <div className={style.item_cnt}>
        <dl className={style.total_point}>
            <dt>사용가능</dt>
            <dd>{pointInfo ? pointInfo.totalPoint :"error"}</dd>
        </dl>
        <dl>
            <dt>적립예정</dt>
            <dd>{pointInfo ? pointInfo.addPoint :"error"}p</dd>
        </dl>
        <dl>
            <dt>소멸예정</dt>
            <dd>
              <span>
                <em className={style.date}>{`${formextdate}`}</em>
                <em>{pointInfo ? pointInfo.extPoint :"error"}p</em>
              </span>
              <span>
                <em className={style.date}>{`${formnextextdate}`}</em>
                <em>{pointInfo ? pointInfo.extNextPoint :"error"}p</em>
              </span>
            </dd>
        
        </dl>
    </div>
  )
}
