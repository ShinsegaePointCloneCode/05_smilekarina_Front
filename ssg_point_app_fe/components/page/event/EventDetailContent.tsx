import React from 'react'
import style from "./Event.module.css"

export default function EventDetailContent() {
  return (
    <div className={style.editor_box}>
        <p>
            <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/editor/images/20230829/ecbaad67-2a5e-4716-bec5-3644845eb54b.png" alt="이벤트 이미지" />
        </p>
        <p>
            <img src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/svcm-fo/editor/images/20230822/bc408e09-bc2c-4a6f-89a4-f1787783ca81.png" alt="유의사항" />
        </p>
    </div>
  )
}
