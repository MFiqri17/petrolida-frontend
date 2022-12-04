'use client'
import ComingSoon from './coming-soon/page'
import Contact from '../../components/contact'
import Speakers from '../../components/speakers'
import CardAbout from '../../components/CardAbout'
import MissionContainer from '../../components/missionContainer'
import missionitem from '../../data/missionitem'
import React from 'react'
import Image from 'next/image'

export default function Home() {

  const [datamissions] = React.useState(missionitem)
  return (
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
  )
}
