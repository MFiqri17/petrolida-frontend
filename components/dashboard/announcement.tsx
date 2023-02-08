'use client'
import React from 'react'
import { competitionType } from '../../app/event-register/page'
const Announcement = ({ events }: { events: any[] }) => {
  const [compId, setCompId] = React.useState('1')
  let [event_filtered] = React.useState(
    events.filter((item: any) => compId == item.id),
  )
  return (
    <div>
      <h1>Announcement</h1>
      <select
        onChange={(e: any) => {
          setCompId(e.target.value)
          console.log(event_filtered)
        }}
      >
        {competitionType.map((comp) => (
          <option key={comp.id} value={comp.id}>
            {comp.name}
          </option>
        ))}
      </select>
      {event_filtered.map((event: any) => (
        <p>{event.title}</p>
      ))}
    </div>
  )
}
export default Announcement
