'use client'

export default function Timeline() {
    const timeline = [
        {
            date: '30 Mar',
            component: <>Closing <br /> Registration</>
        },
        {
            date: '31 Mar',
            component: <>Case <br /> Distribution</>
        },
        {
            date: '1 Apr',
            component: <>Coaching for<br /> Delegates</>
        },
        {
            date: '23 Apr',
            component: <>Preliminary Round<br /> Submission</>
        },
        {
            date: '27 Apr',
            component: <>Coaching for<br /> Delegation</>
        },
        {
            date: '26 May',
            component: <>Coaching for<br /> Delegation</>
        },
        {
            date: '25 May',
            component: <>Coaching for<br /> Delegation</>
        },
    ];

    return (
        <>
            <div className="py-24 bg-[#EDEEF3]">
                <h1 className="mx-12 mb-24 pb-4 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text font-poppins lg:text-7xl lg:mx-0">
                    Competition Stage
                </h1>
                <div className="container flex justify-center mx-auto">
                    <ol className="items-center h-56 max-w-screen-xl mx-12 overflow-x-auto md:flex">
                        <li className="relative mb-6 sm:mb-0">
                            <time className="block px-12 mb-2 text-base font-medium text-black font-poppins lg:-translate-y-4">27 Feb</time>
                            <div className="flex items-center justify-center animate-pulse">
                                <div
                                    className="z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#3D4BE0] ring-offset-8 ring-8 ring-[#D0D4F8] outline outline-8 outline-[#838CEB] shrink-0">
                                </div>
                                <div className="hidden sm:flex w-1/2 absolute right-0 h-2 bg-[#FBFBFC]">
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">Open <br /> Registration
                                </h3>
                            </div>
                        </li>
                        {/* Repeat the same for each item */}
                        {timeline.map((item) => (
                            <li className="relative mb-6 sm:mb-0">
                                <time className="block px-8 mb-2 text-base font-medium text-center text-black lg:-translate-y-4 font-poppins">{item.date}</time>
                                <div className="relative flex items-center">
                                    <div
                                        className="z-10 flex items-center justify-center w-6 h-6 mx-auto rounded-full bg-[#ffffff] ring-inset ring-4 ring-[#838CEB] outline outline-4 outline-[#D0D4F8]">
                                    </div>
                                    <div className="hidden sm:flex absolute w-full h-2 bg-[#FBFBFC]"></div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">{item.component}</h3>
                                </div>
                            </li>
                        ))}
                        <li className="relative mb-6 sm:mb-0">
                            <time className="block px-8 mb-2 text-base font-medium text-black -translate-y-4 font-poppins">26 May</time>
                            <div className="relative flex items-center">
                                <div
                                    className="z-10 flex items-center justify-center w-6 h-6 mx-auto rounded-full bg-gradient-to-r bg-[#EDEEF3] ring-offset-8 ring-8 ring-[#D0D4F8] outline outline-8 outline-[#838CEB]">
                                </div>
                                <div className="hidden sm:flex absolute w-1/2 left-0 h-2 bg-[#FBFBFC]"></div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">Finalist <br />Announcement</h3>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>
        </>

    )
}