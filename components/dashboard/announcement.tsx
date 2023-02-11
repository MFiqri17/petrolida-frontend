import React from 'react'
const Announcement = ({
  events,
  compId,
  setCompId,
}: {
  events: any[]
  compId: any
  setCompId: any
}) => {
  interface competitionTypeInterface {
    id: string
    name: string
    amount: string
  }
  const competitionType: competitionTypeInterface[] = [
    { id: '1', name: 'Oil Rig Design', amount: '150.000' },
    { id: '2', name: 'Paper', amount: '100.000' },
    { id: '3', name: 'Business Case', amount: '150.000' },
    { id: '4', name: 'Fracturing Fluid Design', amount: '180.000' },
    { id: '5', name: 'Case Study', amount: '100.000' },
    { id: '6', name: 'Petrosmart', amount: '150.000' },
  ]
  return (
    <div>
      <h1>Announcement</h1>
      <select
        onChange={(e: any) => {
          setCompId(e.target.value)
          console.log(compId)
        }}
      >
        {competitionType.map((comp) => (
          <option key={comp.id} value={comp.id}>
            {comp.name}
          </option>
        ))}
      </select>
      {events
        .filter((item: any) => compId == item.id)
        .map((event: any) => (
          <p key={event.event_id}>{event.title}</p>
        ))}
    </div>
  )
}
export default Announcement
