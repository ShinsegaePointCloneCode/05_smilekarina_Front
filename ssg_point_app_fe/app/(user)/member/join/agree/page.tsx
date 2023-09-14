import React from 'react'
import Step from '@/components/page/signup/step/Step';
import AgreeArea from '@/components/page/signup/AgreeArea';

export default function Agree() {
  return (
    <div>
        <Step step={2} title={'약관동의'}/>
        <AgreeArea />
    </div>
  )
}
