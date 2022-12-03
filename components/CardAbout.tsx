import CardImageAbout from './CardImageAbout'
import CardItemAbout from './CardItemAbout'
interface cardaboutInterface {
  image: string
  text: string
  direction: string
  title?: string
  desc?: string
  link?: any
  cardclass: string
  href:string
}
const CardAbout = ({
  image,
  text,
  direction,
  title,
  desc,
  link,
  cardclass,
  href
}: cardaboutInterface) => {
  return (
    <div
      className={`flex bg-cover bg-[left_-14rem_bottom_-6rem] bg-no-repeat py-[350px]  ${cardclass} `}
      style={{
        backgroundImage: "url('/icon/about-bg.png')",
      }}
    >
      <CardImageAbout image={image} text={text} direction={direction} />
      <CardItemAbout href={href} title={title} desc={desc} link={link} />
    </div>
  )
}

export default CardAbout
