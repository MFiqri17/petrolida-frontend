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
      className={`lg:py-[350px] pt-[200px] pb-[350px] md:flex-row flex-col relative mx-auto flex  items-center justify-center px-4 md:px-10 md:space-x-8 overflow-hidden xl:pl-[222px] xl:pr-[120px]`}
    >
      <div className={`absolute w-[1135px] md:h-[1135px] h-[1500px]  2xl:-right-40 md:-right-64  lg:top-40 md:top-10 top-40`}>
        <Image
          src={'/images/6-competition-bg-alt.png'}
          layout="fill"
          objectFit='contain'
          alt="competition"
        />
      </div>
      <CardImageAbout image={image} text={text} direction={'text-left'} />
      <CardItemAbout desc={desc} />
    </div>
  )
}

export default CardAbout
