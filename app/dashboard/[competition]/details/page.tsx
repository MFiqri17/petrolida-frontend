import ProfileContainer from '../../../../components/dashboard/profile-container'
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

const competitionSlug = {
  1: 'oil-rig-design',
  2: 'paper',
  3: 'business-case',
  4: 'fracturing-fluid-design',
  5: 'case-study',
  6: 'petrosmart',
}

const coba = competitionSlug[1]

const checkCompetitionSlug = (competition: string) => {
  return Object.values(competitionSlug).includes(competition)
}

export default async function Page({
  params,
}: {
  params: { competition: string }
}) {
  const registeredEvents = await getRegisteredEvents()
  const userData = await getUserData()
  const isCompetitonSlugValid = checkCompetitionSlug(params.competition)

  if (!registeredEvents || !userData || !isCompetitonSlugValid) {
    return <div>Something went wrong</div>
  }

  const selectedRegisteredEvent = registeredEvents.data.find(
    (data) =>
      competitionSlug[+data.event_id as keyof typeof competitionSlug] ===
      params.competition,
  )

  if (!selectedRegisteredEvent) {
    return <div>You did not sign up for this competition</div>
  }

  return (
    <>
      <ProfileContainer
        teamData={selectedRegisteredEvent}
        userData={userData}
      />
    </>
  )
}
