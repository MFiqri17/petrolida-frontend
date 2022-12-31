interface itemInterface {
 desc?: any
}


const CardItemAbout = ({ desc }: itemInterface) => {
  return (
    <div className="mt-11 z-20">
        <p className="lg:w-[486px]  lg:text-xl text-base font-medium text-[#FBFBFC]">
          {desc}
        </p>
    </div>
  )
}
export default CardItemAbout
