import { PointType } from '@/types/PointType'
import React from 'react'
import style from './MyPoint.module.css'
import { dateFormat } from './PointHistoryDetail';


// 이름 마스킹 처리 함수
export function maskingName(name: string) {
    if (name.length <= 2) {
        return name.replace(name.substring(0, 1), "*");
    }

    return (
        name[0] +
        "*".repeat(name.substring(1, name.length - 1).length) +
        name[name.length - 1]
    );
}
// 아이디 마스킹 처리 함수 
export function maskingID(value: string) {
    if (value.length === 2) {
        return value.replace(/(?<=.{1})./gi, '*');
    } else if (value.length > 2) {
        return value.replace(/(?<=.{2})./gi, '*');
    } else {
        return value;
    }
};

export default function PntHistoryShow({data}:{data:PointType}) {

    const date = new Date(data.showDate);
    const formdate = dateFormat({formatdate: date});
  
    const maskingID = (value : string) => {
      if (value.length === 2) {
        return value.replace(/(?<=.{1})./gi, '*');
      } else if (value.length > 2) {
        return value.replace(/(?<=.{2})./gi, '*');
      } else {
        return value;
      }
    };
  
    const Name = data?.otherName
    // const maskedName = maskingName(Name)
  
    const ID = data.otherId
    // const maskedId = maskingID(ID)

  return (
    <li>
    <p className={data.used === "사용" ? style.p_use :
                   data.pointType === "선물사용취소" ? 
                   style.p_cancel :
                   style.p_accumulate
                  }>
        {data.pointType === "선물사용취소"? `-${data.point}p` : `${data.point}p`}
        <span>{data.pointType === "출석" || data.pointType === "룰렛" ? `이벤트${data.used}` 
                : data.pointType === "선물사용취소" ? data.pointType 
                : data.pointType === "스마트영수증" ? `결제${data.used}`
                : data.pointType + data.used}
        </span>
    </p>

    {data.pointType === "선물" || data.pointType === "선물사용취소" ?
      <p className={style.p_location}>          
        <span className={style.sub_txt1}>{data.giftType === "수락" && data.used === "적립" ? "받은선물" : "보낸선물"} : {data.giftType}</span>
        <span className={style.name}>{Name} {ID}</span>
      </p> 
      :
      <p className={style.p_location}>
        {data.franchiseName} <br />
        {data.addDetailDesc !== "" ? <span className={style.sub_txt0}>{data.addDetailDesc}</span> : null}
      </p>
    }
    <div className={style.view_receipt}>
      <p className={style.p_use_date}>{formdate}</p>
      {data.messageOnOff ? 
        <button className={style.view_btn}>메시지보기</button> :
         data.receiptNumber !== null ?
         <button className={style.view_btn}>영수증 보기</button> :
          null }
    </div>
</li>
  )
}
