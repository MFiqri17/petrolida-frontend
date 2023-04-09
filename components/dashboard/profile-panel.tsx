import { Tab } from '@headlessui/react'
import React from 'react'
import { MemberData, TeamData } from '../../app/dashboard/profile/page'
import { competitionData } from '../../data/competition'
import Image from 'next/image'

const profileTabPanelMemberData = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  identity_id: 'Identity ID',
  major: 'Major',
  batch: 'Batch',
}

const baseStorageUrl = 'https://petrolidaserver.com/storage/'

export const ProfileTabPanel = ({
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

export const GeneralTabPanel = ({ teamData }: { teamData: TeamData }) => {
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

export const FileTabPanel = ({
  membersData,
}: {
  membersData: MemberData[]
}) => {
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
            <h1 className="col-span-1 mb-2 text-xl font-bold">
              {i === 0 ? 'Leader' : `Member ${i}`}
            </h1>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-primary">
                  File KTP/Passport
                </p>
                {member.identity_card_path ? (
                  <>
                    <p>Preview:</p>
                    <div className="relative h-[14rem] w-full sm:h-[17rem]">
                      <Image
                        src={baseStorageUrl + member.identity_card_path}
                        alt="ktp"
                        className="absolute object-contain shadow"
                        fill
                      />
                    </div>
                  </>
                ) : (
                  <div className="col flex h-24 flex-col items-center justify-center">
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
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>

                    <p className="font-medium text-gray-800">
                      The file is not found or not exist
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-lg font-semibold text-primary">
                  File Student ID
                </p>
                {member.student_card_path ? (
                  <>
                    <p>Preview:</p>
                    <div className="relative h-[14rem] w-full sm:h-[17rem]">
                      <Image
                        src={baseStorageUrl + member.student_card_path}
                        alt="ktp"
                        className="absolute object-contain shadow"
                        fill
                      />
                    </div>
                  </>
                ) : (
                  <div className="col flex h-24 flex-col items-center justify-center">
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
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>

                    <p className="font-medium text-gray-800">
                      The file is not found or not exist
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tab.Panel>
  )
}
