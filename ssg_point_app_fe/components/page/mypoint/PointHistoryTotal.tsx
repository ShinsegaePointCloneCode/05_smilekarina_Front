import { usePathname } from 'next/navigation'
import React from 'react'
import style from "./MyPoint.module.css"

export default function PointHistoryTotal({aTotalPoint,uTotalPoint}:{aTotalPoint : number ,uTotalPoint:number}) {

    // console.log(aTotalPoint,uTotalPoint)
    const pathname = usePathname();

    return (
        <div className={pathname === "/mypoint/pntHistory" ? style.point_total : style.gft_total}>
            <p className={style.p_accumulate}>
                <span>적립</span>
                    {aTotalPoint}P
            </p>
            <p className={style.p_use}>
                <span>사용</span>
                    {uTotalPoint}P
            </p>
        </div>
    )
}
