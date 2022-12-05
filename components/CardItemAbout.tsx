import SectionTitle from './utils/section-title'

interface itemInterface {
  title?: string
  desc?: any
  link?: string
  href: string
}

const CardItemAbout = ({ title, desc, link, href }: itemInterface) => {
  return (
    <div className='z-20'>
      <section>
        <SectionTitle title={title} className="w-[410px] text-left text-5xl" />
        <p className="w-[486px] text-xl font-medium text-[#FBFBFC]">{desc}</p>
      </section>
      <a href={href} className="text-2xl font-semibold	text-[#FBFBFC] ">
        {link}
      </a>
    </div>
  )
}
export default CardItemAbout
