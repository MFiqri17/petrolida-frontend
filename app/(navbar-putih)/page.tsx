'use client'

import ComingSoon from './coming-soon/page'
import Contact from '../../components/contact'
import Speakers from '../../components/speakers'
import SixCompetition from '../../components/6-competition'
import PetrolidaJumbotron from '../../components/petrolida-jumbotron'
import RegularJumbotron from '../../components/utils/regular-jumbotron'
import React from 'react'

export default function Home() {
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
      <Speakers />
      <Contact type={'landing'} />
    </>
  )
}
