import React from 'react'
import { footerlistInterface } from '../data/footerList'
import Link from 'next/link'

export default function ListFooter({
  listfooters,
}: {
  listfooters: footerlistInterface[]
}) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 justify-between gap-x-9 xl:gap-y-0 gap-y-10  xl:gap-x-[138px] text-white">
      {listfooters.map((list: any) => (
        <section key={list.id} className="flex flex-col space-y-[15px]">
          <h1 className="text-base font-bold	 text-[#FBFBFC]">{list.title}</h1>
          <ul className="flex flex-col space-y-[13px]">
            {list.content.map((listcontent: any) => (
              <li key={listcontent.id} className="text-[#FBFBFC]/[0.7] text-base font-medium">
                <Link className='hover:font-semibold' href={listcontent.href}>{listcontent.lable}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
