"use client"
import React, { useEffect, useState } from 'react'
import style from './SavePoint.module.css'
import { handleOnChange } from '@/handler/CertHandle'
import { SelectFranchiseType } from '@/types/SelectFranchiseType';

export default function SavePoint() {

  // 대형 분류 선택 및 세부매장 데이터 받아오기 
  const [select, setSelect] = useState<string>("이마트");
  const [selectresult, setSelectresult] = useState<SelectFranchiseType[]>();

  const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
  }

  useEffect(()=>{
    const getFranchise = (()=>{
      fetch(`http://localhost:9999/${select}`)
      .then(res => res.json())
      .then(data => data? setSelectresult(data) : console.log("error"))
    })
    getFranchise();

  },[select])

  // 세부매장 선택 및 가맹점 데이터 받아오기 
  const [select2, setSelect2] = useState<string>();
  const [selectresult2,setSelectresult2] = useState<SelectFranchiseType[]>();

  const handelSelect2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect2(e.target.value)
  }



  return (
    <>
      <div className={style.org_txt_box}>
        <h3 className={style.box_tit}>
          포인트 적립을 깜빡하셨나요? <br />
          <strong className={style.fc_pk}>영수증 정보만 입력해 주세요.</strong>
        </h3>
        <p className={style.box_txt}>
          이마트, 신세계백화점, 이마트 에브리데이에서<br />
          구매하신 영수증 정보로 포인트 적립이 가능합니다.
        </p>
      </div>
      <div className={style.mypoint_cnt0}>
        <p className={style.sp_line_tit0}> 영수증 정보 등록</p>
        <div className={style.form_box}>
          <p className={style.tit}>
            제휴사
          </p>
          <div className={style.select_box}>
            <select title='제휴사 선택' onChange={handelSelect}>
              <option value="E000000000">이마트</option>
              <option value="D000000000">신세계 백화점</option>
              <option value="E000000001">이마트 애브리데이</option>
            </select>
            <select title='가맹점선택'>
              {
                selectresult ? selectresult.map((data : SelectFranchiseType)=>(
                  <option value={data.code}>{data.name}</option>
                )) :null
              }
            </select>
            <select title='가맹점선택'>
              {
                selectresult2 ? selectresult2.map((data : SelectFranchiseType)=>(
                  <option value={data.code}>{data.name}</option>
                )) :null
              }
            </select> 

          </div>
        </div>
      </div>
    </>
  )
}
