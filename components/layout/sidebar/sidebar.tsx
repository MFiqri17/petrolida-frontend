'use client'

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    React.useState<boolean>(false)
  return (
    <>
      <header className="my-8 mx-3 flex items-center justify-between rounded-full bg-white py-3 px-5 sm:hidden">
        <Image
          src="/logo/petrolida-2023.png"
          alt="logo"
          width={80}
          height={29}
        />
        <button className="p-1" onClick={() => setIsMobileSidebarOpen(true)}>
          <Image src="/icon/Menu.svg" alt="bars" width={23} height={17} />
        </button>
        <Transition appear show={isMobileSidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsMobileSidebarOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-80 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-80 -translate-x-full"
              >
                <Dialog.Panel className="relative flex h-screen w-[85%] flex-col bg-whiteb px-3 pb-24 pt-14 shadow sm:hidden">
                  <div className="flex h-1/4 justify-center">
                    <Link href="/dashboard">
                      <Image
                        src="/logo/petrolida-2023.png"
                        width={143}
                        height={55}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="flex h-full w-full flex-col items-center justify-between pb-28">
                    <Link href="/dashboard" className="w-full">
                      <button className="inline-flex w-full items-center justify-center gap-x-3 font-semibold text-primary">
                        <span>
                          <Image
                            src="/icon/event.svg"
                            width={19}
                            height={21}
                            alt="event"
                          />
                        </span>
                        Event
                      </button>
                    </Link>
                    <button className="inline-flex w-full items-center justify-center gap-x-3 font-semibold text-error">
                      <span>
                        <Image
                          src="/icon/logout.svg"
                          width={18}
                          height={19}
                          alt="logout"
                        />
                      </span>
                      Logout
                    </button>
                  </div>
                  <button
                    className="absolute -right-12 top-3 rounded-full bg-white p-2"
                    onClick={() => setIsMobileSidebarOpen(false)}
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </header>
      <aside className="sticky top-0 hidden h-screen w-[14%] flex-col bg-whiteb px-3 py-14 shadow sm:flex">
        <div className="flex h-1/4 justify-center">
          <Link href="/dashboard">
            <Image
              src="/logo/petrolida-2023.png"
              width={143}
              height={55}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-between pb-28">
          <Link href="/dashboard" className="w-full">
            <button className="inline-flex w-full items-center justify-center gap-x-3 font-semibold text-primary">
              <span>
                <Image
                  src="/icon/event.svg"
                  width={19}
                  height={21}
                  alt="event"
                />
              </span>
              Event
            </button>
          </Link>
          <button className="inline-flex w-full items-center justify-center gap-x-3 font-semibold text-error">
            <span>
              <Image
                src="/icon/logout.svg"
                width={18}
                height={19}
                alt="logout"
              />
            </span>
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
