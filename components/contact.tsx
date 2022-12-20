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
    },
    {
        title: 'Test Nomor 2',
        subtitle: `To convince you who are still confused to decide, let's hear what they say about becoming a part of Petrolida's journey`,
        src: '/contact/placeholder.png',
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
                    <div className="px-10 py-8 lg:px-24 lg:py-36">
                        <h1 className="text-4xl font-bold text-[#07003F] pb-4 lg:text-left text-center">You still have a question?</h1>
                        <p className="text-lg font-semibold text-[#605C84] lg:text-left text-center">Explore our FAQ above, if you can't find the answer <br /> you're looking for, please contact us.</p>
                    </div>
                    <div className="flex items-center justify-center" >
                        <a target={'_blank'} href={`https://line.me/ti/p/${line}`} className="transition duration-300 ease-linear hover:-translate-y-1">
                            <div className="bg-[#FBFBFC] rounded-[30px] p-4 lg:pl-8 lg:py-6 grid lg:grid-cols-3 lg:gap-0 gap-4">
                                <div className="text-center lg:text-right lg:col-span-2">
                                    <p className="text-[#07003F] text-sm lg:text-lg font-medium pb-2">
                                        {picName}
                                        <br />
                                        {compName} Comp <span className="font-bold ">PIC</span>
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
                    {landingData.map(({ title, subtitle, src }) => (
                        <SplideSlide className='grid grid-cols-1 lg:grid-cols-2 '>
                            <div className="relative px-10 py-8 lg:px-24 lg:py-48">
                                <h1 className="text-4xl font-bold text-[#07003F] pb-4 lg:text-left text-center">{title}</h1>
                                <p className="text-lg font-semibold text-[#605C84] lg:text-left text-center">{subtitle}</p>
                                <div className="absolute flex justify-center text-white gap-x-4 bottom-[55px]">
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
                            <div className="flex items-center justify-center" >
                                <div className="transition duration-300 ease-linear hover:-translate-y-1">
                                    <div className="relative grid grid-cols-2 pr-12 overflow-hidden translate-y-8">
                                        <div className="flex flex-col items-end justify-end space-y-1 text-end">
                                            <div className='w-6 h-6 bg-[#FBFBFC]'></div>
                                            <h6 className='font-semibold text-[#FBFBFC] text-2xl'>ABDUL QUDDUS</h6>
                                            <p className='font-medium text-[#FBFBFC]'>3rd winner of fracturing gluid design comopetition in petrolida 2022</p>
                                        </div>
                                        <div className="z-10 flex items-end justify-center -translate-x-2">
                                            <Image
                                                src={src}
                                                width={350}
                                                height={340}
                                                alt="competition"
                                            />
                                        </div>
                                    </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EDEEF3] bg-[right_-20rem_top_-12rem]  bg-no-repeat py-4" style={
                    {
                        backgroundImage: "url('/contact/bg.png')",
                    }
                }>
                    <div className="px-10 py-8 lg:px-24 lg:py-36">
                        <h1 className="text-4xl font-bold text-[#07003F] pb-4 lg:text-left text-center">Follow Us</h1>
                        <p className="text-lg font-semibold text-[#605C84] lg:text-left text-center">Keep up with us through our social media, let’s connect! Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the future of our energy industry</p>
                    </div>
                    <Socials width={60} height={60} />
                </div>
            </>
        );
    }
};
