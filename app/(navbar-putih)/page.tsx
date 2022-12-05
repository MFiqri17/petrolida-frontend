'use client'

import ComingSoon from './coming-soon/page'
import Contact from '../../components/contact'
import Speakers from '../../components/speakers'
import SixCompetition from '../../components/6-competition'
import PetrolidaJumbotron from '../../components/petrolida-jumbotron'
import RegularJumbotron from '../../components/utils/regular-jumbotron'
import CardAbout from '../../components/CardAbout'
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
      <CardAbout
        bgPosition="left"
        cardclass="flex-row-reverse flex-x-reverse pr-[222px] pl-[120px] space-x-reverse space-x-10 justify-center items-center"
        image={'/images/surabaya.png'}
        text="About Petrolida"
        direction="text-right"
        href="/google.com"
        title="PETROLEUM INTEGRATED DAYS"
        desc=" Petroleum Integrated Days (Petrolida) is the biggest annual event
            held by SPE ITS Student Chapter. This year’s series will be the 10th
            annual event."
        link={
          <a
            href=""
            className="mt-14 inline-flex items-center gap-x-6 text-2xl font-semibold text-white transition-all hover:gap-x-8"
          >
            Learn More{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        }
      />
      <SixCompetition />
      <Speakers />
      <Contact type={'landing'} />
    </>
  )
}
