'use client'
import React from 'react'
import Image from 'next/image'
interface EventStatusProps {
  event_id: any
  isPending: any
  isRejected: any
  identity_team_comment: string
  link: string
  closed: boolean
  setClosed: (closed: boolean) => void
}
const EventStatus = ({
  event_id,
  isPending,
  isRejected,
  identity_team_comment,
  link,
  closed,
  setClosed,
}: EventStatusProps) => {
  const closeButton = (
    <button onClick={() => setClosed(true)} type="button">
      <Image src="/images/Close.png" width={16} height={16} alt="close" />
    </button>
  )
  return (
    <div key={event_id} className="mb-6">
      <section
        className={`flex w-full items-start justify-between rounded-[30px] bg-[#FF695A] py-3.5 px-5 ${
          closed ? 'hidden' : 'block'
        }`}
      >
        <div className="flex space-x-3">
          <div>
            <Image
              src="/images/info.png"
              width={32}
              height={32}
              alt="info logo"
            />
          </div>
          <div className="flex flex-col space-y-1">
            {isPending && (
              <p className="text-lg font-bold text-[#FBFBFC]">
                Your registration is currently under review
              </p>
            )}
            <p className="fonxt-bold text-lg text-[#FBFBFC]">
              {identity_team_comment}
            </p>
            {isRejected && (
              <a href={link} className="w-full">
                <button className="w-[180px] rounded-[30px] bg-[#FBFBFC] py-[14.5px]  text-center text-base font-semibold text-[#3D4BE0] !transition   !duration-300 hover:!scale-105">
                  Register Again
                </button>
              </a>
            )}
          </div>
        </div>
        {closeButton}
      </section>
    </div>
  )
}

export default EventStatus
