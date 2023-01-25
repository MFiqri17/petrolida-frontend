'use client'

export default function Timeline({ firstDate, firstEvent, timeline, lastDate, lastEvent }: { firstDate: any, firstEvent: any, timeline: { date: any, component: any }[], lastDate: any, lastEvent: any }) {

    var today = new Date();
    var todayDate = today.getDate();
    var firstdate = new Date(`${firstDate}, 2023`);
    return (
        <>
            <div className="py-24 bg-[#EDEEF3]">
                <h1 className="mx-12 mb-24 pb-4 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text font-poppins lg:text-7xl lg:mx-0">
                    Competition Stage
                </h1>
                <div className="container flex justify-center mx-auto">
                    <ol className="flex items-center h-56 max-w-screen-xl mx-12 overflow-x-auto snap-x">
                        <li className="relative mb-6 sm:mb-0 snap-center">
                            <time className="block w-48 mx-auto mb-2 text-base font-semibold text-center text-black -translate-y-4 font-poppins">{firstDate}</time>
                            <div className={`flex items-center justify-center ${todayDate == firstdate.getDate() ? 'animate-pulse' : ''}`}>
                                <div
                                    className={`z-10 flex items-center justify-center w-6 h-6 rounded-full ${todayDate == firstdate.getDate() ? 'bg-[#3D4BE0] ring-offset-8 ring-8 ring-[#D0D4F8] outline outline-8 outline-[#838CEB] shrink-0' : 'bg-[#ffffff] ring-inset ring-[7px] ring-[#838CEB] outline outline-[7px] outline-[#D0D4F8]'
                                        }  `}>
                                </div>
                                <div className="flex w-1/2 absolute right-0 h-2 bg-[#FBFBFC]">
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">{firstEvent}
                                </h3>
                            </div>
                        </li>
                        {/* Repeat the same for each item */}
                        {timeline.map((item) => (
                            <li key={timeline.indexOf(item)} className="relative mb-6 sm:mb-0 snap-center">
                                <time className="block w-48 mb-2 text-base font-semibold text-center text-black -translate-y-4 font-poppins">{item.date}</time>
                                {/* <div className={`relative flex items-center ${today === timeDate ? 'animate-pulse' : ''}`}> */}
                                <div className={`relative flex items-center ${todayDate == new Date(`${item.date}, 2023`).getDate() ? 'animate-pulse' : ''} `}>
                                    <div
                                        className={`z-10 flex items-center justify-center w-6 h-6 mx-auto rounded-full ${todayDate == new Date(`${item.date}, 2023`).getDate() ? 'bg-[#3D4BE0] ring-offset-8 ring-8 ring-[#D0D4F8] outline outline-8 outline-[#838CEB] shrink-0' : 'bg-[#ffffff] ring-inset ring-[7px] ring-[#838CEB] outline outline-[7px] outline-[#D0D4F8]'
                                            } `}>
                                    </div>
                                    <div className="flex absolute w-full h-2 bg-[#FBFBFC]"></div>
                                    <span></span>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">{item.component}</h3>
                                </div>
                            </li>
                        ))}
                        <li className="relative mb-6 sm:mb-0 snap-center">
                            <time className="block w-48 mx-auto mb-2 text-base font-semibold text-center text-black -translate-y-4 font-poppins">{lastDate}</time>
                            <div className="relative flex items-center">
                                <div
                                    className="z-10 flex items-center justify-center w-6 h-6 mx-auto rounded-full bg-gradient-to-r bg-[#ffffff] ring-inset ring-[7px] ring-[#838CEB] outline outline-[7px] outline-[#D0D4F8]">
                                </div>
                                <div className="flex absolute w-1/2 left-0 h-2 bg-[#FBFBFC]"></div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-base font-semibold text-center text-black translate-y-4 font-poppins">{lastEvent}</h3>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>
        </>

    )
}