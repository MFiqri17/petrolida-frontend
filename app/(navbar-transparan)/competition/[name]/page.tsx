'use client'

import RegularJumbotron from '../../../../components/utils/regular-jumbotron'
import React from 'react'
import Timers from '../../../../components/timercontainer'
import { competitionData } from '../../../../data/competition'
import { notFound } from 'next/navigation'
import Contact from '../../../../components/contact'
import PrizeCarousel from '../../../../components/prize-carousel'
import FaqSection from '../../../../components/faq-section'
import CardAbout from '../../../../components/CardAbout'
import Timeline from '../../../../components/timeline'

function getPageData(param: string) {
  const data = competitionData.filter(({ slug }) => slug === param)
  if (data[0]) {
    return data[0]
  }
  return null
}

export default function OilRigDesign({ params }: { params: { name: string } }) {
  const data = getPageData(params.name)


  if (!data) {
    notFound()
  }

  return (
    <main className="bg-light">
      <RegularJumbotron title={data.name} desc={data.desc} />
      <Timers />
      <CardAbout
        image={'/images/surabaya.png'}
        text="About the Competition"
        desc={
          <>
            Oil Rig Design Competition that will be held online is a competition
            in which challenges participants to combine their engineering sense
            and creative innovations in designing a semi-submersible platform
            for a specific offshore oil field. Participants are expected to make
            a project explanation of their semi-submersible oil rig based on
            what situation they had.{' '}
            <span className="mt-3 block">
              {' '}
              This competition aims to develop participants' knowledge to
              overcome all challenges in the given field. In the next round,
              participants are also expected to make a 3D Video for the
              selection in favorite winner categories and prepare a presentation
              to be presented in front of the judges.{' '}
            </span>
          </>
        }
      />
      <Timeline
        firstDate={data.firstDate}
        firstEvent={data.firstEvent}
        timeline={data.timeline}
        lastDate={data.lastDate}
        lastEvent={data.lastEvent}
      />
      <PrizeCarousel prize={data.prize} />
      <FaqSection faq={data.faq} />
      <Contact
        type={'competition'}
        compName={data.name}
        picName={data.picName}
        line={data.lineId}
      />
    </main>
  )
}
