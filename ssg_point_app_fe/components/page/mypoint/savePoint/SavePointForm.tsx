import React from 'react'
import style from './SavePoint.module.css'

export default function SavePointForm() {
  return (
    <div className={style.form_box}> 
        <p className={style.tit}>제휴사</p>
        <div className={style.select_box}>
            <select title='제휴사 선택'></select>
        </div>
    </div>
  )
}
