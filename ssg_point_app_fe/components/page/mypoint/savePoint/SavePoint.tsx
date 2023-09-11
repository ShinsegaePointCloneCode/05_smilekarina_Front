"use client"
import React, { useEffect, useState } from 'react'
import style from './SavePoint.module.css'
import { handleOnChange } from '@/handler/CertHandle'
import { SelectFranchiseType } from '@/types/SelectFranchiseType';
import { SelectBranchType } from '@/types/SelectBranchType';
import { useSession } from 'next-auth/react';

export default function SavePoint() {

  // 대형 분류 선택 및 세부매장 데이터 받아오기 
  const [select, setSelect] = useState<string>("E000000000");
  const [selectresult, setSelectresult] = useState<SelectFranchiseType[]>([] as SelectFranchiseType[]);

  const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
  }

  useEffect(() => {
    const getFranchise = (() => {
      fetch(`http://localhost:9999/${select}`)
        .then(res => res.json())
        .then(data => data ? setSelectresult(data) : console.log("error"))
    })
    getFranchise();

  }, [select])

  // 세부매장 선택 및 가맹점 데이터 받아오기 
  const [select2, setSelect2] = useState<string>("E200006892");
  const [selectresult2, setSelectresult2] = useState<SelectBranchType[]>([] as SelectBranchType[]);

  const handelSelect2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect2(e.target.value)
  }

  useEffect(() => {
    const getFranchise = (() => {
      fetch(`http://localhost:9999/${select2}`)
        .then(res => res.json())
        .then(data => data ? setSelectresult2(data) : console.log("error"))
    })
    getFranchise();

  }, [select2])


  const [savePointBranchId, setSavePointBranchId] = useState<string>();
  const [savePointnumber, setSavePointNumber] = useState<string>();
  const [savePointname, setSavePointName] = useState<string>();

  const handelSavePointBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const branchName = selectedOption.text;
    console.log(branchName);
    setSavePointName(branchName);
    setSavePointBranchId(e.target.value)
  }

  const handelSavePoint = (e: React.ChangeEvent<HTMLInputElement>) => [
    setSavePointNumber(e.target.value)
  ]

  const session = useSession();
  const token = session.data?.user.token; 
  const handelSavePointSubmit = () => {
    const postSavePoint = (() => {
      fetch("https://smilekarina.duckdns.org/api/v1/point/receiptpoint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ 
            franchiseId: savePointBranchId,
            branchName : savePointname,
            receiptNumber: savePointnumber ,
            point: 23, 
            pointType:"SM" 
          })
        })
        .then(res => res.json())
        .then(data => data.success ? console.log("good") : console.log("error"))
    })
  }


  return (
    <div>
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
        </div>
      </div>

      <div className={style.form_box}>
        <p className={style.tit}>
          브랜드
        </p>
        <div className={style.select_box}>
          <select title='가맹점선택' onChange={handelSelect2}>
            {
              selectresult ? selectresult.map((data: SelectFranchiseType) => (
                <option value={data.code}>{data.name}</option>
              )) : null
            }
          </select>
        </div>
      </div>
      <form onSubmit={handelSavePointSubmit}>
        <div className={style.form_box}>
          <p className={style.tit}>
            매장명
          </p>
          <div className={style.select_box}>
            <select title='지점선택' name='branch' onChange={handelSavePointBranch}>
              {
                selectresult2 ? selectresult2.map((data: SelectBranchType) => (
                  <option value={data.id} >{data.name}</option>
                )) : null
              }
            </select>
          </div>
        </div>
        <div className={style.form_box}>
          <label htmlFor="receiptNumber0" className={style.tit}>영수증 일련번호</label>
          <div className={style.input_box}>
            <input type='text' id='receiptNumber0' onChange={handelSavePoint} />
          </div>
        </div>
        <div className={style.btn_box}>
          <button type='submit' className={style.btn_primary}>등록하기</button>
        </div>
      </form>
      </div>
    </div>
  )
}
