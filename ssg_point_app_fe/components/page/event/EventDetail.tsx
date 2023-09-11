import React from 'react'
import style from './Event.module.css'
import EventDetailHeader from './EventDetailHeader'
import EventDetailContent from './EventDetailContent'
import EventDetailButton from './EventDetailButton'

export default function EventDetail() {
  return (
    <div>
        <EventDetailHeader/>
        <EventDetailContent/>
        <EventDetailButton/>
    </div>
  )
}
