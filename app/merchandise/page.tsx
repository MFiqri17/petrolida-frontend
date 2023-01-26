'use client'

import Image from "next/image"
import headerImg from "../../public/merchandise/header.png"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import React from "react"
import '@splidejs/react-splide/css'

const bundleData = [
    {
        title: "Bundle 1",
        src: "/merchandise/bundle-1.png",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform"
    },
    {
        title: "Bundle 2",
        src: "/merchandise/bundle-2.png",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform"
    },
    {
        title: "Bundle 3",
        src: "/merchandise/bundle-3.png",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform"
    },
    {
        title: "Bundle 4",
        src: "/merchandise/bundle-4.png",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform"
    },
]

const tshirtData = [
    {
        title: "T-Shirt 1",
        src: "/merchandise/tshirt1.png",
    },
    {
        title: "T-Shirt 2",
        src: "/merchandise/tshirt2.png",
    },
    {
        title: "T-Shirt 3",
        src: "/merchandise/tshirt3.png",
    },
    {
        title: "T-Shirt 4",
        src: "/merchandise/tshirt4.png",
    },
]

const miscData = [
    {
        title: "Wristband",
        src: "/merchandise/wristband.png",
        price: "15",
    },
    {
        title: "hand-fan",
        src: "/merchandise/hand-fan.png",
        price: "10",
    },
    {
        title: "totebag",
        src: "/merchandise/totebag.png",
        price: "50",
    },
    {
        title: "stickers",
        src: "/merchandise/stickers.png",
        price: "10",
    },
]

export default function merchandisePage() {

    const carouselRef = React.useRef<Splide>(null)


    const handleThumbs = (id: string) => {
        if (carouselRef.current) {
            carouselRef.current.go(id)
        }
    }


    return (
        <main className="bg-[#07003F]">
            <h1 className="pt-48 font-bold text-center uppercase text-whiteb text-5xl lg:text-[10rem]">Merchandise</h1>
            <div className="relative flex flex-col items-center justify-center lg:mx-40 group " id="header">
                <p className="relative z-10 text-2xl font-medium text-center text-whiteb">Get our exclusive merchandise!</p>
                <div className="bg-[#8EF1FF] w-96 bg-opacity-70 blur-3xl h-24 relative"></div>
                <div className="bg-[#8EF1FF] w-[35vw] h-[4px] animate-pulse blur-[1.5px] relative rounded-full group-hover:animate-none"></div>
                <div className="bg-white bg-opacity-0 rounded-3xl w-[75vw] h-80 relative blur-xl lg:block hidden"></div>
                <Image
                    src={headerImg}
                    alt="bg"
                    width={1200}
                    height={275}
                    className="absolute -bottom-24 lg:bottom-5 animation-delay-2 opacity-90 blur-md animate-pulse group-hover:animate-none"
                />
            </div>

            <div className="relative mt-56 lg:mt-0" id="bundle">
                <Splide
                    aria-label="Competition Prize"
                    ref={carouselRef}
                    options={{
                        perPage: 1,
                        arrows: false,
                        pagination: false,
                        autoplay: true,
                        speed: 1500,
                        drag: true,
                        pause: false,
                        type: 'loop',
                        pauseOnHover: false,
                    }}
                    className="relative z-50 -translate-y-8"
                >
                    {bundleData.map(
                        ({ title, src, link }) => (
                            <SplideSlide
                                key={"src"}
                                className="relative z-50 flex flex-col items-center justify-center pb-24"
                            >
                                <h2 className="absolute text-transparent uppercase bg-clip-text text-center font-bold text-2xl lg:text-6xl top-0 z-50 pb-8 lg:pb-0  bg-gradient-to-b from-[#B7F6FF] to-[#EDEEF3]">{title}</h2>
                                <div className="relative flex items-center lg:pt-12">
                                    <Image
                                        src={src}
                                        alt={src}
                                        width={750}
                                        height={750}
                                        className="relative z-10 transition duration-300 hover:scale-105"
                                    />
                                    <button onClick={() => handleThumbs('<')} className="absolute z-50 hidden lg:block lg:-translate-x-24 lg:top-64">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-10 w-10 fill-[#ffF]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleThumbs('>')} className="absolute right-0 z-50 hidden lg:block lg:translate-x-24 lg:top-64">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-10 w-10 fill-[#ffF]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <a href={link} target={'_blank'} className="rounded-full bg-[#E4FCFF] font-semibold translate-y-12 hover:translate-y-10 transition duration-300 flex px-4 py-4 divide-x-2 divide-primary "> <span className="pr-3">Buy now!</span> <span className="pl-3">149 K</span> </a>
                                <div className="flex justify-center text-white translate-y-16 lg:hidden">
                                    <button onClick={() => handleThumbs('<')} className="absolute z-50 block -translate-x-8 lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-7 w-7 fill-[#ffF]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button onClick={() => handleThumbs('>')} className="absolute z-50 block translate-x-8 lg:hidden ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-7 w-7 fill-[#ffF]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                            </SplideSlide>
                        ))}
                </Splide>
                <div className="absolute animate-blob top-24 lg:top-56 bg-opacity-60 left-24 w-[30rem] h-[30rem] bg-[#B1B7F3] rounded-full blur-3xl"></div>
                <div className="absolute animate-blob animation-delay-2 top-96 bg-opacity-60 lg:top-56 lg:left-[36rem] w-[30rem] h-[30rem] bg-gradient-to-l from-[#07003F] via-[#5461E4] to-[#838CEB] rounded-full blur-3xl"></div>
                <div className="absolute animate-blob animation-delay-4 bg-opacity-60 bottom-24 lg:top-56 right-24  w-[30rem] h-[30rem] bg-[#8EF1FF] rounded-full blur-3xl"></div>
            </div>


            <div className="py-8" id="tshirt">
                <h2 className="relative z-50 text-2xl font-bold text-center uppercase -translate-y-12 lg:text-6xl text-whiteb">T-Shirt</h2>
                <div className="grid grid-cols-2 gap-2 lg:mx-32">
                    {tshirtData.map(({ title, src }) => (
                        <div className="relative">
                            <div className="absolute animate-blob top-24 lg:top-56 left-24 w-24 h-24 bg-[#B1B7F3] rounded-full blur-3xl"></div>
                            <div className="absolute animate-blob animation-delay-2 top-96 lg:top-56 lg:left-[36rem] w-24 h-24 bg-gradient-to-l from-[#07003F] via-[#5461E4] to-[#838CEB] rounded-full blur-3xl"></div>
                            <div className="absolute animate-blob animation-delay-4 bottom-24 lg:top-56 right-24  w-24 h-24 bg-[#8EF1FF] rounded-full blur-3xl"></div>
                            <Image
                                src={src}
                                alt={title}
                                width={550}
                                height={550}
                                className="relative z-50 transition duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform'} target={'_blank'} className=" text-center  relative rounded-full bg-[#E4FCFF] font-semibold hover:-translate-y-2 transition duration-300 px-4 py-4 divide-x-2 divide-primary "> <span className="pr-3">Buy now!</span> <span className="pl-3">90 K</span> </a>
                </div>
            </div>

            <div className="py-8" id="misc">

                <div className="grid gap-2 lg:mx-32 lg:grid-cols-2 place-items-center">
                    {miscData.map(({ title, src }) => (
                        <div className="relative py-8">
                            <h2 className="relative text-2xl font-bold text-center uppercase lg:text-5xl text-whiteb">{title}</h2>
                            <Image
                                src={src}
                                alt={title}
                                width={450}
                                height={450}
                                className="py-8 transition duration-300 hover:scale-110"
                            />
                            <div className="flex flex-col items-center justify-center">
                                <a href={'https://docs.google.com/forms/d/e/1FAIpQLSc2KdbpJ7DexjuFttOtohIcrCcGR-0xHs1dcvoFm_U9tQRFxQ/viewform'} target={'_blank'} className=" text-center  relative rounded-full bg-[#E4FCFF] font-semibold hover:-translate-y-2 transition duration-300 px-4 py-4 divide-x-2 divide-primary "> <span className="pr-3">Buy now!</span> <span className="pl-3">90 K</span> </a>
                            </div>
                            <div className="absolute animate-blob top-24 lg:top-56 left-24 w-24 h-24 bg-[#B1B7F3] rounded-full blur-3xl"></div>
                            <div className="absolute animate-blob animation-delay-2 top-96 lg:top-56 lg:left-[36rem] w-24 h-24 bg-gradient-to-l from-[#07003F] via-[#5461E4] to-[#838CEB] rounded-full blur-3xl"></div>
                            <div className="absolute animate-blob animation-delay-4 bottom-24 lg:top-56 right-24  w-24 h-24 bg-[#8EF1FF] rounded-full blur-3xl"></div>
                        </div>
                    ))}
                </div>

            </div>
        </main >
    )
};
