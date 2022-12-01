import React from 'react'
import { footerlistInterface } from '../data/footerList'


export default function ListFooter({ listfooters }: { listfooters: footerlistInterface[] }) {
  return (
    <div className='flex justify-center text-white space-x-[138px]'>
      {listfooters.map((list: any) => (
        <section className="flex flex-col space-y-[15px]">
          <h1>{list.title}</h1>
          <ul className='flex flex-col space-y-[13px]'>
            {list.content.map((listcontent: any) => (
              <li>
                <a href={listcontent.href}>{listcontent.lable}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
