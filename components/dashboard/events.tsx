'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { competitionData } from '../../data/competition'
import OngoingPopup from './ongoing-event-popup'
import RegistrationTimer from './registration-timer'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Events() {
  let [categories] = useState({
    'All Competitions': competitionData,
    Registered: [],
  })
  return (
    <>
      <div className="w-full px-2 sm:px-0">
        <h2 className="text-2xl font-semibold">Events</h2>
        <Tab.Group>
          <Tab.List className="flex space-x-1 p-1 ">
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
                  className={`${
                    Object.keys(items).length != 0
                      ? 'grid grid-cols-1 gap-8 lg:grid-cols-3'
                      : 'flex flex-col items-center justify-center'
                  }`}
                >
                  {Object.keys(items).length != 0 ? (
                    items.map((item) => (
                      <li
                        key={item.name}
                        className="relative max-w-sm rounded-3xl border bg-whiteb hover:bg-gray-100"
                      >
                        <div className="relative overflow-hidden rounded-3xl">
                          <img
                            className="max-h-full w-full transition duration-300 hover:scale-105"
                            src={`/event-dashboard/${item.slug}.png`}
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
                        <div className="flex items-center justify-between space-x-6 px-4 py-6">
                          <h3 className="text-xl font-semibold leading-5">
                            {item.name}
                          </h3>
                          <a
                            href="#"
                            className="rounded-full bg-secondary px-5 py-4 font-semibold text-whiteb transition duration-300 hover:-translate-y-1"
                          >
                            Register
                          </a>
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-6 p-4 text-left lg:text-center">
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
