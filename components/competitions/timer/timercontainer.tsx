import * as React from 'react'
import { useTimer } from 'react-timer-hook'
import TimerCard from './timercard'

const Timers = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 5616000)
  return <TimerContainer expiryTimestamp={time} />
}

const TimerContainer = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  })
  const times = [
    {
      id: 1,
      date: days,
      text: 'Days',
    },
    {
      id: 2,
      date: hours,
      text: 'Hours',
    },
    {
      id: 3,
      date: minutes,
      text: 'Minutes',
    },
    {
      id: 4,
      date: seconds,
      text: 'Seconds',
    },
  ]
  return (
    <div className="relative flex flex-col space-y-6 overflow-x-clip bg-cover bg-center bg-no-repeat pt-72 pb-[250px] sm:pt-0 md:space-y-20">
      <div className="absolute bottom-0 right-40 h-[30rem] w-[30rem] animate-blob2 rounded-full bg-[#8DD1FD] blur-3xl sm:right-80"></div>
      <div className="animation-delay-4 absolute bottom-0 left-40 h-[30rem] w-[30rem] animate-blob3 rounded-full bg-[#B1B7F3] blur-3xl sm:left-80"></div>
      <section className="z-20 text-center">
        <p className={` text-lg text-[#3D4BE0]`}>Countdown</p>
        <h1 className=" bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text  text-[32px] font-extrabold text-transparent lg:text-[64px]">
          Open Registration on
        </h1>
      </section>
      <section className="z-20 flex items-center justify-center space-x-[5.74px] md:space-x-3">
        {times.map((time: any) => (
          <>
            <TimerCard {...time} />
            <span
              className={`${
                time.id === 4 ? 'hidden' : 'inline'
              } bg-gradient-to-r from-[#D0D4F8] via-[#3D4BE0] to-[#07003F]  bg-clip-text text-[30.61px] font-extrabold text-transparent md:text-[64px]`}
            >
              :
            </span>
          </>
        ))}
      </section>
    </div>
  )
}
export default Timers
