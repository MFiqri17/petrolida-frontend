import Image from "next/image";
import Socials from "./socials";
const footer2 = () => {
  return (
    <div className="flex items-center justify-between text-white border-none">
      <div className="w-[143px] h-[56px] relative">
        <Image
          layout="fill"
          src={'/logo/logoPetrol.png'}
          alt="Logo Petrol Footer"
          objectFit="contain"
        />
      </div>
      <p>Created by Web Developer Petrolida 2023</p>
      <Socials />
    </div>
  )
}
export default footer2;