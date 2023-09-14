import React from 'react'
import style from "./MyPoint.module.css"

export default function FilterButton() {
  return (
    <button className={style.point_control}>
        <span>필터</span>
    </button>
  )
}
