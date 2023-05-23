import CardImageAbout from './CardImageAbout'
import CardItemAbout from './CardItemAbout'
import Image from 'next/image'
import MovingGradient from '../../utils/moving-gradient'
interface cardaboutInterface {
  image: string
  text: string
  desc?: any
}
const CardAbout = ({ image, text, desc }: cardaboutInterface) => {
  return (
    <div
      className={`relative mx-auto flex flex-col items-center justify-center overflow-hidden px-4 pt-[200px] pb-[350px] md:flex-row md:space-x-8 md:px-10 lg:py-[90px] xl:pl-[222px] xl:pr-[120px]`}
    >
      <div
        className={`absolute top-72 h-[1500px] w-[1135px] sm:top-40 md:-right-64 md:top-10 md:h-[1135px] lg:top-40 2xl:-right-40`}
      >
        {/* <Image
          src={'/images/6-competition-bg-alt.png'}
          layout="fill"
          objectFit='contain'
          alt="competition"
        /> */}
        <MovingGradient variant="alternate" className="h-[70rem] w-[70rem]" />
      </div>
      <CardImageAbout image={image} text={text} direction={'text-left'} />
      <CardItemAbout desc={desc} />
    </div>
  )
}

export default CardAbout
