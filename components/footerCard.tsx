import { footeritemInterface } from '../data/footeritem'

const footerCard = ({ footerItem }: { footerItem: footeritemInterface[] }) => {
  return (
    <div className="flex flex-col space-y-2.5 rounded-[30px] bg-white px-[42px] py-[30px]">
      {footerItem.map((list: any) => (
        <div className="flex flex-col space-y-2.5">
          <h2
            className="text-[#26215B] font-bold"
          >
            {list.title}
          </h2>
          <div className="flex flex-col">
            {list.text.map((listText: any) => (
              <a
                className="whitespace-pre-line text-sm font-medium text-[#26215B]/[0.7]"
                href={listText.href}
              >
                {listText.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default footerCard
