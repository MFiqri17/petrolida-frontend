import Image from 'next/image'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import SectionTitle from '../utils/section-title'
import '@splidejs/react-splide/css'

export default function PrizeCarousel({
  prize,
}: {
  prize: { name: string; prize: string; src: string }[]
}) {
  const carouselRef = React.useRef<Splide>(null)

  const handleThumbs = (id: string) => {
    if (carouselRef.current) {
      carouselRef.current.go(id)
    }
  }
  return (
    <section className="pb-32 pt-20">
      <SectionTitle
        title="Competition Prize"
        className="text-4xl sm:text-6xl"
      />
      <div className="mx-auto px-5 sm:w-1/3 sm:px-0">
        <h2 className="text-center sm:text-xl sm:font-semibold">
          Winners have a chance to win the prize pool of Rp 6.500.000 consist of
        </h2>
        <Splide
          aria-label="Competition Prize"
          ref={carouselRef}
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
          }}
        >
          {prize.map(({ name, prize, src }) => (
            <SplideSlide key={name} className="relative">
              <div className="mx-auto sm:w-1/2">
                <Image
                  src={src}
                  width={438}
                  height={3}
                  alt="trophy"
                  className="mx-auto"
                />
              </div>
              <div className="absolute bottom-0 w-full text-center">
                <h3 className="text-3xl font-extrabold">{name}</h3>
                <h4 className="text-xl font-semibold">{prize}</h4>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex justify-center gap-x-4 pt-5">
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
    </section>
  )
}
