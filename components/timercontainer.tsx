import * as React from 'react'
import { useTimer } from 'react-timer-hook'
import TimerCard from './timercard'

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
    <div
      className="flex flex-col space-y-20 bg-no-repeat bg-center bg-cover pt-[190px] pb-[250px]"
      style={{
        backgroundImage: "url('/images/countdown-bg.png')",
      }}
    >
      <section className="text-center">
        <p className={` text-lg text-[#3D4BE0]`}>Countdown</p>
        <h1 className="bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text  text-[64px] font-extrabold text-transparent">
          Open Registration on
        </h1>
      </section>
      <section className="flex items-center justify-center space-x-3">
        {times.map((time: any) => (
          <>
            <TimerCard {...time} />
            <span
              className={`${
                time.id === 4 ? 'hidden' : 'inline'
              } bg-gradient-to-r from-[#D0D4F8] via-[#3D4BE0] to-[#07003F]  bg-clip-text text-[64px] font-extrabold text-transparent`}
            >
              :
            </span>
          </>
        ))}
      </section>
    </div>
  )
}
export default TimerContainer;