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

async function getEventsAnnoucement() {
  serverApiInterceptors()
  try {
    const res = await api.get('/announcement')
    return res.data.data
  } catch (error) {
    return
  }
}

export default async function Page() {
  const events = await getEventsAnnoucement()
  const registeredEvents = await getRegisteredEvents()
  if (!registeredEvents) {
    return (
      <>
        <Announcement events={events ?? []} />
        <Events registeredEvents={[]} />
      </>
    )
  }
  return (
    <>
      <Announcement events={events ?? []} />
      <Events registeredEvents={registeredEvents.data ?? []} />
    </>
  )
}
