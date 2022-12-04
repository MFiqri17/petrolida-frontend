'use client'
import React from 'react'
import Image from 'next/image'
import GreetingSection from '../../../components/about/greetings-section'
import MissionContainer from '../../../components/missionContainer'
import SectionTitle from '../../../components/utils/section-title'
import missionitem from '../../../data/missionitem'

export default function AboutPage() {
  const [datamissions] = React.useState(missionitem)
  return (
    <section className="bg-light">
      <div className="relative flex overflow-x-clip pl-56 pt-48">
        <div className="z-20 w-1/2">
          <SectionTitle
            className="text-left text-8xl text-secondary"
            bgClassName="from-secondary to-secondary"
            title="Igniting Sustainable and Flawless Notion to Embrace The Energy Security"
          />
        </div>
        <div className="z-20 flex w-1/2 items-center pl-4 pr-20">
          <p className="text-xl text-white">
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
        <Image
          src={'/images/6-competition-bg-alt-2.png'}
          width={1084}
          height={1135}
          alt="bg"
          className="absolute -right-20 -top-40"
        />
      </div>
      <MissionContainer missions={datamissions} />
      <GreetingSection />
    </section>
  )
}
