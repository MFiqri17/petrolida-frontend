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
      <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
        Announcement
      </h1>
      <select
        className="!focus:border-0 !border-0 text-lg font-bold leading-[21.76px] text-[#131736] focus:outline-none "
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
          <div className="flex space-x-6">
            <section className="flex flex-col items-center justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] lg:h-[150px] lg:w-[486px]">
              <h5 className="text-base font-semibold leading-[19px] text-[#605C84]">
                Title
              </h5>
              <p
                className="text-lg font-bold text-[#1E1E2D]"
                key={event.event_id}
              >
                {event.title}
              </p>
            </section>
            <section className="flex flex-col items-center justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] lg:h-[150px] lg:w-[486px]">
              <h5 className="text-base font-semibold leading-[19px] text-[#605C84]">
                Competition Stage
              </h5>
              <p
                className="text-lg font-bold text-[#1E1E2D]"
                key={event.event_id}
              >
                {event.competition_stage}
              </p>
            </section>
          </div>
        ))}
    </div>
  )
}
export default Announcement
