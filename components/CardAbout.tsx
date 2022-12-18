import CardImageAbout from './CardImageAbout'
import CardItemAbout from './CardItemAbout'
import Image from 'next/image'
interface cardaboutInterface {
  image: string
  text: string
  desc?: any
}
const CardAbout = ({
  image,
  text,
  desc,
}: cardaboutInterface) => {
  return (
    <div
      className={`py-[350px] flex-row relative mx-auto flex  items-center justify-center space-x-8 overflow-hidden pl-[222px] pr-[120px]`}
    >
      <div className={`absolute -right-40  top-40`}>
        <Image
          src={'/images/6-competition-bg-alt.png'}
          width={1135}
          height={1135}
          alt="competition"
        />
      </div>
      <CardImageAbout image={image} text={text} direction={'text-left'} />
      <CardItemAbout desc={desc} />
    </div>
  )
}

export default CardAbout
