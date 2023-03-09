'use client'
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsxm from '../../utils/clsxm'

export default function GlobalAnnouncement() {
  const pathname = usePathname()
  const splittedPathname = pathname ? pathname.split('/') : ['/']
  const isPathnameInDashboard = splittedPathname[1] === 'dashboard'

  const [isAnnoncementClosed, setIsAnnouncementClosed] = React.useState(false)
  return (
    <div
      className={clsxm(
        'flex justify-between bg-red-800 py-3 px-5 shadow-xl',
        isAnnoncementClosed && 'hidden',
      )}
    >
      <div></div>
      <p className="inline-flex items-center gap-x-2 text-sm font-semibold text-white sm:text-base">
        <span>
          <InformationCircleIcon className="h-5 w-5" />
        </span>
        {isPathnameInDashboard
          ? 'We highly recommend using a personal computer to access this website if you experience any trouble with the register button.'
          : 'We highly recommend using either Google Chrome or Firefox to access this Website.'}
      </p>
      <button onClick={() => setIsAnnouncementClosed(true)}>
        <XMarkIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}
