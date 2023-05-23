'use client'

import RegularJumbotron from '../../../../components/utils/regular-jumbotron'
import React from 'react'
import Timers from '../../../../components/competitions/timer/timercontainer'
import { competitionData } from '../../../../data/competition'
import { notFound } from 'next/navigation'
import Contact from '../../../../components/home/contact'
import PrizeCarousel from '../../../../components/competitions/prize-carousel'
import FaqSection from '../../../../components/competitions/faq-section'
import CardAbout from '../../../../components/home/card-about/CardAbout'
import Timeline from '../../../../components/competitions/timeline'
import Winners from '../../../../components/competitions/winners'

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
      <Winners title={data.name} winner1={data.winner1} winner1name={data.winner1name} winner2={data.winner2} winner2name={data.winner2name} winner3={data.winner3} winner3name={data.winner3name} />
      {/* <Timers /> */}
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
      <PrizeCarousel prize={data.prize} prizePool={data.prize_pool} />
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
