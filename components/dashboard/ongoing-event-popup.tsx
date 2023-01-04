import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { competitionData } from '../../data/competition'

export default function OngoingPopup() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-300 hover:-translate-y-0.5"
                >
                    <img src="/icon/calendar-time.svg" alt="registered" />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md pt-4 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <button
                                        type="button"
                                        className="block p-2 ml-auto text-sm font-medium -translate-x-4 rounded-md hover:bg-red-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        <XMarkIcon
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-semibold leading-6 text-primary"
                                    >
                                        Ongoing Event
                                    </Dialog.Title>
                                    <div className="flex flex-col my-8 space-y-8">
                                        <div className='relative mx-auto'>
                                            <div className='w-8 h-8 rounded-full'></div>
                                            <div className='absolute top-0 z-40 w-8 h-8 rounded-full bg-secondary '></div>
                                            <div className='absolute top-0 -translate-x-2 -translate-y-2 w-12 h-12 z-30 rounded-full bg-[#838CEB]'></div>
                                            <div className='absolute top-0 -translate-x-4 -translate-y-4 w-16 h-16 z-20 rounded-full bg-[#D0D4F8]'></div>
                                        </div>
                                        <div className="text-center ">
                                            <p className='text-2xl font-semibold'>27 Feb</p>
                                            <p className='text-lg text-[#605C84] font-semibold'>Open Registration</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='flex flex-col items-center justify-center py-8'>
                                            <p className='text-lg font-semibold'>Previous Event</p>
                                            <p>-</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center bg-gradient-to-b from-[#5461E4] to-[#D0D4F8] text-whiteb'> 
                                            <p className='text-lg font-semibold'>Next Event</p>
                                            <p>Close Registration</p>
                                        </div>
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
