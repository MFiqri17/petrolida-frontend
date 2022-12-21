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

export default function CompetitionPage({
  params,
}: {
  params: { name: string }
}) {
  const data = getPageData(params.name)

  if (!data) {
    notFound()
  }

  return (
    <main className="bg-light">
      <RegularJumbotron title={data.name} desc={data.desc} />
      <Timers />
      <CardAbout
        image={data.image}
        text="About the Competition"
        desc={data.descCard}
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
