interface itemInterface {
 desc?: any
}


const CardItemAbout = ({ desc }: itemInterface) => {
  return (
    <div className="z-20 mt-10">
        <p className="w-[486px]  text-xl font-medium text-[#FBFBFC]">
          {desc}
        </p>
    </div>
  )
}
export default CardItemAbout
