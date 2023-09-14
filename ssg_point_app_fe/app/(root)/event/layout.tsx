'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import './style.css'
import PageHeader from '@/components/layout/SubMenu'


export default function EventLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    return (
      <>
      
        <section className="content">
          <PageHeader/>
          {children}
        </section>
      </>
    )
  }
