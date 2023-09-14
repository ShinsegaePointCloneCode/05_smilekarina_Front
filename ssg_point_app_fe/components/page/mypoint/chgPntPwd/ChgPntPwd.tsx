'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import style from './ChgPntPwd.module.css'
import { handleOnChange } from '@/handler/CertHandle'
import { error } from 'console'

export interface passType {
    pointPw1: string,
    pointPw2: string
}
export default function ChgPntPwd() {

    const session = useSession();
    const token = session.data?.user.token
    const router = useRouter();

    const [passwordInput, setPasswordInput] = useState<passType>({
        pointPw1: '',
        pointPw2: ''
    } as passType);
    // const [PointPw1, setPointPw1] = useState<string>("")
    // const [PointPw2, setPointPw2] = useState<string>("")

    // const PointPw1handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPointPw1(e.target.value)
    // }
    // const PointPw2handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPointPw2(e.target.value)
    // }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        // console.log(name, value)
        setPasswordInput({
                ...passwordInput, [name]:value
            })
    }

  
    const PointPwChHandler = () => {
        if (passwordInput.pointPw1 !== passwordInput.pointPw2 || (passwordInput.pointPw1 === '' && passwordInput.pointPw2 === '')) {   
            console.log('error')
            return
        } 

        fetch("https://smilekarina.duckdns.org/api/v1/user/pointpwdChg",
            {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}` 
                },
                body : JSON.stringify({pointPassword: passwordInput.pointPw1})
            })
            .then(res=> res.json())
            .then(data => {
                router.push("/mypoint/cardManage")
            }).catch(error => console.log(error))
    }

    return (
        <>
            <div className='top_cnt1'>
                <p className='sp_tit2'>포인트 비밀번호 변경</p>
            </div>
            <div className={style.cnt_box0}>
                <div className={style.form_container} >
                    <div className={style.form_box_required}>
                        <p className={style.tit}> 포인트 비밀번호 입력</p>
                        <div className={style.input_box}>
                            <input
                                type="password"
                                id='pointPw1'
                                name='pointPw1'
                                maxLength={4}
                                datatype='number'
                                onChange={handleOnChange}
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
                                name='pointPw2'
                                maxLength={4}
                                datatype='number'
                                onChange={handleOnChange}
                                placeholder='숫자 4자리를 입력하세요'
                            />
                        </div>
                    </div>
                    <div className={style.btn_box}>
                        <button onClick={PointPwChHandler} className={style.btn_primary}>변경하기</button>
                        {/* 포인트 카드관리로 리다이렉트 */}
                    </div>
                </div>
            </div>
        </>
    )
}
