'use client'
import Link from 'next/link'
import DropdownMenu from '../utils/dropdown-menu'
import Image from 'next/image'
import { UserDataTypes } from '../../utils/auth'
import { useRouter } from 'next/navigation'
import { removeToken } from '../../utils/token'

function ProfileBarButton({ name }: { name: string }) {
  return (
    <div className="inline-flex h-full items-center gap-x-3">
      <Image src="/icon/avatar.svg" width={37} height={37} alt="avatar" />
      <p className="font-semibold">{name}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  )
}

export default function ProfileBar({
  userData,
}: {
  userData: UserDataTypes | undefined
}) {
  const router = useRouter()

  const logOut = () => {
    removeToken()
    router.push('/login')
  }

  const profileBarItems = [
    {
      title: (
        <Link
          href="/dashboard/profile"
          className="inline-flex w-full items-center p-6 font-medium"
        >
          <div className="basis-8">
            <Image
              src="/icon/profile.svg"
              width={16}
              height={16}
              alt="profile"
            />
          </div>
          <p className="font-semibold text-primary">Profile</p>
        </Link>
      ),
      as: 'a' as React.ElementType,
    },
    {
      title: (
        <div
          onClick={() => logOut()}
          className="inline-flex w-full items-center p-6 font-medium"
        >
          <div className="basis-8">
            <Image
              src="/icon/logout.svg"
              width={16}
              height={16}
              alt="profile"
            />
          </div>
          <p className="font-semibold text-error">Logout</p>
        </div>
      ),
      as: 'button' as React.ElementType,
    },
  ]
  return (
    <DropdownMenu
      button={<ProfileBarButton name={userData?.data.name || 'User'} />}
      buttonClassName="rounded-full bg-white py-3 px-6 flex items-center shadow-md hover:bg-white"
      menuClassName="right-0 rounded-xl divide-y divide-gray-300"
      items={profileBarItems}
      width="221px"
    />
  )
}
