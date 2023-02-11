'use client'
import React from 'react'
import Announcement from '../../components/dashboard/announcement'
import {api} from '../../utils/api'
import { serverApiInterceptors } from '../../utils/api-interceptor'



const Test = () => {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    api.get('/announcement').then((res) => {
      console.log(res.data.data)
      setEvents(res.data.data)
    }).catch((e) => {
      console.log(e.message)
    })
  }, [])
  return <><Announcement events={events ?? []} /></>
}

export default Test
