'use client'

import ComingSoon from './coming-soon/page'
import Contact from '../../components/contact'
import Speakers from '../../components/speakers'
import SixCompetition from '../../components/6-competition'
import PetrolidaJumbotron from '../../components/petrolida-jumbotron'
import RegularJumbotron from '../../components/utils/regular-jumbotron'
import CardAbout from '../../components/CardAbout'
import MissionContainer from '../../components/missionContainer'
import TimerContainer from '../../components/timercontainer'
import missionitem from '../../data/missionitem'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  const [datamissions] = React.useState(missionitem)
  return (
    <>
      <section className="bg-light pb-40">
        <RegularJumbotron
          isHome={true}
          title="Igniting Sustainable and Flawless Notion to Embrace The Energy Security"
          desc="Petrolida 2023 is present as a place for initiating continuous innovations based on sustainable ideas that play a role in securing energy security"
        />
      </section>
      <PetrolidaJumbotron />
      <SixCompetition />
      <main className="bg-[#EDEEF3]">
        <ComingSoon />

        <CardAbout
          image={'/icon/surabaya.png'}
          text="About the Petrolida"
          direction="text-right"
          title="PETROLEUM Integrated Days"
          desc="Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event."
          link={
            <>
              Learn more{' '}
              <div className="relative inline-block h-[16.88px]  w-[26.25px]">
                <Image
                  className="mt-1"
                  layout="fill"
                  src={'/icon/right-arrow.png'}
                  alt={'righ arrow'}
                  objectFit="contain"
                />
              </div>{' '}
            </>
          }
          href={'#'}
          cardclass="flex-row-reverse pl-[120px] pr-[222px] space-x-reverse space-x-6 items-center"
        />
        <MissionContainer missions={datamissions} />
        <Speakers />
        <Contact type={'landing'} />
      </main>
    </>
  )
}
