import SectionTitle from '../../components/utils/section-title'
import Image from 'next/image'

export default function GreetingSection() {
  return (
    <section className="relative pb-32">
      <SectionTitle
        title="Greetings to all aspiring students"
        className="text-3xl sm:text-6xl"
      />
      <div>
        <div className="absolute top-12 right-0 z-0">
          <Image
            src={'/images/blue-circle.png'}
            width={670}
            height={670}
            alt="circle"
          />
        </div>
        <div className="absolute left-0 bottom-0 z-0 sm:-bottom-32">
          <Image
            src={'/images/green-circle.png'}
            width={670}
            height={670}
            alt="circle"
          />
        </div>
        <div className="relative z-20 mx-4 my-20 rounded-2xl bg-white px-6 py-14 text-lg sm:mx-auto sm:w-3/4 sm:px-12">
          <div className="absolute -top-4 left-4 rotate-180">
            <Image
              src={'/svg/quotation-mark.svg'}
              width={58}
              height={41}
              alt="quote"
            />
          </div>
          <div className="absolute -bottom-4 right-4">
            <Image
              src={'/svg/quotation-mark.svg'}
              width={58}
              height={41}
              alt="quote"
            />
          </div>
          <div className="space-y-9">
            <p className="sm:font-semibold">
              Today, it's time for us to rise together again to signify the end
              of the Covid-19 pandemic. With the fighting spirit to achieve
              dreams, this year Petrolida is back with a new concept and various
              exciting events that will once again unite the spirit of
              competition on an international scale. Petrolida's progress is
              inseparable from the contributions of national and international
              competition delegates, experts, academics, practitioners,
              remarkable individuals from various industries, and all the
              committees that will be present to make Petrolida 2023 successful.
            </p>
            <p className="sm:font-semibold">
              Now Petrolida has returned to bring back the force with the theme
              of "Igniting Sustainable and Flawless Notion to Embrace The Energy
              Security”. With this, I hope to make Petrolida as a sustainable
              platform for undergraduate students to create and innovate that
              have a reciprocal impact on today's energy issues.
            </p>
            <p className="sm:font-semibold">
              Hi, I'm, Aldi, as Project Officer of Petrolida 2023, I'm waiting
              for your burning enthusiasm and I dare you to #IgniteWithUs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
