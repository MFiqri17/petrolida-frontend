'use client'
import React from 'react'
const Announcement = ({ events }: { events: any[] }) => {
  interface competitionTypeInterface {
    id: string
    name: string
    amount: string
  }
  const [compId, setCompId] = React.useState('1')
  const competitionType: competitionTypeInterface[] = [
    { id: '1', name: 'Oil Rig Design', amount: '150.000' },
    { id: '2', name: 'Paper', amount: '100.000' },
    { id: '3', name: 'Business Case', amount: '150.000' },
    { id: '4', name: 'Fracturing Fluid Design', amount: '180.000' },
    { id: '5', name: 'Case Study', amount: '100.000' },
    { id: '6', name: 'Petrosmart', amount: '150.000' },
  ]
  return (
    <div className="mb-20">
      <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
        Announcement
      </h1>
      <select
        className="!focus:border-0 mb-[18px] !border-0 !bg-transparent text-lg font-bold leading-[21.76px] text-[#131736] focus:outline-none "
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
        .filter((item: any) => compId === item.event_id)
        .map((event: any) => (
          <div key={event.id} className="flex justify-between space-x-6">
            <section className="flex w-full flex-col items-start mb-5 justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Title
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">{event.title}</p>
            </section>
            <section className="flex w-full flex-col items-start mb-5 justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Competition Stage
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">
                {event.competition_stage}
              </p>
            </section>
          </div>
        ))}
    </div>
  )
}
export default Announcement
