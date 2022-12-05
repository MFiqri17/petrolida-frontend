import Image from "next/image";
import Socials from "./socials";
const footer2 = () => {
  return (
    <div className="flex items-center justify-between border-none text-white">
      <div className="relative h-[56px] w-[143px]">
        <Image
          layout="fill"
          src={'/logo/logoPetrol.png'}
          alt="Logo Petrol Footer"
          objectFit="contain"
        />
      </div>
      <p>Created by Web Developer Petrolida 2023</p>
      <Socials width={35} height={35} />
    </div>
  )
}
export default footer2;