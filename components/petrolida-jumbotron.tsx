import Image from 'next/image'
import SectionTitle from './utils/section-title'

export default function PetrolidaJumbotron() {
  return (
    <section className="bg-light pt-96 pb-60">
      <div className="relative mx-auto flex w-4/5 justify-center">
        <div className="absolute -left-40 -top-60">
          <Image
            src={'/images/6-competition-bg-alt.png'}
            width={1185}
            height={1135}
            alt="bg"
          />
        </div>
        <div className="z-20 flex w-1/2 flex-col justify-center pr-16">
          <SectionTitle
            title="PETROLEUM INTEGRATED DAYS"
            className="text-left text-5xl"
          />
          <h3 className="text-xl text-white">
            Petroleum Integrated Days (Petrolida) is the biggest annual event
            held by SPE ITS Student Chapter. This year’s series will be the 10th
            annual event.{' '}
          </h3>
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
        </div>
        <div className="z-20 w-1/2">
          <p className="mb-3 mr-32 text-right text-lg font-semibold text-secondary">
            About The Petrolida
          </p>
          <Image
            src={'/images/surabaya.png'}
            width={486}
            height={500}
            alt="competition"
          />
        </div>
      </div>
    </section>
  )
}
