import React from 'react'

export default function ListFooter({ listfooters }: { listfooters: any }) {
  return (
    <div>
      {listfooters.map((list: any) => (
        <section>
          <h1>{list.title}</h1>
          {list.content.map((listcontent: any) => (
            <li>{listcontent.lable}</li>
          ))}
        </section>
      ))}
    </div>
  )
}
