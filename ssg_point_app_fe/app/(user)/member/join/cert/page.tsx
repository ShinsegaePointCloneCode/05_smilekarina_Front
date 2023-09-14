import React from 'react'

import Step from '@/components/page/signup/step/Step';
import CertPage from '@/components/page/cert/CertPage';

export default function Cert() {
    return (
        <div>
            <Step 
                step={1} 
                title={'본인인증'}
                description={'본인인증 수단을 선택해주세요.'}
            />
            <CertPage />
        </div>
    )
}
