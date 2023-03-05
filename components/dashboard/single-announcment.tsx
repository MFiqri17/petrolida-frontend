'use client'
import React from 'react'
import Image from 'next/image'
import FormField from './formFiield'
import EventStatus from '../announcement/eventStatus'
import EventComment from '../announcement/eventComment'

const SingleAnnouncement = ({
  events,
  status,
  submission,
  slug,
}: {
  events: any[]
  status: any[]
  submission: any[]
  slug: string
}) => {
  const [closed, setClosed] = React.useState<boolean>(false)
  const competitionStage = status[0]?.competition_stage || ''
  const baseStorageUrl = 'https://admin.tesdeveloper.me/storage/'

  return (
    <div className="mb-20">
      <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
        Announcement
      </h1>

      {status.map((stat: any) => {
        if (
          stat.identity_team_status !== 'unverifed' &&
          stat.identity_team_status !== 'rejected'
        ) {
          return null
        }
        const isPending = stat.identity_team_status === 'unverifed'
        const isRejected = stat.identity_team_status === 'rejected'
        return (
          <EventStatus
            key={stat.event_id}
            event_id={stat.event_id}
            isPending={isPending}
            isRejected={isRejected}
            identity_team_comment={stat.identity_team_comment}
            link={`update-event-register/${slug}`}
            closed={closed}
            setClosed={setClosed}
          />
        )
      })}

      {events
        .filter((item: any) => competitionStage === item.competition_stage)
        .map((event: any) => (
          <EventComment
            key={event.id}
            id={event.id}
            content={event.content}
            link={`${baseStorageUrl}${event.file}`}
            file={event.file}
          />
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
