'use client'

import Image from "next/image"
import { competitionData } from "../../data/competition"

interface winnersInterface {
    title: string
    winner1: string
    winner1name: string
    winner2: string
    winner2name: string
    winner3: string
    winner3name: string
}

export default function Speakers({ title, winner1, winner1name, winner2, winner2name, winner3, winner3name }: winnersInterface) {
    return (
        <div className="relative overflow-hidden bg-light">
            <div className="relative z-50 text-center">
                <p className="text-center text-lg font-medium text-[#3D4BE0]">
                    Competition Winners
                </p>
                <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
                    {title} Winners
                </h2>
                <p className="text-lg font-medium text-[#07003F] px-12">
                    Congratulations for the winners of {title} competition.
                    <br /> We hope you can be the best in the future. Keep up the good work!
                </p>
            </div>
            <div
                className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 bg-cover lg:bg-contain bg-[center_-4rem] bg-no-repeat px-24 py-16 lg:py-56 relative z-50"
            >

                <div className="flex flex-col items-center justify-center transition duration-300 cursor-pointer lg:-skew-x-12 h-fit w-fit lg:-rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
                    <Image
                        src={`https://drive.google.com/uc?id=${winner2}`}
                        height={680}
                        width={600}
                        alt={title} />
                    <h2 className="text-4xl text-center font-bold text-[#3D4BE0] mt-12">
                        {winner2name}
                    </h2>
                    <p className="text-center text-lg font-medium text-[#3D4BE0]">
                        1st Runner Up
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center cursor-pointer lg:-translate-y-10 h-fit w-fit rounded-xl">
                    <Image
                        src={`https://drive.google.com/uc?id=${winner1}`}
                        height={680}
                        width={600}
                        alt={title} />
                    <h2 className="text-4xl text-center font-bold text-[#3D4BE0] mt-12">
                        {winner1name}
                    </h2>
                    <p className="text-center text-lg font-medium text-[#3D4BE0]">
                        Champion
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center transition duration-300 cursor-pointer lg:skew-x-12 h-fit w-fit lg:rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
                    <Image
                        src={`https://drive.google.com/uc?id=${winner3}`}
                        height={680}
                        width={600}
                        alt={title} />
                    <h2 className="text-4xl text-center font-bold text-[#3D4BE0] mt-12">
                        {winner3name}
                    </h2>
                    <p className="text-center text-lg font-medium text-[#3D4BE0]">
                        2nd Runner Up
                    </p>
                </div>
            </div>
            <div className="absolute animate-blob animation-delay-2 top-96 lg:top-56 lg:left-[36rem] w-[30rem] h-[30rem] bg-gradient-to-l from-[#07003F] via-[#5461E4] to-[#838CEB] rounded-full blur-3xl"></div>
            <div className="absolute animate-blob top-24 lg:top-56 left-1 w-[30rem] h-[30rem] bg-[#A5F4DF] rounded-full blur-3xl"></div>
            <div className="absolute animate-blob animation-delay-4 bottom-24 lg:top-56 right-1  w-[30rem] h-[30rem] bg-[#B1B7F3] rounded-full blur-3xl"></div>
        </div>
    )
}
