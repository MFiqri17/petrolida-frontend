import React from 'react'
import { footerlistInterface } from '../data/footerList'

export default function ListFooter({
  listfooters,
}: {
  listfooters: footerlistInterface[]
}) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 justify-between gap-x-9 xl:gap-y-0 gap-y-10  xl:gap-x-[138px] text-white">
      {listfooters.map((list: any) => (
        <section className="flex flex-col space-y-[15px]">
          <h1 className="text-base font-bold	 text-[#FBFBFC]">{list.title}</h1>
          <ul className="flex flex-col space-y-[13px]">
            {list.content.map((listcontent: any) => (
              <li className="text-[#FBFBFC]/[0.7] text-base font-medium">
                <a href={listcontent.href}>{listcontent.lable}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
