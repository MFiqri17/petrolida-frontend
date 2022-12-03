import React from 'react'
import { footerlistInterface } from '../data/footerList'

export default function ListFooter({
  listfooters,
}: {
  listfooters: footerlistInterface[]
}) {
  return (
    <div className="flex justify-center space-x-[138px] text-white">
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
