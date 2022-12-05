import CardImageAbout from './CardImageAbout'
import CardItemAbout from './CardItemAbout'
import Image from 'next/image'
interface cardaboutInterface {
  image: string
  text: string
  direction: string
  title?: string
  desc?: any
  link?: any
  cardclass: string
  href:string
  bgPosition:string
}
const CardAbout = ({
  image,
  text,
  direction,
  title,
  desc,
  link,
  cardclass,
  href,
  bgPosition
}: cardaboutInterface) => {
  return (
    <div className={`flex relative  py-[350px]	 ${cardclass} `}>
      <div className="absolute -right-32 mt-10">
        <Image
          src={'/images/6-competition-bg-alt.png'}
          width={1135}
          height={1135}
          alt="competition"
        />
      </div>
      <CardImageAbout image={image} text={text} direction={direction} />
      <CardItemAbout href={href} title={title} desc={desc} link={link} />
    </div>
  )
}

export default CardAbout
