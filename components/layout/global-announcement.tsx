'use client'
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import clsxm from '../../utils/clsxm'

export default function GlobalAnnouncement() {
  const [isAnnoncementClosed, setIsAnnouncementClosed] = React.useState(false)
  return (
    <div
      className={clsxm(
        'flex justify-between bg-white py-3 px-5 shadow-xl',
        isAnnoncementClosed && 'hidden',
      )}
    >
      <div></div>
      <p className="inline-flex items-center gap-x-2 text-sm font-semibold text-primary sm:text-base">
        <span>
          <InformationCircleIcon className="h-5 w-5" />
        </span>
        We highly recommend using either Google Chrome or Firefox to access this
        Website.
      </p>
      <button onClick={() => setIsAnnouncementClosed(true)}>
        <XMarkIcon className="h-5 w-5 text-primary" />
      </button>
    </div>
  )
}
