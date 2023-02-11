import React from 'react'
import Events from '../../components/dashboard/events'
import api from '../../utils/api'
import { serverApiInterceptors } from '../../utils/api-interceptor'
import Announcement from '../../components/dashboard/announcement'

export const dynamic = 'force-dynamic'

async function getRegisteredEvents() {
  serverApiInterceptors()
  try {
    const res = await api.get('/events/registration')
    return res.data
  } catch (error) {
    return
  }
}

export default async function Page() {
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
  const registeredEvents = await getRegisteredEvents()
  if (!registeredEvents) {
    return (
      <>
        <Events registeredEvents={[]} />
      </>
    )
  }
  return (
    <>
      <Events registeredEvents={registeredEvents.data ?? []} />
      <Announcement
        compId={compId}
        setCompId={setCompId}
        events={events ?? []}
      />
    </>
  )
}
