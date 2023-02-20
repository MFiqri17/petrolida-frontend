'use client'
import React from 'react'
import Image from 'next/image'
const Announcement = ({ events, status }: { events: any[]; status: any[] }) => {
  interface competitionTypeInterface {
    id: string
    name: string
    amount: string
  }
  const [compId, setCompId] = React.useState('1')
  const [closed, setClosed] = React.useState<boolean>(false)
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

      {status
        .filter((item: any) => compId === item.event_id)
        .map((stat: any) => (
          <>
            {stat.identity_team_status === 'unverifed' && (
              <section
                key={stat.event_id}
                className={`${
                  closed ? 'hidden' : 'block'
                } flex w-full items-start justify-between rounded-[30px] bg-[#FF695A] py-3.5 px-5`}
              >
                <div className="flex space-x-3">
                  <div>
                    <Image
                      src={'/images/info.png'}
                      width={32}
                      height={32}
                      alt={'info logo'}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-lg font-bold text-[#FBFBFC]">
                      We regret to inform you that an error has been detected in
                      your registration status
                    </p>
                    <p className="text-base font-medium text-[#EDEEF3]">
                      Please upload a new file or provide additional information
                      to help us fix the error
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setClosed(true)
                  }}
                  className=""
                  type="button"
                >
                  <Image
                    src={'/images/Close.png'}
                    width={16}
                    height={16}
                    alt={'close'}
                  />
                </button>
              </section>
            )}
          </>
        ))}

      {events
        .filter((item: any) => compId === item.event_id)
        .map((event: any) => (
          <div
            key={event.id}
            className="mt-6 flex flex-col justify-between space-x-6"
          >
            <section className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Title
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">
                {event.title}
              </p>
            </section>
            <div className="flex justify-between space-x-8">
              <section className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
                <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                  Competition Stage
                </h5>
                <p className="text-lg font-semibold text-[#1E1E2D]">
                  {event.competition_stage}
                </p>
              </section>
            </div>
          </div>
        ))}
    </div>
  )
}
export default Announcement
