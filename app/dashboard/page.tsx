import Events from '../../components/dashboard/events'
import api from '../../utils/api'
import { serverApiInterceptors } from '../../utils/api-interceptor'
import Announcement from '../../components/dashboard/announcement'
import Toast from '../../components/utils/toast'
import EventsWrapper from '../../components/dashboard/events-wrapper'

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

async function getStatusAnnouncement() {
  serverApiInterceptors()
  try {
    const res = await api.get('/events/registration')
    return res.data.data
  } catch (error) {
    return
  }
}

async function getSubmission() {
  serverApiInterceptors()
  try {
    const res = await api.get('/submission')
    return res.data.data
  } catch (error) {
    return
  }
}

export default async function Page() {
  const events = await getEventsAnnoucement()
  const registeredEvents = await getRegisteredEvents()
  const status = await getStatusAnnouncement()
  const submission = await getSubmission()

  if (!registeredEvents) {
    return (
      <EventsWrapper
        events={events || []}
        submission={submission || []}
        status={status || []}
        registeredEvents={[]}
      />
    )
  }

  return (
    <EventsWrapper
      events={events || []}
      submission={submission || []}
      status={status || []}
      registeredEvents={registeredEvents.data || []}
    />
  )
}
