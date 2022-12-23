import { footeritemInterface } from '../data/footeritem'
import Link from 'next/link'
const footerCard = ({ footerItem }: { footerItem: footeritemInterface[] }) => {
  return (
    <div className="flex flex-col space-y-2.5 rounded-[30px] bg-white px-[42px] py-[30px]">
      {footerItem.map((list: any) => (
        <div key={list.id} className="flex flex-col space-y-2.5">
          <h2 className="font-bold text-[#26215B]">{list.title}</h2>
          <div className="flex flex-col">
            {list.text.map((listText: any) => (
              <Link
                key={listText.id}
                className="whitespace-pre-line text-sm font-medium text-[#26215B]/[0.7] hover:text-[#26215B]"
                href={listText.href}
                target={'_blank'}
                rel="noreferrer"
              >
                {listText.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default footerCard
