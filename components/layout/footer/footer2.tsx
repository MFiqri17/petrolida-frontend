import Image from "next/image";
import Socials from "./socials";
const footer2 = () => {
  return (
    <>
      <div className="flex items-center justify-between border-none text-white">
        <div className="relative md:h-[56px] md:w-[143px] w-[72px] h-[26px]">
          <Image
            layout="fill"
            src={'/logo/logoPetrol.png'}
            alt="Logo Petrol Footer"
            objectFit="contain"
          />
        </div>
        <p className="hidden md:block">
          Created by Web Developer Petrolida 2023
        </p>
        <Socials width={35} height={35} />
      </div>
      <div className="pl-[46px] pr-[62px]">
        <p className="block text-white md:hidden text-xs">
          Created by Web Developer Petrolida 2023
        </p>
      </div>
    </>
  )
}
export default footer2;