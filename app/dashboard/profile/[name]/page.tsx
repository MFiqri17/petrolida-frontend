'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export default function Page() {
  const pathName = usePathname()
  const pageName = profileData.find(({ src }) => src === pathName)?.name
  const isAGeneralPage = pageName === 'General'
  const isAFilePage = pageName === 'File'
  const onlyMember = profileData.filter(
    ({ name }) => name !== 'General' && name !== 'File',
  )
  const formData = isAGeneralPage
    ? generalData
    : isAFilePage
    ? fileData
    : identityData
  return (
    <section>
      <h1 className="mb-10 text-xl font-extrabold">Profile</h1>
      <div className="flex items-start gap-x-8">
        <div className="flex w-1/5 flex-col items-center  divide-y divide-gray-300 rounded-2xl bg-whiteb px-3 shadow">
          <div className="flex w-full items-center justify-center gap-x-2 py-6">
            <Image src="/icon/avatar.svg" width={37} height={37} alt="avatar" />
            <p className="font-semibold">User</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-4 py-6">
            {profileData.map(({ name, src }) => (
              <Link
                key={src}
                className={clsx(
                  'font-semibold hover:text-primary',
                  pathName === src ? 'text-primary' : 'text-gray-400',
                )}
                href={src}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-7 text-xl font-extrabold">{pageName}</h1>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-8 rounded-2xl bg-whiteb px-5 py-10 shadow">
            {formData.map(({ name, displayName }) =>
              isAFilePage ? (
                <div key={name}>
                  <p className="text-lg font-extrabold text-primary">
                    {!isAGeneralPage && pageName} {displayName}
                  </p>
                  <p className="inline-flex gap-x-2">
                    <span>
                      <Image
                        src="/icon/download.svg"
                        width={24}
                        height={24}
                        alt="download"
                      />
                    </span>
                    nama file
                  </p>
                </div>
              ) : (
                <div key={name}>
                  <p className="text-lg font-extrabold text-primary">
                    {!isAGeneralPage && pageName} {displayName}
                  </p>
                  <div className="w-full rounded-full bg-light py-6"></div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
