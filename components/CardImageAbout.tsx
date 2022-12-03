import Image from "next/image"

interface imageInterface {
    image:string,
    text:string,
    direction:string
}
const CardImageAbout = ({image, text, direction}: imageInterface) => {
    return (
      <section className=" flex flex-col space-y-6">
        <p className={` ${direction} text-lg text-[#3D4BE0]`}>{text}</p>
        <div className="relative h-[500px] w-[486px]">
          <Image layout="fill" src={image} alt={text} objectFit="contain" />
        </div>
      </section>
    )
}
export default CardImageAbout