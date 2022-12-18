import SectionTitle from './utils/section-title'
import Link from 'next/link'
import Image from 'next/image'
interface cardaboutInterface {
}
const PetrolidaAbout = ({
}: cardaboutInterface) => {
  return (
    <div className={`overflow-hidden py-[350px] xl:pr-[222px] xl:pl-[120px]`}>
      <section className="relative mx-auto flex  lg:flex-row flex-col  items-center justify-center xl:space-x-10  ">
        <div className={`absolute -left-40  -top-48`}>
          <Image
            src={'/images/6-competition-bg-alt.png'}
            width={1135}
            height={1135}
            alt="competition"
          />
        </div>
        <div className="z-20 mt-32">
          <section>
            <SectionTitle
              title={'PETROLEUM INTEGRATED DAYS'}
              className="xl:w-[410px] w-full text-left text-5xl"
            />
            <p className="xl:w-[486px] w-full text-xl font-medium text-[#FBFBFC]">
              {
                ' Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event.'
              }
            </p>
          </section>
          <Link
            href={'googel'}
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
          </Link>
        </div>
        <div className=" flex flex-col space-y-6">
          <p
            className={` ${'text-right'} text-lg font-semibold text-[#3D4BE0]`}
          >
            {'About Petrolida'}
          </p>
          <div className="relative h-[500px] w-[486px]">
            <Image
              layout="fill"
              src={'/images/surabaya.png'}
              alt={'About Petrolida'}
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PetrolidaAbout
;