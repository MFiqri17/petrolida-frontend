'use client'
import React from 'react'
import Announcement from '../../components/dashboard/announcement'
import { api } from '../../utils/api'

const Test = () => {
  const [events, setEvents] = React.useState([])
  const [compId, setCompId] = React.useState('1')
  React.useEffect(() => {
    api
      .get('/announcement')
      .then((res) => {
        console.log(res.data.data)
        setEvents(res.data.data)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <>
      <Announcement compId={compId} setCompId={setCompId} events={events ?? []} />
    </>
  )
}

export default Test
