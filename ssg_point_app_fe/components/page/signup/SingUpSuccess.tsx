'use client'

import React, { useEffect, useState } from 'react'
import Step from './step/Step'
import UserInfoArea from './UserInfoArea'
import GroupJoinArea from './GroupJoinArea'

export interface SignUpResultType {
    loginId: string,
    name: string,
    phone: string,
    address: string,
    email: string,
    agreeEmail: boolean,
    Letter: boolean,
    Dm: boolean,
    Tm: boolean
}

export default function SingUpSuccess() {
    const isClient = typeof window !== 'undefined';
    const [signUpResult, setSignUpResult] = useState<SignUpResultType>({
        loginId: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        agreeEmail: false,
        Letter: false,
        Dm: false,
        Tm: false
    });

    const maskSecondCharacter = (str: string) => {
        return str[0] + '*' + str.slice(2);
    }

    useEffect(() => {
        if (isClient) {
            const tempLoginId = localStorage.getItem('tempLoginId') || '';
            const tempName = localStorage.getItem('tempName') || '';
            const tempPhone = localStorage.getItem('tempPhone') || '';
            const tempAddress = localStorage.getItem('tempAddress') || '';
            const tempEmail = localStorage.getItem('tempEmail') || '';
            const tempAgreeEmail = localStorage.getItem('tempAgreeEmail') === 'true';
            const tempLetter = localStorage.getItem('tempLetter') === 'true';
            const tempDm = localStorage.getItem('tempDm') === 'true';
            const tempTm = localStorage.getItem('tempTm') === 'true';

            setSignUpResult({
                loginId: tempLoginId,
                name: tempName,
                phone: tempPhone,
                address: tempAddress,
                email: tempEmail,
                agreeEmail: tempAgreeEmail,
                Letter: tempLetter,
                Dm: tempDm,
                Tm: tempTm
            });
        }
    }, []);

    return (
        <div>
            
            <Step step={4} title='가입완료' loginId={signUpResult.loginId} name={signUpResult.name} />
            <UserInfoArea 
                phone={signUpResult.phone} 
                address={signUpResult.address} 
                email={signUpResult.email}
                agreeEmail={signUpResult.agreeEmail}
                Letter={signUpResult.Letter}
                Dm={signUpResult.Dm}
                Tm={signUpResult.Tm}
            />
            <GroupJoinArea />
        </div>
    )
}
