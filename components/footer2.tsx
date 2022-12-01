import Image from "next/image";
const footer2 = () => {
    return (
      <div className="flex justify-between items-center text-white">
        <div className="w-[143px] h-[56px] relative">
          <Image
            layout="fill"
            src={'/logo/logoPetrol.png'}
            alt="Logo Petrol Footer"
            objectFit="contain"
          />
        </div>
        <p>Created by Web Developer Petrolida 2023</p>
        <p>Nunggu Ridho</p>
      </div>
    )
}
export default footer2;