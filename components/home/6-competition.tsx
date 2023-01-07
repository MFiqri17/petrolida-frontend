import React from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import SectionTitle from '../utils/section-title'

const competitionData = [
  {
    name: 'OIL RIG DESAIN',
    desc: 'Innovate and present your ideas related to oil and gas in a form of research paper',
    src: '/images/competition-carousel/oil-rig-desain.png',
    className: 'sm:text-6xl text-2xl',
  },
  {
    name: 'FRACTURING FLUID DESIGN',
    desc: 'Formulate the optimal fracture fluid to solve the problem based on the...',
    src: '/images/competition-carousel/ff-design.png',
    className: 'sm:text-4xl text-2xl',
  },
  {
    name: 'PETROSMART',
    desc: 'Challange your knowledge related to the oil and gas industry by answering quick-fire questions',
    src: '/images/competition-carousel/petrosmart.png',
    className: 'sm:text-4xl text-2xl',
  },
  {
    name: 'PAPER',
    desc: 'Innovate and present your ideas related to oil and gas in a form of research paper',
    src: '/images/competition-carousel/paper.png',
    className: 'sm:text-6xl text-2xl',
  },
  {
    name: 'BUSINESS CASE',
    desc: 'Find the most suitable solution to answer a real business case problem',
    src: '/images/competition-carousel/business-case.png',
    className: 'sm:text-5xl text-2xl',
  },
  {
    name: 'CASE STUDY',
    desc: 'Challenge your oil and gas knowledge to solve a problem based on the case given',
    src: '/images/competition-carousel/case-study.png',
    className: 'sm:text-6xl text-2xl',
  },
]

export default function SixCompetition() {
  const carouselRef = React.useRef<Splide>(null)

  const handleThumbs = (id: string) => {
    if (carouselRef.current) {
      carouselRef.current.go(id)
    }
  }
  return (
    <section className="bg-light pb-64 sm:pt-40">
      <p className="pb-4 text-center text-lg text-secondary">Competitions</p>
      <SectionTitle
        title="6 COMPETITION EVENT"
        className="text-3xl sm:text-6xl"
      />
      <p className="mx-auto px-12 text-center sm:w-1/2 sm:text-xl sm:font-semibold">
        Meet other participants, let’s show your ideas, innovations and
        abilities to Petrolida 2022
      </p>
      <div className="relative mx-auto mt-10 px-6 sm:mt-32 sm:w-3/5">
        <div className="absolute -top-60 -right-40 hidden sm:block">
          <Image
            src={'/images/6-competition-bg.png'}
            width={1185}
            height={1135}
            alt="competition"
          />
        </div>
        <div className="absolute left-0 sm:hidden">
          <Image
            src={'/images/6-comp-mobile-bg.png'}
            width={375}
            height={859}
            alt="competition"
          />
        </div>
        <Splide
          aria-label="Competition Prize"
          ref={carouselRef}
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            type: 'fade',
          }}
        >
          {competitionData.map(({ name, desc, src, className }) => (
            <SplideSlide key={name} className="flex flex-col sm:flex-row">
              <div className="flex items-end justify-center sm:w-1/3 sm:justify-start">
                <SectionTitle
                  title={name}
                  className={`text-left ${className}`}
                />
              </div>
              <Image
                src={src}
                width={384}
                height={480}
                alt="competition"
                className="transition hover:-skew-x-3"
              />
              <div className="ml-3 mt-4 flex items-center px-6 sm:mt-0 sm:w-1/3 sm:px-0">
                <p className="text-white">{desc}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <div className="absolute -bottom-14 right-40 flex justify-center gap-x-4 text-white sm:bottom-36">
          <button onClick={() => handleThumbs('<')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={() => handleThumbs('>')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
