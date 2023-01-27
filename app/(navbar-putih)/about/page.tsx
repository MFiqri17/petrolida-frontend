'use client'
import React from 'react'
import Image from 'next/image'
import GreetingSection from '../../../components/about/greetings-section'
import SectionTitle from '../../../components/utils/section-title'
import missionitem from '../../../data/missionitem'
import Contact from '../../../components/home/contact'
import MissionContainer from '../../../components/about/missions/missionContainer'
import MovingGradient from '../../../components/utils/moving-gradient'

export default function AboutPage() {
  const [datamissions] = React.useState(missionitem)
  return (
    <>
      <div className="relative px-4 pt-40 overflow-x-clip sm:flex sm:px-0 sm:pt-48 sm:pl-56">
        <div className="absolute top-0 -right-80 -z-10 sm:-right-60">
          <MovingGradient variant="alternate" className="h-[70rem] w-[70rem]" />
        </div>
        <div className="sm:w-1/2">
          <SectionTitle
            className="text-4xl text-left text-secondary sm:text-8xl"
            bgClassName="from-secondary to-secondary"
            title="Igniting Sustainable and Flawless Notion to Embrace The Energy Security"
          />
        </div>
        <div className="flex items-center sm:w-1/2 sm:pl-4 sm:pr-20">
          <p className="text-white sm:text-xl">
            Petroleum Integrated Days (Petrolida) is the biggest annual event
            held by SPE ITS Student Chapter. This year’s series will be the 10th
            annual event. Petroleum Integrated Days mainly focuses on several
            competitions in the energy sector but also provides non-competition
            events. Petrolida 2022 aims to serve as a platform for university
            students to explore and disclose their innovation regarding today’s
            energy challenges through providing them a chance to achieve
            substantial and competitive experiences to advance their excellence.
          </p>
        </div>
      </div>
      <MissionContainer missions={datamissions} />
      <GreetingSection />
      <Contact type="about" />
    </>
  )
}
