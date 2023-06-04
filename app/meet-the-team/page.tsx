'use client'
import Image from "next/image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

const executiveData = [
    {
        id: '1fQOqUn-f-ijNgMxEwWnBPOHbuuKzzli8',
        name: 'Project Officer',
    },
    {
        id: '1MoaREprW4nCwNBPmRazukipgq1MY-ouh',
        name: 'Vice Project Officer',
    },
    {
        id: '1RXZFockuBxlvuhZGehiybYRssWbgLJR1',
        name: 'Secretary',
    },
    {
        id: '1CVl7IRm5qagG9Dz6mAfw8IleGOjvMFT5',
        name: 'Treasurer',
    }
]

const adminData = [
    {
        name: 'admin-2',
        type: 'image',
        id: '152IgnY3SxQpZYYxZgybxISTWuwVGAeIJ',
    },
    {
        name: 'admin-1',
        type: 'image',
        id: '1acduiQcuepSWirqG4-Q7zXN7EKjr3gk3',
    },
    {
        name: 'admin-coor',
        type: 'video',
        id: '1Nm-Gx1mguiBECDzmrZ7MKB2eketVN0Fa',
    },
]

const financeData = [

    {
        name: 'merch-1',
        type: 'video',
        id: '1MOqOQYZhsVG5kBvhx6GtlOHRYc0EzQX2',
    },
    {
        name: 'sponsor-1',
        type: 'video',
        id: '1zM9HqpQZCU6zNf32pmPCDHfZPIEGvqp9',
    },
    {
        name: 'finance-coor',
        type: 'video',
        id: '1dBIRPMrANlhHJjzmgGvhg9oPcMEtTnRB',
    },
    {
        name: 'merch-2',
        type: 'image',
        id: '1xmdKOvoArBin7LvYNby2eBlRPcKxqcqS',
    },

    {
        name: 'sponsor-2',
        type: 'image',
        id: '14OA274Zxz4iQYqrcUUzHcy76vAb5UjEa',
    },
]

const prData = [

    {
        name: 'medpro-1',
        type: 'video',
        id: '1zWViRflXTF35gZsD2HiWjY6bloAPwhO6',
    },
    {
        name: 'medpro-2',
        type: 'image',
        id: '1Llqf_grt7sGsPf7VM9h-vAim4T1l7UKe',
    },
    {
        name: 'webdev-1',
        type: 'video',
        id: '1AglgDgCRci5v3l07h-dEFk87n0dOAIaw',
    },
    {
        name: 'webdev-2',
        type: 'image',
        id: '1LoLWqgGz4_VSFZfkwqo0ygEjGdyjPApj',
    },
    {
        name: 'credes-1',
        type: 'video',
        id: '1AjU4k8-fgA4CIXd84WibadH5ZHqxK5BQ',
    },
    {
        name: 'credes-2',
        type: 'image',
        id: '1Lb6_g9RUlLeycbbgwbu21RY_NuxIAz6h',
    },
    {
        name: 'credes-3',
        type: 'image',
        id: '1NEGwDiXitnZHPZYpTU8TRLgPI6exunTb',
    },
    {
        name: 'external-relation-1',
        type: 'video',
        id: '1cHtSTvccaaM3Q-vE6KzRtx1CuHg5t9n7',
    },
    {
        name: 'external-relation-2',
        type: 'image',
        id: '1Lc1AiM1Bc0og69qoYlzJ7vfsPD6XSgjb',
    },
    {
        name: 'marketing-1',
        type: 'video',
        id: '13hWASMZe0xqIjlEFL4WXnQVTDoxZcB3Z',
    },
    {
        name: 'marketing-2',
        type: 'image',
        id: '1Lkslkz-xNplhM1GmxCj4ltAn8MnBDCeA',
    },
    {
        name: 'coor-pr',
        type: 'video',
        id: '1rEM7MAis7Cwf2ouA7MT-2lkgaBpxWjLO',
    },
]
const oprData = [

    {
        name: 'opr-1',
        type: 'video',
        id: '13Cd_3t7zI5oB351jl_xtCR4T0LfWGwdp',
    },
    {
        name: 'opr-2',
        type: 'video',
        id: '1jW1ZEXglXg9pMSJJqYtYBcKHrzE142D1',
    },
    {
        name: 'opr-3',
        type: 'image',
        id: '1SmW3dCNqBL7blqF9DoxXWFTtvHKuXsm7',
    },
    {
        name: 'opr-4',
        type: 'image',
        id: '1lDboUK9FqKWES71SR2Ehxtzfn6grWyBg',
    },
    {
        name: 'opr-5',
        type: 'image',
        id: '1GwCnfD0V9RRZlDhn4XeNh1ZlPlJQZ97z',
    },
    {
        name: 'opr-6',
        type: 'image',
        id: '19GVKMHH3oJVKNYLrh4_BGlnMUEQUHH2L',
    },
    {
        name: 'opr-7',
        type: 'image',
        id: '1ObirxpN7NhUSAkVNR_mbkw4b0zCoui-z',
    },
]
const compeData = [

    {
        name: 'compe-1',
        type: 'video',
        id: '1reakbZ5DPDeUnYmabGYfiDp4kmzQN90b',
    },
    {
        name: 'compe-2',
        type: 'video',
        id: '18Pl-HBjxz66LFXAsOYVEEs8gUGnmQgk-',
    },
    {
        name: 'compe-3',
        type: 'image',
        id: '16FJyGJmdKxh1yX3TftgQ2tTINxZEVuqD',
    },
    {
        name: 'compe-4',
        type: 'image',
        id: '1bDvEE5QTIgaHh4uQrFn6dpgoNfHXyS-8',
    },
    {
        name: 'compe-5',
        type: 'image',
        id: '1-zlxWIDg62IiCldb8cVL4eHObodnDos_',
    },
    {
        name: 'compe-6',
        type: 'image',
        id: '1LAjA2gVarBQKALuGA_ddQJa0UsMfO106',
    },
    {
        name: 'compe-7',
        type: 'image',
        id: '1xh0Pf5yzEZM10O3oOBHghaqrO93aHtPo',
    },
    {
        name: 'compe-8',
        type: 'image',
        id: '16QZ-4oa42ZBYe63g6rZYvH9Z5nEYCb0t',
    },
]
const noncompeData = [

    {
        name: 'noncomp-1',
        type: 'video',
        id: '1k5BZuxiRBwajpjBPsxmYFTFovQcE0XUO',
    },
    {
        name: 'noncomp-2',
        type: 'video',
        id: '19p3QnY2mvh24HCnbzb8J1aewBJMDxHK9',
    },
    {
        name: 'noncomp-3',
        type: 'video',
        id: '13vKz1kcd6bglGD_LJ5L1YleJh_TVYdEE',
    },
    {
        name: 'noncomp-4',
        type: 'video',
        id: '1UERyfCZIgkQxaGTLCiSUNw_Sc2GReEeJ',
    },
    {
        name: 'noncomp-5',
        type: 'image',
        id: '1SbRz89EmTgZkn4190Q2kARKExx4MZKnC',
    },
    {
        name: 'noncomp-6',
        type: 'image',
        id: '1U5zeaKJzJSHgYAIlSXQ9Ey4Btfi-cIKs',
    },
    {
        name: 'noncomp-7',
        type: 'image',
        id: '1YNbX2MN4GXNN3pD1NR3x5EYoc4ZUoPOw',
    },
    {
        name: 'noncomp-8',
        type: 'image',
        id: '1FMFXHDQtJ8FyD-JQBxmLpfvhJpxDZfmC',
    },
    {
        name: 'noncomp-9',
        type: 'image',
        id: '1PDKnXq2q3StjyOZ_2c1FnF-wU-QEaKgI',
    },
]

export default function MeetTheTeamPage() {
    return (
        <ParallaxProvider>
            <div className="relative flex items-center justify-center h-screen">
                <div className="relative">
                    <Image
                        src={'/team/header.png'}
                        alt="meet-the-team"
                        className="relative z-10 px-8 lg:px-0"
                        width={850}
                        height={600}
                    />
                </div>
                <Image
                    src={'/team/triangle-right.png'}
                    width={500}
                    height={500}
                    alt="triangle-right"
                    className={'absolute right-0 lg:bottom-0 w-48 lg:w-[500px]'}
                />
                <Image
                    src={'/team/triangle-left.png'}
                    width={500}
                    height={500}
                    alt="triangle-left"
                    className={'absolute left-0 lg:top-0 lg:w-[500px] w-48'}
                />
                <div className="absolute animate-blob lg:top-0 bg-opacity-60 left-0 w-[14rem] h-[14rem] lg:w-[42rem] lg:h-[42rem] bg-[#5484FF] rounded-full blur-3xl"></div>
                <div className="absolute animate-blob animation-delay-4 bg-opacity-60 lg:top-56 right-0 lg:right-24  lg:w-[42rem] w-[16rem] h-[16rem] lg:h-[42rem] bg-[#B1B7F3] rounded-full blur-3xl"></div>
            </div>

            <div className="sticky top-0 flex flex-col items-center justify-start">
                <div className="sticky w-full overflow-x-hidden top-0 h-[200vh]">
                    <div className="flex flex-col items-center justify-center pt-24">
                        <p className="text-2xl text-center text-secondary">
                            The
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Executive
                        </h3>
                    </div>
                    <Parallax
                        translateX={['60vw', '1vw']}
                        startScroll={700}
                        endScroll={1400}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex items-center justify-center gap-12 pt-12 min-w-max">
                            {executiveData.map((item: any) => (
                                <div key={item.id} className="rounded-2xl">
                                    <video autoPlay preload="auto" loop muted controls className=' rounded-2xl w-[300px] h-[380px]hover:scale-105 transition duration-300'>
                                        <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                    </video>
                                </div>
                            ))}
                        </div>
                    </Parallax>
                </div>
                <Image
                    src={'/team/triangle-left2.png'}
                    width={500}
                    height={500}
                    alt="triangle-left"
                    className={'absolute -z-[10] left-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 left-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#A5F4DF] rounded-full blur-3xl -z-[10]"></div>
            </div>

            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[200vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Administration
                        </h3>
                    </div>
                    <Parallax
                        translateX={['-15vw', '20vw']}
                        startScroll={2100}
                        endScroll={2800}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {adminData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>

                </div>
                <Image
                    src={'/team/triangle-right2.png'}
                    width={500}
                    height={500}
                    alt="triangle-right"
                    className={'absolute -z-[10] right-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 right-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#5484FF] rounded-full blur-3xl -z-[10]"></div>
            </div>

            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb h-full shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[240vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Finance
                        </h3>
                    </div>
                    <Parallax
                        translateX={['50vw', '-50vw']}
                        startScroll={3500}
                        endScroll={4900}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {financeData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>
                </div>
                <Image
                    src={'/team/triangle-left3.png'}
                    width={500}
                    height={500}
                    alt="triangle-left"
                    className={'absolute -z-[10] left-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 left-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#B1B7F3] rounded-full blur-3xl -z-[10]"></div>
            </div>
            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb h-full shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[390vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Public Relation
                        </h3>
                    </div>
                    <Parallax
                        translateX={['-180vw', '60vw']}
                        startScroll={5600}
                        endScroll={8000}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {prData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>

                </div>
                <Image
                    src={'/team/triangle-right3.png'}
                    width={500}
                    height={500}
                    alt="triangle-right"
                    className={'absolute -z-[10] right-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 right-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#A5F4DF] rounded-full blur-3xl -z-[10]"></div>
            </div>
            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb h-full shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[340vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Operational
                        </h3>
                    </div>
                    <Parallax
                        translateX={['20vw', '-100vw']}
                        startScroll={8800}
                        endScroll={10400}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {oprData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>

                </div>
                <Image
                    src={'/team/triangle-left3.png'}
                    width={500}
                    height={500}
                    alt="triangle-left"
                    className={'absolute -z-[10] left-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 left-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#B1B7F3] rounded-full blur-3xl -z-[10]"></div>
            </div>
            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb h-full shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[320vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Competition
                        </h3>
                    </div>
                    <Parallax
                        translateX={['-100vw', '60vw']}
                        startScroll={11200}
                        endScroll={12900}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {compeData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>

                </div>
                <Image
                    src={'/team/triangle-right2.png'}
                    width={500}
                    height={500}
                    alt="triangle-right"
                    className={'absolute -z-[10] right-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 right-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#5484FF] rounded-full blur-3xl -z-[10]"></div>
            </div>
            <div className="sticky top-0 w-full pb-24 overflow-x-hidden bg-whiteb h-full shadow-[0_35px_70px_15px_rgba(0,0,0,0.3)]">
                <div className="sticky top-0 w-full overflow-x-hidden h-[280vh]">
                    <div className="flex flex-col items-center justify-center pt-24 ">
                        <p className="text-2xl text-center text-secondary">
                            Department of
                        </p>
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Non Competition
                        </h3>
                    </div>
                    <Parallax
                        translateX={['60vw', '-140vw']}
                        startScroll={13200}
                        endScroll={14900}
                        shouldAlwaysCompleteAnimation={true}
                    >
                        <div className="flex gap-12 py-12 min-w-max">
                            {noncompeData.map((item: any) => (
                                <div className="rounded-2xl">
                                    {item.type === 'video' ?
                                        <video autoPlay preload="auto" loop muted controls style={{ width: '300px', height: '380px' }} className='transition duration-300 rounded-2xl hover:scale-125'>
                                            <source src={`https://drive.google.com/uc?id=${item.id}`} />
                                        </video> :
                                        <img
                                            alt={item.name}
                                            src={`https://drive.google.com/uc?id=${item.id}`}
                                            width={300}
                                            height={380}
                                            className='transition duration-300 rounded-2xl hover:scale-125'
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </Parallax>

                </div>
                <Image
                    src={'/team/triangle-left3.png'}
                    width={500}
                    height={500}
                    alt="triangle-left"
                    className={'absolute -z-[10] left-0 lg:top-0 w-48 lg:w-[500px]'}
                />
                <div className="absolute animate-blob lg:top-24 bg-opacity-60 left-12 w-[8rem] h-[8rem] lg:w-[24rem] lg:h-[24rem] bg-[#B1B7F3] rounded-full blur-3xl -z-[10]"></div>
            </div>

            <div className="sticky top-0 h-[240vh]">

            </div>
        </ParallaxProvider >
    )
};
