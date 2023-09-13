"use client"
import React from 'react'
import CouponHeader from '@/components/page/coupon/CouponHeader';
import CouponListWrap from '@/components/page/coupon/CouponListWrap';
import { getSession, useSession } from 'next-auth/react';


export default async function page() {
  
  const session = useSession();
  const token = session.data?.user.token

  
  return (
    <>
      <CouponHeader/>
      <CouponListWrap token = {token}/>
    </>
  )
}
