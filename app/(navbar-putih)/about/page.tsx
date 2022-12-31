'use client'
import React from 'react'
import Image from 'next/image'
import GreetingSection from '../../../components/about/greetings-section'
import SectionTitle from '../../../components/utils/section-title'
import missionitem from '../../../data/missionitem'
import Contact from '../../../components/home/contact'
import MissionContainer from '../../../components/about/missions/missionContainer'

export default function AboutPage() {
  const [datamissions] = React.useState(missionitem)
  return (
    <>
      <div className="relative overflow-x-clip px-4 pt-40 sm:flex sm:px-0 sm:pt-48 sm:pl-56">
        <div className="z-20 sm:w-1/2">
          <SectionTitle
            className="text-left text-4xl text-secondary sm:text-8xl"
            bgClassName="from-secondary to-secondary"
            title="Igniting Sustainable and Flawless Notion to Embrace The Energy Security"
          />
        </div>
        <div className="z-20 flex items-center sm:w-1/2 sm:pl-4 sm:pr-20">
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
        <Image
          src={'/images/6-competition-bg-alt-2.png'}
          width={1084}
          height={1135}
          alt="bg"
          className="absolute -right-20 -top-40 hidden sm:block"
        />
        <Image
          src={'/images/about-jumbotron-mobile.png'}
          width={1084}
          height={1135}
          alt="bg"
          className="absolute top-0 left-0 -z-10 block sm:hidden"
        />
      </div>
      <MissionContainer missions={datamissions} />
      <GreetingSection />
      <Contact type="about" />
    </>
  )
}
