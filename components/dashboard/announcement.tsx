'use client'
import React from 'react'
import Image from 'next/image'
import FormField from './formFiield'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Announcement = ({
  events,
  status,
  submission,
}: {
  events: any[]
  status: any[]
  submission: any[]
}) => {
  interface competitionTypeInterface {
    id: string
    name: string
    amount: string
  }

  const carouselRef = React.useRef<Splide>(null)
  const handleThumbs = (id: string) => {
    if (carouselRef.current) {
      carouselRef.current.go(id)
    }
  }
  const baseStorageUrl = 'https://admin.tesdeveloper.me/storage/'
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
          setClosed(false)
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
          <div key={stat.event_id} className="mb-6">
            {stat.identity_team_status === 'unverifed' && (
              <section
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
          </div>
        ))}

      {events
        .filter((item: any) => compId === item.event_id)
        .map((event: any) => (
          <div
            key={event.id}
            className=" flex flex-col justify-between space-x-6"
          >
            <section className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Announcement
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">
                {event.content}
              </p>
              <div>
                <p>
                  {' '}
                  File:
                  <a
                    className="ml-1 inline hover:border-b-2 hover:border-black"
                    rel="noreferrer"
                    target="_blank"
                    href={`${baseStorageUrl}${event.file}`}
                  >
                    {event.file}
                  </a>
                </p>
              </div>
            </section>
          </div>
        ))}

      <div className="flex flex-col justify-between space-x-0 md:flex-row md:space-x-8">
        {submission
          .filter((item: any) => compId === item.event_id)
          .map((event: any) => (
            <FormField
              key={event.id}
              id={event.id}
              compId={compId}
              title={event.title}
              is_submitted={event.is_submitted}
            />
          ))}
      </div>
    </div>
  )
}
export default Announcement
