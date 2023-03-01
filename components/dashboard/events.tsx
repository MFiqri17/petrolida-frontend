'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { competitionData } from '../../data/competition'
import OngoingPopup from './ongoing-event-popup'
import RegistrationTimer from './registration-timer'
import Link from 'next/link'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Events({
  registeredEvents,
}: {
  registeredEvents: any[]
}) {
  let [categories] = useState({
    'All Competitions': competitionData,
    Registered: competitionData.filter((item) =>
      registeredEvents.some((event) => event.event_id == item.id),
    ),
  })

  const checkIfRegistered = (id: number) => {
    return registeredEvents.some((event) => event.event_id == id)
  }

  const [todayDate] = useState<any>(new Date())
  let currentDate: string =
    todayDate.getFullYear() +
    '-' +
    (todayDate.getMonth() + 1) +
    '-' +
    todayDate.getDate()
  return (
    <>
      <div className="w-full px-2 sm:px-0">
        <h2 className="text-2xl font-semibold">Events</h2>
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-lg font-semibold leading-5 text-primary',
                    'ease transition duration-300',
                    selected
                      ? 'border-b-4 border-secondary text-white focus:outline-none'
                      : 'border-b-4 border-transparent text-primary hover:-translate-y-1',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((items, idx) => (
              <Tab.Panel key={idx} className={classNames('rounded-xl p-3')}>
                <ul
                  className={`${Object.keys(items).length != 0
                      ? 'grid grid-cols-1 gap-8 lg:grid-cols-3'
                      : 'flex flex-col items-center justify-center'
                    }`}
                >
                  {Object.keys(items).length != 0 ? (
                    items.map((item) => (
                      <li
                        key={item.name}
                        className="relative max-w-sm border rounded-3xl bg-whiteb hover:bg-gray-100"
                      >
                        <div className="relative overflow-hidden rounded-3xl">
                          <img
                            className="w-full max-h-full transition duration-300 hover:scale-105"
                            src={`/event-dashboard/${item.slug}.jpg`}
                            alt={item.slug}
                          />
                          <RegistrationTimer
                            startRegistration={item.start_registration || ''}
                            endRegistration={item.end_registration || ''}
                          />
                          {idx === 1 ? (
                            <div className="absolute top-0 right-0 mx-3 mt-3">
                              <OngoingPopup />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="flex items-center justify-between px-4 py-6 space-x-6">
                          <h3 className="text-xl font-semibold leading-5">
                            {item.name}
                          </h3>
                          {idx === 1 ? (
                            <div className="flex flex-col items-center">
                              <p className="text-gray-600">Registered</p>
                              <Link
                                href={`/dashboard/${item.slug}/details`}
                                className="w-full"
                              >
                                <div className="px-2 py-1 font-semibold text-center text-white rounded-full bg-secondary">
                                  Details
                                </div>
                              </Link>
                            </div>
                          ) : checkIfRegistered(item.id) ? (
                            <button
                              disabled
                              className="cursor-not-allowed rounded-full bg-secondary px-5 py-4 font-semibold text-whiteb brightness-[75%]"
                            >
                              Register
                            </button>
                          ) : currentDate >= item.start_registration &&
                            currentDate <= item.end_registration ? (
                            <a
                              href={`/event-register/${item.slug}`}
                              className={`${'rounded-full bg-secondary px-5 py-4 font-semibold text-whiteb transition duration-300 hover:-translate-y-1'}`}
                            >
                              Register
                            </a>
                          ) : (
                            <button
                              disabled
                              className="cursor-not-allowed rounded-full bg-secondary px-5 py-4 font-semibold text-whiteb brightness-[75%]"
                            >
                              Register
                            </button>
                          )}
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 space-y-6 text-left lg:text-center">
                      <div className="w-72 md:w-96">
                        <img
                          className="w-full"
                          src="/event-dashboard/empty-register.png"
                          alt="empty-register"
                        />
                      </div>
                      <h4 className="text-2xl font-semibold text-primary md:text-4xl">
                        You haven't registered for the Petrolida event
                      </h4>
                      <p className="max-w-xl">
                        Let’s join our excitement don’t miss the ultimate
                        opportunity to showcase your ideas and innovation in
                        reinforcing the future of oue energy industry
                      </p>
                    </div>
                  )}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}
