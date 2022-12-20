import Image from "next/image"

interface imageInterface {
    image:string,
    text:string,
    direction:string
}
const CardImageAbout = ({image, text, direction}: imageInterface) => {
    return (
      <div className=" flex flex-col space-y-6">
        <p className={` ${direction} font-semibold text-lg text-[#3D4BE0]`}>{text}</p>
        <div className="relative lg:h-[500px] lg:w-[486px] w-[342px] h-[352px]">
          <Image layout="fill" src={image} alt={text} objectFit="contain" />
        </div>
      </div>
    )
}
export default CardImageAbout