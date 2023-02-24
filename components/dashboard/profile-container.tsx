'use client'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { MemberData, TeamData } from '../../app/dashboard/profile/page'
import { competitionData } from '../../data/competition'
import React from 'react'
import { UserDataTypes } from '../../utils/auth'

export default function ProfileContainer({
  teamData,
  userData,
}: {
  teamData: TeamData[]
  userData: UserDataTypes
}) {
  const [selectedTeamIndex, setSelectedTeamIndex] = React.useState(0)
  const selectedTeam = teamData[selectedTeamIndex]
  return (
    <section>
      <h1 className="mb-10 text-xl font-extrabold">Profile</h1>
      <Tab.Group>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative top-6 mb-10 w-full space-y-4 md:sticky md:w-1/5">
            <div className="rounded-2xl bg-white p-3 shadow">
              <p className="font-semibold text-primary">Team</p>

              <select
                name=""
                id=""
                className="w-full rounded-lg bg-light px-3 py-2"
                onChange={(e) => setSelectedTeamIndex(Number(e.target.value))}
              >
                {teamData.map(({ team_name }, i) => (
                  <option key={team_name} value={i}>
                    {team_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full flex-col items-center divide-y divide-gray-300 rounded-2xl bg-white px-3 shadow ">
              <div className="flex w-full items-center justify-center gap-x-2 py-6">
                <Image
                  src="/icon/avatar.svg"
                  width={37}
                  height={37}
                  alt="avatar"
                />
                <p className="font-semibold">{userData.data.name}</p>
              </div>
              <Tab.List className="flex w-full flex-col items-center justify-center gap-y-4 py-6">
                {/* The Tabs Start here */}
                <Tab>
                  <h1>General</h1>
                </Tab>
                {selectedTeam.members.map(({ id }, i) => (
                  <Tab key={id}>
                    <h1 key={id}>{i === 0 ? 'Leader' : `Member ${i}`}</h1>
                  </Tab>
                ))}
                <Tab>File</Tab>
              </Tab.List>
            </div>
          </div>
          <div className="w-full">
            <Tab.Panels>
              <GeneralTabPanel teamData={selectedTeam} />
              {selectedTeam.members.map((data, i) => (
                <ProfileTabPanel key={data.id} memberData={data} index={i} />
              ))}
              <FileTabPanel membersData={selectedTeam.members} />
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </section>
  )
}

const profileTabPanelMemberData = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  identity_id: 'Identity ID',
  major: 'Major',
  batch: 'Batch',
}

const ProfileTabPanel = ({
  memberData,
  index,
}: {
  memberData: MemberData
  index: number
}) => {
  const tabName = index === 0 ? 'Leader' : `Member ${index}`
  return (
    <Tab.Panel>
      <h1 className="mb-7 text-xl font-extrabold">{tabName}</h1>
      <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-8 rounded-2xl bg-whiteb px-5 py-10 shadow sm:grid-cols-2">
        {Object.entries(profileTabPanelMemberData).map((data) => (
          <div key={data[0]}>
            <p className="text-lg font-extrabold text-primary">
              {tabName} {data[1]}
            </p>
            <div className="w-full rounded-full bg-light px-5 py-3">
              <p className="text-left text-lg font-medium">
                {memberData[data[0] as keyof MemberData].toString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Tab.Panel>
  )
}

const GeneralTabPanel = ({ teamData }: { teamData: TeamData }) => {
  const { team_name, university, event_id } = teamData
  const competitionType = React.useMemo(
    () => competitionData.find((data) => data.id.toString() === event_id)?.name,
    [event_id],
  )

  return (
    <Tab.Panel>
      <h1 className="mb-7 text-xl font-extrabold">General</h1>
      <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-8 rounded-2xl bg-whiteb px-5 py-10 shadow sm:grid-cols-2">
        <div>
          <p className="text-lg font-extrabold text-primary">
            Competition Type
          </p>
          <div className="w-full rounded-full bg-light px-5 py-3">
            <p className="text-left text-lg font-medium">{competitionType}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-extrabold text-primary">University</p>
          <div className="w-full rounded-full bg-light px-5 py-3">
            <p className="text-left text-lg font-medium">{university}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-extrabold text-primary">Team Name</p>
          <div className="w-full rounded-full bg-light px-5 py-3">
            <p className="text-left text-lg font-medium">{team_name}</p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

const FileTabPanel = ({ membersData }: { membersData: MemberData[] }) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/file/1.pdf'
    link.setAttribute('download', 'file.pdf')
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
  }
  return (
    <Tab.Panel>
      <h1 className="mb-7 text-xl font-extrabold">File</h1>
      <div className="mb-10 grid grid-cols-1 gap-y-8 rounded-2xl bg-whiteb px-5 py-10 shadow">
        {membersData.map((member, i) => (
          <div key={member.id}>
            <h1 className="col-span-1 mb-4 text-xl font-bold">
              {i === 0 ? 'Leader' : `Member ${i}`}
            </h1>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-primary">
                  File KTP/Passport
                </p>
                <button className="inline-flex w-full justify-center gap-x-2 rounded-full bg-primary px-5 py-3 text-white transition hover:scale-[104%]">
                  <p className="text-left text-lg font-semibold">Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary">
                  File Student ID
                </p>
                <button className="inline-flex w-full justify-center gap-x-2 rounded-full bg-primary px-5 py-3 text-white transition hover:scale-[104%]">
                  <p className="text-left text-lg font-semibold">Download</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tab.Panel>
  )
}
