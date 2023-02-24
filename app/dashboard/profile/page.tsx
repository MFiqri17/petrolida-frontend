import api from '../../../utils/api'
import { serverApiInterceptors } from '../../../utils/api-interceptor'
import ProfileContainer from '../../../components/dashboard/profile-container'
import { getUserData } from '../../../utils/auth'

const profileData = [
  {
    name: 'General',
    src: '/dashboard/profile/general',
  },
  {
    name: 'Leader',
    src: '/dashboard/profile/leader',
  },
  {
    name: 'Member 1',
    src: '/dashboard/profile/member1',
  },
  {
    name: 'Member 2',
    src: '/dashboard/profile/member2',
  },
  {
    name: 'Member 3',
    src: '/dashboard/profile/member3',
  },
  {
    name: 'File',
    src: '/dashboard/profile/file',
  },
]

const identityData = [
  {
    name: 'name',
    displayName: 'Name',
  },
  {
    name: 'id',
    displayName: 'ID (NIK/Passport)',
  },
  {
    name: 'major',
    displayName: 'Major',
  },
  {
    name: 'email',
    displayName: 'Email',
  },
  {
    name: 'batch',
    displayName: 'Batch',
  },
  {
    name: 'phone',
    displayName: 'Phone Number',
  },
]

const generalData = [
  {
    name: 'competition_type',
    displayName: 'Competition Type',
  },
  {
    name: 'university',
    displayName: 'University',
  },
  {
    name: 'team_name',
    displayName: 'Team Name',
  },
]

const fileData = [
  {
    name: 'transfer_receipt',
    displayName: 'Competition Type',
  },
  {
    name: 'ktp',
    displayName: 'KTP/Passport',
  },
  {
    name: 'id_card',
    displayName: 'Students ID Card',
  },
]

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

export default async function Page() {
  const registeredEvents = await getRegisteredEvents()
  const userData = await getUserData()

  if (!registeredEvents || !userData) {
    return <div>Something went wrong</div>
  }
  return (
    <ProfileContainer teamData={registeredEvents.data} userData={userData} />
  )
}
