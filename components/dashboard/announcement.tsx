'use client'
import React from 'react'
import FormField from './formFiield'
import EventComment from '../announcement/eventComment'
import EventStatus from '../announcement/eventStatus'

interface competitionTypeInterface {
  id: string
  name: string
  amount: string
  slug: string
}

const competitionType: competitionTypeInterface[] = [
  {
    id: '1',
    name: 'Oil Rig Design',
    amount: '150.000',
    slug: 'oil-rig-design',
  },
  { id: '2', name: 'Paper', amount: '100.000', slug: 'paper' },
  {
    id: '3',
    name: 'Business Case',
    amount: '150.000',
    slug: 'business-case',
  },
  {
    id: '4',
    name: 'Fracturing Fluid Design',
    amount: '180.000',
    slug: 'fracturing-fluid-design',
  },
  { id: '5', name: 'Case Study', amount: '100.000', slug: 'case-study' },
  { id: '6', name: 'Petrosmart', amount: '150.000', slug: 'petrosmart' },
]

const Announcement = ({
  events,
  status,
  submission,
}: {
  events: any[]
  status: any[]
  submission: any[]
}) => {
  const baseStorageUrl = 'https://admin.tesdeveloper.me/storage/'
  const [compId, setCompId] = React.useState('1')
  const [closed, setClosed] = React.useState<boolean>(false)

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
        .map((stat: any) => {
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
              event_id={stat.event_id}
              isPending={isPending}
              isRejected={isRejected}
              identity_team_comment={stat.identity_team_comment}
              link={`update-event-register/${
                competitionType[+compId - 1].slug
              }`}
              closed={closed}
              setClosed={setClosed}
            />
          )
        })}

      {events
        .filter((item: any) => compId === item.event_id)
        .map((event: any) => (
          <EventComment
            id={event.id}
            content={event.content}
            link={`${baseStorageUrl}${event.file}`}
            file={event.file}
          />
        ))}

      <div className="flex flex-col justify-between space-x-0 md:flex-row md:space-x-8">
        {submission
          .filter((item: any) => compId === item.event_id)
          .map((event: any) => {
            const isPending =
              status.find((item: any) => item.event_id === event.event_id)
                ?.identity_team_status === 'unverified'
            const isRejected =
              status.find((item: any) => item.event_id === event.event_id)
                ?.identity_team_status === 'rejected'
            return (
              <FormField
                key={event.id}
                id={event.id}
                compId={compId}
                title={event.title}
                is_submitted={event.is_submitted}
                isPending={isPending}
                isRejected={isRejected}
              />
            )
          })}
      </div>
    </div>
  )
}
export default Announcement
