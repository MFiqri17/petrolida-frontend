'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Navbar() {
    const links = [
        {
            href: '##',
            name: 'Oil Rig Design',
        },
        {
            href: '##',
            name: 'Fracturing Fluid Design',
        },
        {
            href: '##',
            name: 'Fracturing Fluid Design',
        },
        {
            href: '##',
            name: 'Petrosmart',
        },
        {
            href: '##',
            name: 'Paper',
        },
        {
            href: '##',
            name: 'Business Case',
        },
        {
            href: '##',
            name: 'Case Study',
        },

    ]
    return (
        <div>
            <nav className="flex flex-wrap max-w-screen-xl justify-between text-center lg:mt-4 lg:max-w-screen-lg bg-[#FBFBFC] lg:rounded-full fixed z-[999] mx-auto left-0 right-0 shadow-lg shadow-liteBlack ">
                <a href="/">
                    <span className="sr-only">Petrolida 2023</span>
                    <div className='p-4'>
                        <img src={'/logo/petrolida-2023.png'} alt="logo-petrolida" className='h-10' />
                    </div>
                </a>
                <div className="flex items-center pl-4 md:pl-12 lg:!hidden -my-2 mr-4">
                    <Popover>
                        <Popover.Button className="flex items-center space-x-2 text-purple-200 focus:outline-none">
                            <Bars3Icon className="w-6 h-6 stroke-[#07003F]" aria-hidden="true" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden">
                                <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="w-auto h-8"
                                                    src={'/logo/petrolida-2023.png'}
                                                    alt="logo-petrolida"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid grid-cols-2 gap-y-8">
                                                {links.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center justify-center p-3 -m-3 rounded-md hover:bg-gray-50"
                                                    >
                                                        <span className="ml-3 text-sm font-medium text-gray-900">{item.name}</span>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="px-5 py-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                            <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                                                About
                                            </a>

                                            <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                                                Event
                                            </a>
                                            <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                                                Contact
                                            </a>
                                            <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                                                Non Competition
                                            </a>
                                            {/* {links.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    {item.name}
                                                </a>
                                            ))} */}
                                        </div>
                                        <div>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                                            >
                                                Register
                                            </a>
                                            <p className="mt-6 text-sm font-medium text-center text-gray-500">
                                                Already have an account? {' '}
                                                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                                    Log in
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
                <ul className="hidden lg:flex flex-col px-6 py-8 mt-[3.25em] space-y-4 font-semibold text-white lg:!space-y-0 lg:mt-0 text-start lg:items-center lg:space-x-8 lg:flex-row font-poppins absolute lg:translate-x-0 bg-liteBlack lg:static transform transition duration-300 rounded-br-lg lg:rounded-full lg:!py-2">
                    <a href="/">
                        <li
                            className="text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                            About</li>
                    </a>
                    <a href="#">
                        <li
                            className="text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                            Event</li>
                    </a>
                    <a href="#">
                        <li className="text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                            Contact</li>
                    </a>
                    <Popover className="relative bg-white">
                        <Popover.Button className="text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">Competition</Popover.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 -translate-x-12 w-60">
                                <ul className="py-4 pl-4 pr-12 mt-8 rounded-xl bg-[#FBFBFC]" >
                                    {links.map((item: {
                                        name: any;
                                        href: any;
                                    }) =>
                                        <a key={item.name} href={item.href}>
                                            <li
                                                className="mb-3 text-[#6B6F75] hover:text-transparent bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text text-start">
                                                {item.name}</li>
                                        </a>
                                    )}
                                </ul>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="/">
                        <li
                            className="text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                            Non Competition</li>
                    </a>
                </ul >

                {/* @auth */}
                <ul className="hidden flex-row relative items-center space-x-8 sm:justify-center bg-[#FBFBFC]  rounded-full py-3 lg:py-2 sm:px-6 px-0  font-poppins font-semibold"
                    x-data="{ open: false }">
                    <Popover className="relative bg-white">
                        <Popover.Button className="py-2 px-6 text-[#6B6F75] flex flex-row items-center space-x-4    bg-gradient-to-r hover:text-transparent  hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                            <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M23 5.75C19.5096 5.74898 16.1009 6.80686 13.2244 8.78389C10.3478 10.7609 8.13871 13.5641 6.88884 16.8231C5.63898 20.0821 5.40718 23.6436 6.22406 27.0371C7.04094 30.4306 8.86808 33.4965 11.4641 35.8297C12.5458 33.6996 14.1962 31.9105 16.2324 30.6609C18.2686 29.4113 20.611 28.7499 23 28.75C21.5785 28.75 20.1889 28.3285 19.0069 27.5387C17.8249 26.7489 16.9037 25.6264 16.3597 24.313C15.8156 22.9997 15.6733 21.5545 15.9506 20.1603C16.228 18.7661 16.9125 17.4854 17.9177 16.4802C18.9229 15.475 20.2036 14.7904 21.5978 14.5131C22.9921 14.2358 24.4372 14.3781 25.7506 14.9221C27.0639 15.4661 28.1865 16.3874 28.9762 17.5693C29.766 18.7513 30.1875 20.1409 30.1875 21.5625C30.1875 23.4687 29.4303 25.2969 28.0824 26.6448C26.7345 27.9927 24.9063 28.75 23 28.75C25.3891 28.7499 27.7315 29.4113 29.7677 30.6609C31.8039 31.9105 33.4543 33.6996 34.536 35.8297C37.132 33.4965 38.9591 30.4306 39.776 27.0371C40.5929 23.6436 40.3611 20.0821 39.1112 16.8231C37.8614 13.5641 35.6522 10.7609 32.7757 8.78389C29.8991 6.80686 26.4905 5.74898 23 5.75Z" fill="#605C84" />
                                <path d="M41.6875 23.0001C41.6885 19.8915 40.914 16.8318 39.4342 14.0981C37.9544 11.3644 35.816 9.04295 33.2127 7.34412C30.6094 5.6453 27.6235 4.62272 24.5253 4.369C21.4271 4.11528 18.3145 4.63843 15.4695 5.89108C12.6245 7.14373 10.137 9.0863 8.23212 11.5428C6.32726 13.9994 5.0653 16.8923 4.56052 19.9596C4.05575 23.0269 4.32411 26.1717 5.34131 29.1091C6.3585 32.0466 8.09239 34.6838 10.3859 36.7821L10.6195 36.9977C14.0359 40.0193 18.4392 41.6871 23 41.6871C27.5608 41.6871 31.9642 40.0193 35.3805 36.9977L35.6141 36.7821C37.5298 35.034 39.0594 32.9053 40.1053 30.5321C41.1511 28.1589 41.69 25.5935 41.6875 23.0001ZM7.1875 23.0001C7.18656 20.4391 7.80767 17.9161 8.99744 15.6483C10.1872 13.3804 11.91 11.4354 14.0177 9.98065C16.1254 8.52586 18.5549 7.60479 21.0973 7.29663C23.6397 6.98847 26.219 7.30245 28.6132 8.21157C31.0074 9.12069 33.145 10.5977 34.8421 12.5157C36.5392 14.4337 37.7451 16.7352 38.356 19.2222C38.9669 21.7093 38.9646 24.3076 38.3493 26.7936C37.7339 29.2796 36.524 31.5789 34.8234 33.4938C33.2206 31.1694 30.9627 29.3743 28.3367 28.3368C29.7451 27.2275 30.7729 25.7069 31.277 23.9864C31.7811 22.2659 31.7366 20.4311 31.1496 18.7371C30.5626 17.0431 29.4623 15.5741 28.0017 14.5344C26.5411 13.4948 24.7928 12.9361 23 12.9361C21.2072 12.9361 19.4589 13.4948 17.9983 14.5344C16.5377 15.5741 15.4374 17.0431 14.8504 18.7371C14.2634 20.4311 14.2189 22.2659 14.723 23.9864C15.2271 25.7069 16.2549 27.2275 17.6633 28.3368C15.0373 29.3743 12.7794 31.1694 11.1766 33.4938C8.6023 30.6051 7.18222 26.8694 7.1875 23.0001ZM17.25 21.5626C17.25 20.4253 17.5872 19.3136 18.2191 18.3681C18.8509 17.4225 19.7489 16.6855 20.7996 16.2503C21.8502 15.8151 23.0064 15.7012 24.1218 15.9231C25.2372 16.1449 26.2617 16.6926 27.0659 17.4967C27.87 18.3009 28.4177 19.3254 28.6395 20.4408C28.8614 21.5562 28.7475 22.7123 28.3123 23.763C27.8771 24.8137 27.1401 25.7117 26.1945 26.3435C25.2489 26.9754 24.1372 27.3126 23 27.3126C21.4765 27.3078 20.0167 26.7005 18.9394 25.6232C17.8621 24.5459 17.2547 23.0861 17.25 21.5626ZM13.3148 35.4884C14.3551 33.8635 15.7874 32.5265 17.4799 31.6005C19.1724 30.6744 21.0707 30.189 23 30.189C24.9293 30.189 26.8276 30.6744 28.5201 31.6005C30.2126 32.5265 31.6449 33.8635 32.6852 35.4884C29.916 37.6419 26.508 38.8111 23 38.8111C19.492 38.8111 16.084 37.6419 13.3148 35.4884Z" fill="#07003F" />
                            </svg>


                            <li title="{{ Auth::user()->email }}">User123</li>
                            <svg className="transition-transform duration-200 transform "
                                width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5L5.54167 6.83333L11.0833 0.5H0Z"
                                    fill="#B5B3BC" />
                            </svg>
                        </Popover.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Popover.Panel className="absolute z-10 translate-x-8">
                                <ul className="absolute py-4 pl-4 pr-12 mt-4 rounded-xl bg-[#FBFBFC]" >
                                    <a href="/dashboard">
                                        <li
                                            className="mb-3 text-[#07003F] hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                                            Dashboard</li>
                                    </a>
                                    <li
                                        className="text-[#07003F] hover:text-transparent bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text text-start">
                                        <a href="{{ route('logout') }}">
                                            Log out
                                            <form action="{{ route('logout') }}" method="POST" id="logout">
                                            </form>
                                        </a>
                                    </li>
                                </ul>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </ul >
                {/* @endauth
                    @guest */}
                < ul
                    className="hidden lg:flex flex-row items-center space-x-4 sm:justify-center bg-[#FBFBFC]  rounded-full py-3 lg:py-2 px-6  font-poppins font-semibold" >
                    <a href="/dashboard/login"
                        className="px-8 py-2  text-[#07003F] rounded-full hover:text-transparent bg-gradient-to-r hover:from-[#07003F] hover:via-[#3D4BE0] hover:to-[#D0D4F8] hover:bg-clip-text">
                        <li>Log in</li>
                    </a>
                    <a href="/dashboard/register"
                        className="transition duration-300 ease-linear px-8 py-2 text-white  hover:text-[#07003F] rounded-full bg-gradient-to-r hover:from-[#D0D4F8] hover:to-[#3D4BE0] bg-[#07003F]">
                        <li>Register</li>
                    </a>
                </ul >
                {/* @endguest */}
            </nav >
                
            
        </div >
    );
}