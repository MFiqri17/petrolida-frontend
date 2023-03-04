'use client'
import React from 'react'
import Image from 'next/image'
import FormField from './formFiield'

const SingleAnnouncement = ({
  events,
  status,
  submission,
}: {
  events: any[]
  status: any[]
  submission: any[]
}) => {
  const [closed, setClosed] = React.useState<boolean>(false)

  return (
    <div className="mb-20">
      <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
        Announcement
      </h1>

      {status.map((stat: any) => (
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

      {events.map((event: any) => (
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
          </section>
        </div>
      ))}

      <div className="flex justify-between space-x-8">
        {submission.map((event: any) => (
          <FormField
            key={event.id}
            id={event.id}
            compId={event.event_id}
            title={event.title}
            is_submitted={event.is_submitted}
            is_verified={event.is_verified}
          />
        ))}
      </div>
    </div>
  )
}
export default SingleAnnouncement
