import ProfileContainer from '../../../../components/dashboard/profile-container'
import SingleAnnouncement from '../../../../components/dashboard/single-announcment'
import api from '../../../../utils/api'
import { serverApiInterceptors } from '../../../../utils/api-interceptor'
import { getUserData } from '../../../../utils/auth'

export interface MemberData {
  id: number
  name: string
  email: string
  phone: string
  identity_id: string
  major: string
  batch: string
  identity_card_path: string
  student_card_path: string
  is_leader: string
  team_id: string
  created_at: Date
  updated_at: Date
}

export interface PaymentData {
  id: number
  status: string
  reject_reason?: any
  payment_proof: string
  amount: string
  eventable_type: string
  eventable_id: string
  created_at: Date
  updated_at: Date
}

export interface TeamData {
  id: number
  team_name: string
  university: string
  identity_team_status: string
  identity_team_comment?: any
  competition_stage: string
  created_at: Date
  updated_at: Date
  event_id: string
  members: MemberData[]
  payment: PaymentData
}

export interface RegisteredEventsType {
  success: boolean
  data: TeamData[]
}

async function getRegisteredEvents() {
  serverApiInterceptors()
  try {
    const res = await api.get<RegisteredEventsType>('/events/registration')
    return res.data
  } catch (error) {
    return
  }
}

async function getEventsAnnoucement() {
  serverApiInterceptors()
  try {
    const res = await api.get('/announcement')
    return res.data.data
  } catch (error) {
    return
  }
}

async function getStatusAnnouncement() {
  serverApiInterceptors()
  try {
    const res = await api.get('/events/registration')
    return res.data.data
  } catch (error) {
    return
  }
}

async function getSubmission() {
  serverApiInterceptors()
  try {
    const res = await api.get('/submission')
    return res.data.data
  } catch (error) {
    return
  }
}

const competitionSlug = {
  1: 'oil-rig-design',
  2: 'paper',
  3: 'business-case',
  4: 'fracturing-fluid-design',
  5: 'case-study',
  6: 'petrosmart',
}

const checkCompetitionSlug = (competition: string) => {
  const slugValidity = Object.values(competitionSlug).includes(competition)
  const slugId =
    Object.keys(competitionSlug).find(
      (key) =>
        competitionSlug[+key as keyof typeof competitionSlug] === competition,
    ) || 0
  return { slugValidity, slugId }
}

export default async function Page({
  params,
}: {
  params: { competition: string }
}) {
  const registeredEvents = await getRegisteredEvents()
  const userData = await getUserData()
  const isCompetitonSlugValid = checkCompetitionSlug(params.competition)
  // Announcment
  const events = await getEventsAnnoucement()
  const status = await getStatusAnnouncement()
  const submission = await getSubmission()

  if (!registeredEvents || !userData || !isCompetitonSlugValid.slugValidity) {
    return <div>Something went wrong</div>
  }

  const selectedRegisteredEvent = registeredEvents.data.find(
    (data) =>
      competitionSlug[+data.event_id as keyof typeof competitionSlug] ===
      params.competition,
  )
  // Announcment Based on selected Registered Events
  const selectedEvent = events.filter(
    (event: any) => event.event_id === isCompetitonSlugValid.slugId,
  )
  const selectedStatus = status.filter(
    (status: any) => status.event_id === isCompetitonSlugValid.slugId,
  )
  const selectedSubmission = submission.filter(
    (submission: any) => submission.event_id === isCompetitonSlugValid.slugId,
  )

  if (!selectedRegisteredEvent) {
    return <div>You did not sign up for this competition</div>
  }

  return (
    <>
      <SingleAnnouncement
        events={selectedEvent ?? []}
        submission={selectedSubmission ?? []}
        status={selectedStatus ?? []}
        slug={params.competition}
      />
      <ProfileContainer
        teamData={selectedRegisteredEvent}
        userData={userData}
      />
    </>
  )
}
