'use client'

import Speakers from '../../components/home/speakers'
import Explore from '../../components/home/explore'
import Sponsors from '../../components/home/sponsors'
import SixCompetition from '../../components/home/6-competition'
import PetrolidaAbout from '../../components/about/petrolida-jumbotron'
import RegularJumbotron from '../../components/utils/regular-jumbotron'
import React from 'react'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script async src='//www.instagram.com/embed.js'></Script>
      <RegularJumbotron
        isHome={true}
        title="Igniting Sustainable and Flawless Notion to Embrace The Energy Security"
        desc="Petrolida 2023 is present as a place for initiating continuous innovations based on sustainable ideas that play a role in securing energy security"
      />
      <PetrolidaAbout />
      <SixCompetition />
      <Speakers />
      <Explore />
      <Sponsors />
      {/* <Contact type="landing" /> */}
    </>
  )
}
