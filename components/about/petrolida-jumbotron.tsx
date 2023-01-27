import SectionTitle from '../utils/section-title'
import Link from 'next/link'
import Image from 'next/image'
import MovingGradient from '../utils/moving-gradient'
interface cardaboutInterface { }
const PetrolidaAbout = ({ }: cardaboutInterface) => {
  return (
    <div
      className={`overflow-hidden px-4 pb-[120px] pt-[350px] lg:py-[350px] xl:pr-[222px] xl:pl-[120px]`}
    >
      <section
        id="petrolida"
        className="relative flex flex-col items-center justify-center mx-auto md:flex-row xl:space-x-10 "
      >
        <div className={`absolute -left-60 -top-20 sm:-left-40`}>
          {/* <Image
            src={'/images/6-competition-bg-alt.png'}
            width={1135}
            height={1135}
            alt="competition"
          /> */}
          <MovingGradient variant="alternate" className="h-[70rem] w-[70rem]" />
        </div>
        {/* <div className="left-30 absolute -top-40 block w-[1000px] md:hidden">
          <Image
            src={'/images/bg-card-mobile.png'}
            width={1135}
            height={1135}
            alt="competition"
          />
        </div> */}
        <div className="z-20 mt-32">
          <p
            className={` ${'text-left'} mb-6 block text-lg font-semibold text-[#3D4BE0] lg:hidden`}
          >
            {'About Petrolida'}
          </p>
          <section>
            <SectionTitle
              title={'PETROLEUM INTEGRATED DAYS'}
              className="w-[220px] text-left text-2xl lg:text-5xl xl:w-[410px]"
            />
            <p className="w-full text-base font-medium text-[#FBFBFC] md:text-xl xl:w-[486px]">
              {
                ' Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event.'
              }
            </p>
          </section>
          <Link
            href={'/about'}
            className="inline-flex items-center mt-6 text-base font-semibold text-white transition-all gap-x-6 hover:gap-x-8 lg:mt-14 lg:text-2xl"
          >
            Learn More{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col space-y-6 ">
          <p
            className={` ${'text-right'} hidden text-lg font-semibold text-[#3D4BE0] lg:block`}
          >
            {'About Petrolida'}
          </p>
          <div className="relative ">
            <iframe className='rounded-3xl w-[320px] h-[240px] lg:h-[480px] lg:w-[640px]' src="https://drive.google.com/file/d/1-UQTDmZ_GZm1l7_LSAPvYEAgFbhjWyIL/preview" allow='autoplay' allowFullScreen></iframe>

            {/* <Image
              layout="fill"
              src={'/images/surabaya.png'}
              alt={'About Petrolida'}
              objectFit="contain"
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PetrolidaAbout
