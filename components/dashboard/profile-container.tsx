'use client'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { TeamData } from '../../app/dashboard/profile/page'
import React from 'react'
import { UserDataTypes } from '../../utils/auth'
import { GeneralTabPanel, ProfileTabPanel, FileTabPanel } from './profile-panel'
import clsxm from '../../utils/clsxm'

export default function ProfileContainer({
  teamData,
  userData,
}: {
  teamData: TeamData
  userData: UserDataTypes
}) {
  const selectedTeam = teamData
  return (
    <section>
      <h1 className="mb-10 text-xl font-extrabold">Team Profile</h1>
      <Tab.Group>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative top-6 mb-10 w-full space-y-4 md:sticky md:w-1/5">
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
                <Tab
                  className={({ selected }) =>
                    clsxm(
                      'font-semibold text-gray-400',
                      selected && 'text-primary',
                    )
                  }
                >
                  <h1>General</h1>
                </Tab>
                {selectedTeam.members.map(({ id }, i) => (
                  <Tab
                    key={id}
                    className={({ selected }) =>
                      clsxm(
                        'font-semibold text-gray-400',
                        selected && 'text-primary',
                      )
                    }
                  >
                    <h1 key={id}>{i === 0 ? 'Leader' : `Member ${i}`}</h1>
                  </Tab>
                ))}
                <Tab
                  className={({ selected }) =>
                    clsxm(
                      'font-semibold text-gray-400',
                      selected && 'text-primary',
                    )
                  }
                >
                  File
                </Tab>
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
