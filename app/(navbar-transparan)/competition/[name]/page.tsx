'use client'

import RegularJumbotron from '../../../../components/utils/regular-jumbotron'
import React from 'react'
import TimerContainer from '../../../../components/timercontainer'
import { competitionData } from '../../../../data/competition'
import { notFound } from 'next/navigation'
import Contact from '../../../../components/contact'
import PrizeCarousel from '../../../../components/prize-carousel'
import FaqSection from '../../../../components/faq-section'

function getPageData(param: string) {
  const data = competitionData.filter(({ slug }) => slug === param)
  if (data[0]) {
    return data[0]
  }
  return null
}

export default function OilRigDesign({ params }: { params: { name: string } }) {
  const data = getPageData(params.name)
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600)

  if (!data) {
    notFound()
  }

  return (
    <main className="bg-light">
      <RegularJumbotron title={data.name} desc={data.desc} />
      <TimerContainer expiryTimestamp={time} />
      <PrizeCarousel prize={data.prize} />
      <FaqSection faq={data.faq} />
      <Contact type={'competition'} />
    </main>
  )
}
