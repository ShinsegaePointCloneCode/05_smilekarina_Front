import React from 'react'
import style from './CardManage.module.css'
import { CardType } from '@/types/CardType'
import { dateFormat } from '../PointHistoryDetail'

export default function CardListWarpContent({card}:{card:CardType}) {

    const createDt = new Date(card.createdDate)
    console.log(card.cardName)

  
    return (
    <tr>
        <td className={style.td_ff}> 
        {card.cardName !== undefined ? `${card.cardName}(${card.cardNumber.substring(12,16)})`: 
            `${card.cardNumber.substring(0,4)}-****-****-${card.cardNumber.substring(12,16)}`
        } 
        </td>
        <td> {card.issuePlace}</td>
        <td className={style.td_ff}> {dateFormat({formatdate : createDt})} </td>
    </tr>
  )
}
