'use client'
import { Tab } from '@headlessui/react'
import clsxm from '../../utils/clsxm'
import Image from 'next/image'
import Link from 'next/link'

type TicketData = {
  name: string
  price: string
}

const tabList = [
  {
    name: 'Description',
  },
  {
    name: 'Ticket',
  },
]

const ticketList = [
  {
    name: 'Early Bird',
    price: 'Rp. 80.000',
  },
  {
    name: 'Presale 1',
    price: 'Rp. 120.000',
  },
  {
    name: 'Presale 2',
    price: 'Rp. 140.000',
  },
  {
    name: 'Normal',
    price: 'Rp. 160.000',
  },
]

export default function PetroshowTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-wrap p-1 sm:flex-nowrap">
        {tabList.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              clsxm(
                'w-full py-4 text-lg font-semibold leading-5 text-primary',
                'ease transition duration-300',
                selected
                  ? 'border-b-4 border-secondary focus:outline-none'
                  : 'border-b-4 border-white text-primary',
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="py-5">
            <p className="mb-5 text-justify font-semibold">
              To achieve the value of Petroshow, Petrolida wants to organize a
              music concert with the main aim of providing a platform for local
              musicians in Surabaya to showcase their works to a wider audience,
              with the hope that visitors will come to appreciate and respect
              the works of these up-and-coming musicians.
            </p>
            <p className="mb-5 text-justify font-semibold">
              This concert will not only feature local musicians but also invite
              national musicians to increase its appeal and attract more
              visitors. The concert will also provide opportunities for local
              musicians to collaborate with national musicians and offer
              exciting performances such as community time, workshops,
              collaborations, and much more.
            </p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="py-5">
            <div className="flex flex-col space-y-5">
              {ticketList.map((ticket) => (
                <Ticket key={ticket.name} ticketData={ticket} />
              ))}
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

function Ticket({ ticketData }: { ticketData: TicketData }) {
  return (
    <div className="flex w-full">
      <div className="w-3/4 rounded-3xl border-r-2 border-dashed border-black bg-white p-7">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl font-bold">{ticketData.name}</p>
          <p className="pb-2 text-lg font-semibold">
            Ticket Price Exclude 15% Government Tax & 3% Admin Fee
          </p>
          <div className="flex gap-x-3">
            <Image
              src="/petroshow/vol-2/clock-red.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="text-lg font-semibold text-error">
              Ticket payments end on 4 June 15:30 WIB
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 rounded-3xl bg-white p-5">
        <div className="flex flex-col">
          <p className="pt-4 pb-6 text-center text-2xl font-bold">
            {ticketData.price}
          </p>
          <Link href="/ticket-register">
            <button className="mb-1.5 w-full rounded-full bg-secondary px-5 py-3 font-semibold text-whiteb transition duration-300 hover:-translate-y-1">
              Buy Ticket
            </button>
          </Link>
          <p className="text-center font-semibold">Only 100 tickets left</p>
        </div>
      </div>
    </div>
  )
}
