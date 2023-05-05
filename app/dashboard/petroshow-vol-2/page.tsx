import Image from 'next/image'
import Link from 'next/link'
import PetroshowTabs from '../../../components/dashboard/petroshow-tabs'

export default function PetroshowVol2Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold ">Petroshow Vol.2</h1>
      <section className="mb-5 flex w-full flex-col gap-x-10 sm:flex-row">
        <div className="flex w-1/4 flex-col gap-y-3 rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="mb-2 text-xl font-semibold">Event Info</h2>
          <div className="flex gap-x-3">
            <Image
              src="/petroshow/vol-2/calendar.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="font-medium">5 April 2023</p>
          </div>
          <div className="flex gap-x-3">
            <Image
              src="/petroshow/vol-2/clock.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="font-medium">16:00 - 18:00</p>
          </div>
          <div className="mb-2 flex gap-x-3">
            <Image
              src="/petroshow/vol-2/location.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="font-medium">DBL Arena</p>
          </div>
          <Link href="/ticket-register">
            <button className="w-full rounded-full bg-secondary px-5 py-3 font-semibold text-whiteb transition duration-300 hover:-translate-y-1">
              Buy Ticket
            </button>
          </Link>
        </div>
        <div className="relative flex w-3/4 flex-col gap-y-3 overflow-clip rounded-2xl bg-white p-5 shadow-xl">
          <Image
            src="/petroshow/vol-2/concert.png"
            alt="background"
            fill
            className="absolute object-cover"
          />
        </div>
      </section>
      <section>
        <PetroshowTabs />
      </section>
    </div>
  )
}
