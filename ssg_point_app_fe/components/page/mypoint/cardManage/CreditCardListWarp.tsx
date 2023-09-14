import React from 'react'
import style from "./CardManage.module.css"
import { CardType } from '@/types/CardType'
import CardListWarpContent from './CardListWarpContent'

export default function CreditCardListWarp({ data }: { data: CardType[] }) {
    return (
        <div className={style.table_box0}>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>카드명</th>
                        <th scope='col'>발급처</th>
                        <th scope='col'>발급일자</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item: CardType) => (
                        <CardListWarpContent card={item} />)) :
                        <td colSpan={3}>
                            <div className={style.no_result_box}>
                                <p className={style.no_txt}>보유하신 카드가 없습니다</p>
                            </div>
                        </td>
                    }
                </tbody>
            </table>
        </div>
    )
}
