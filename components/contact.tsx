'use client'

import React from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Socials from './socials'

const landingData = [
    {
        title: 'What they say about us',
        subtitle: `To convince you who are still confused to decide, let's hear what they say about becoming a part of Petrolida's journey`,
        src: '/contact/placeholder.png',
        winnerName: 'ABDUL QUDDUS',
        winnerPlace: '3rd winner of fracturing fluid design competition in petrolida 2022',
    },
    {
        title: 'Test Nomor 2',
        subtitle: `To convince you who are still confused to decide, let's hear what they say about becoming a part of Petrolida's journey`,
        src: '/contact/placeholder.png',
        winnerName: 'ABDUL QUDDUS',
        winnerPlace: '3rd winner of fracturing fluid design competition in petrolida 2022',
    }
]



export default function Contact({ type, picName, compName, line }: { type: String, picName?: any, compName?: String, line?: any }) {
    const carouselRef = React.useRef<Splide>(null)

    const handleThumbs = (id: string) => {
        if (carouselRef.current) {
            carouselRef.current.go(id)
        }
    }

    if (type === 'competition') {
        return (
            <>

                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EDEEF3] bg-[right_-20rem_top_-12rem]  bg-no-repeat py-4" style={
                    {
                        backgroundImage: "url('/contact/bg.png')",
                    }
                }>
                    <div className="px-4 py-8 lg:px-24 lg:py-36">
                        <h1 className="text-4xl font-bold text-[#07003F] pb-4 text-left">You still have a question?</h1>
                        <p className="text-lg font-semibold text-[#605C84] text-left ">Explore our FAQ above, if you can't find the answer <br /> you're looking for, please contact us.</p>
                    </div>
                    <div className="flex items-center justify-center" >
                        <a target={'_blank'} href={`https://line.me/ti/p/${line}`} className="transition duration-300 ease-linear hover:-translate-y-1">
                            <div className="bg-[#FBFBFC] rounded-[30px] px-4 py-4 lg:p-4 lg:pl-8 lg:py-6 flex flex-row  space-x-4">
                                <div className="text-center lg:text-right lg:col-span-2">
                                    <p className="text-[#07003F] text-sm lg:text-lg text-end  font-bold pb-2">
                                        {picName}
                                        <br />
                                        <span className='font-semibold'>{compName} Comp </span>
                                        <span className="font-bold ">PIC</span>
                                    </p>
                                    <p className="text-[#07003F] text-sm lg:text-lg font-bold hover:underline">
                                        id line : krishnananda
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src="/icon/line-app.svg" alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    } else if (type === 'landing') {
        return (
            <div className=" bg-[#EDEEF3] bg-[right_-20rem_top_-6rem]  bg-no-repeat" style={
                {
                    backgroundImage: "url('/contact/bg.png')",
                }
            }>
                <Splide
                    aria-label="Competition Prize"
                    ref={carouselRef}
                    options={{
                        perPage: 1,
                        arrows: false,
                        pagination: false,
                        type: 'loop',
                    }}
                >
                    {landingData.map(({ title, subtitle, src, winnerName, winnerPlace }) => (
                        <SplideSlide className='grid grid-cols-1 lg:grid-cols-2 '>
                            <div className="relative px-4 pt-8 pb-4 lg:px-24 lg:py-48">
                                <h1 className="text-4xl font-bold text-[#07003F] pb-4 text-left">{title}</h1>
                                <p className="text-lg font-semibold text-[#605C84] text-left">{subtitle}</p>
                                <div className="absolute hidden lg:flex justify-center text-white gap-x-4 bottom-[55px]">
                                    <button onClick={() => handleThumbs('<')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 fill-[#07003F]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleThumbs('>')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 fill-[#07003F]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex lg:items-center lg:justify-center" >
                                <div className="transition duration-300 ease-linear hover:-translate-y-1">
                                    <div className="relative grid grid-cols-1 px-4 pb-4 overflow-hidden lg:px-0 lg:grid-cols-2 lg:pr-12 lg:pb-0 lg:translate-y-8">
                                        <div className="flex flex-col space-y-1 lg:justify-end lg:items-end text-start lg:text-end">
                                            <div className='w-6 h-6 bg-[#FBFBFC]'></div>
                                            <h6 className='font-semibold text-[#FBFBFC] text-2xl'>{winnerName}</h6>
                                            <p className='font-medium text-[#FBFBFC]'>{winnerPlace}</p>
                                        </div>
                                        <div className="z-10 items-end justify-center hidden -translate-x-2 lg:flex">
                                            <Image
                                                src={src}
                                                width={350}
                                                height={340}
                                                alt="competition"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-start px-4 text-white bottom-6 lg:hidden gap-x-4">
                                    <button onClick={() => handleThumbs('<')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 fill-[#07003F]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleThumbs('>')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 fill-[#07003F]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        );
    } else {
        return (
            <>
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EDEEF3] bg-[right_-20rem_top_-12rem]  bg-no-repeat pb-12 lg:py-4" style={
                    {
                        backgroundImage: "url('/contact/bg.png')",
                    }
                }>
                    <div className="px-10 py-8 lg:px-24 lg:py-36">
                        <h1 className="text-4xl font-bold text-[#07003F] pb-4 text-left">Follow Us</h1>
                        <p className="text-lg font-semibold text-[#605C84] text-left">Keep up with us through our social media, let’s connect! Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry</p>
                    </div>
                    <Socials width={60} height={60}/>
                </div>
            </>
        );
    }
};
