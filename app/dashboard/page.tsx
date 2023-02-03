import React from 'react'
import Events from '../../components/dashboard/events'
import api from '../../utils/api'
import { serverApiInterceptors } from '../../utils/api-interceptor'

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
    </>
  )
}
