'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-[500px]  max-w-md transform flex-col items-center justify-center overflow-hidden rounded-2xl bg-white py-16 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="animate-pulse  text-lg font-medium leading-6 text-gray-900"
                  >
                    <div
                      className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3D4BE0] outline 
                          outline-8 outline-[#838CEB] ring-8 ring-[#D0D4F8] ring-offset-8 md:h-20 md:w-20
                      `}
                    >
                      <Image
                        src={'/icon/check.png'}
                        alt={'check'}
                        width={60}
                        height={60}
                      />
                    </div>
                  </Dialog.Title>
                  <div className="mt-[30px] mb-[60px]">
                    <h5 className="text-2xl font-bold text-[#07003F]">
                      Registration Successful
                    </h5>
                    <p className="mt-10 text-2xl font-semibold text-[#07003F]">
                      Thank you, your account has been successfully registered
                    </p>
                  </div>

                  <div className="">
                    <Link
                      type="button"
                      className="w-full rounded-[30px] bg-[#07003F] py-[13.5px] text-center text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[255px]"
                      href='/dashboard'
                    >
                      Back to Dashboard
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
