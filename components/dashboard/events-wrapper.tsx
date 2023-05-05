'use client'
import React from 'react'
import Toast from '../utils/toast'
import Announcement from './announcement'
import Events from './events'

export default function EventsWrapper({
  events,
  submission,
  status,
  registeredEvents,
}: {
  events: any
  submission: any
  status: any
  registeredEvents: any
}) {
  const [isNonCompetitions, setIsNonCompetitions] =
    React.useState<boolean>(false)
  return (
    <>
      <Toast />
      {!isNonCompetitions && (
        <Announcement events={events} submission={submission} status={status} />
      )}
      <Events
        registeredEvents={registeredEvents}
        setIsNonCompetitions={setIsNonCompetitions}
        isNonCompetitions={isNonCompetitions}
      />
    </>
  )
}
