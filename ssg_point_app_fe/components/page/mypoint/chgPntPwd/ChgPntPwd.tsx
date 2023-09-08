'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import style from './ChgPntPwd.module.css'

export default function ChgPntPwd() {
    const [PointPw1, setPointPw1] = useState<string>("")
    const [PointPw2, setPointPw2] = useState<string>("")
    const [PointlastPw, setPointlastPw] = useState<string>()

    const PointPw1handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPointPw1(e.target.value)
    }
    const PointPw2handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPointPw2(e.target.value)
    }

    const router = useRouter();
    const session = useSession();
    const token = session.data?.user.token
    const PointPwChHandler = (e: any) => {
        e.preventDefault();
        console.log(PointPw1, PointPw2)
        if (PointPw1 === PointPw2) {
            setPointlastPw(PointPw1)
        } else {
            console.log("error")
            // 알림 주기 입력 값이 다르다 
        }
    }

    useEffect(()=>{
        const getdata = (async() => {
            await fetch("https://smilekarina.duckdns.org/api/v1/user/pointpwdChg",
                    {
                        method : "PUT",
                        headers : {
                            "Content-Type" : "application/json",
                            "Authorization" : `Bearer ${token}` 
                        },
                        body : JSON.stringify({pointPassword: PointlastPw})
                    })
                    .then(res=> res.json())
                    .then(data => data.success ? router.push('/mypoint/cardManage') : console.log("error"))
       })
       getdata();
    },[PointlastPw])
    
    return (
        <>
            <div className='top_cnt1'>
                <p className='sp_tit2'>포인트 비밀번호 변경</p>
            </div>
            <div className={style.cnt_box0}>
                <form className={style.form_container} onSubmit={PointPwChHandler}>
                    <div className={style.form_box_required}>
                        <p className={style.tit}> 포인트 비밀번호 입력</p>
                        <div className={style.input_box}>
                            <input
                                type="password"
                                id='pointPw1'
                                maxLength={4}
                                datatype='number'
                                onChange={PointPw1handler}
                                placeholder='숫자 4자리를 입력하세요'
                            />
                        </div>
                    </div>
                    <div className={style.form_box_required}>
                        <p className={style.tit}> 포인트 비밀번호 확인</p>
                        <div className={style.input_box}>
                            <input
                                type="password"
                                id='pointPw2'
                                maxLength={4}
                                datatype='number'
                                onChange={PointPw2handler}
                                placeholder='숫자 4자리를 입력하세요'
                            />
                        </div>
                    </div>
                    <div className={style.btn_box}>
                        <button type='submit' className={style.btn_primary}>변경하기</button>
                        {/* 포인트 카드관리로 리다이렉트 */}
                    </div>
                </form>
            </div>
        </>
    )
}
