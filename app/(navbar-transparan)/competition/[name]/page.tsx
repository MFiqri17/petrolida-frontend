'use client'
import { Disclosure, Transition } from '@headlessui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import RegularJumbotron from '../../../../components/utils/regular-jumbotron'
import clsx from 'clsx'
import SectionTitle from '../../../../components/utils/section-title'
import '@splidejs/react-splide/css'
import Image from 'next/image'
import React from 'react'

const faq = [
  {
    question: 'siapa namamu?',
    answer: 'hahah',
  },
  {
    question: 'siapa namamu?',
    answer: 'hahah',
  },
  {
    question: 'siapa namamu?',
    answer: 'hahah',
  },
  {
    question: 'siapa namamu?',
    answer: 'hahah',
  },
]

export default function OilRigDesign() {
  const carouselRef = React.useRef<Splide>(null)

  const handleThumbs = (id: string) => {
    if (carouselRef.current) {
      carouselRef.current.go(id)
    }
  }
  return (
    <>
      <RegularJumbotron title="coba" desc="coba" />
      <section className="bg-light py-20">
        <SectionTitle title="Competition Prize" />
        <div className="mx-auto w-1/3">
          <h2 className=" text-center text-xl font-semibold">
            Winners have a chance to win the prize pool of Rp 6.500.000 consist
            of
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
            <SplideSlide className="relative">
              <div className="mx-auto w-1/2">
                <Image
                  src={'/images/juara-1.png'}
                  width={238}
                  height={3}
                  alt="trophy"
                />
              </div>
              <div className="absolute bottom-0 w-full text-center">
                <h3 className="text-3xl font-extrabold">1st Place</h3>
                <h4 className="text-xl font-semibold">Rp 5.000.000</h4>
              </div>
            </SplideSlide>
            <SplideSlide className="relative">
              <div className="mx-auto w-1/2">
                <Image
                  src={'/images/juara-2.png'}
                  width={238}
                  height={3}
                  alt="trophy"
                />
              </div>
              <div className="absolute bottom-0 w-full text-center">
                <h3 className="text-3xl font-extrabold">2nd Place</h3>
                <h4 className="text-xl font-semibold">Rp 5.000.000</h4>
              </div>
            </SplideSlide>
            <SplideSlide className="relative">
              <div className="mx-auto w-1/2">
                <Image
                  src={'/images/juara-3.png'}
                  width={238}
                  height={3}
                  alt="trophy"
                />
              </div>
              <div className="absolute bottom-0 w-full text-center">
                <h3 className="text-3xl font-extrabold">3rd Place</h3>
                <h4 className="text-xl font-semibold">Rp 5.000.000</h4>
              </div>
            </SplideSlide>
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
      <section className="bg-light py-20">
        <SectionTitle title="FAQ" />
        <div className="mx-auto w-3/4 py-8">
          {faq.map(({ question, answer }, i) => (
            <Disclosure key={i} as="div" className="mb-4">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={clsx(
                      'z-50 flex w-full items-center justify-between bg-white px-4 py-4 text-left font-bold text-black transition-transform focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75',
                      open ? 'rounded-t-2xl' : 'rounded-2xl',
                    )}
                  >
                    <span className="pl-6 pr-5 md:pr-20">{question}</span>
                    <div
                      className={clsx(
                        open ? 'rotate-180 transform' : 'rotate-0',
                        'text-cblack h-8 w-8 transition-transform',
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="transform -translate-y-2 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform translate-y-0 opacity-100"
                    leaveTo="transform -translate-y-2 opacity-0"
                  >
                    <Disclosure.Panel className="rounded-b-2xl bg-white pl-10 pr-20 pb-4 text-black">
                      {answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    </>
  )
}
