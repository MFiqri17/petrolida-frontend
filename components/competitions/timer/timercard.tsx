const TimerCard = ({text, date} : {text:string, date:string}) => {
    return (
      <div className="flex h-[77.69px] w-[67.69px]  flex-col justify-center -space-y-[10px] rounded-[14.35px] bg-gradient-to-t from-[#FBF8F3] text-center  md:h-[162px] md:w-[141px] md:rounded-[30px] md:py-[30px] py-[14.35px]  ">
        <span className="block bg-gradient-to-r from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] bg-clip-text text-[32px] md:text-[64px] font-extrabold text-transparent ">
          {date}
        </span>{' '}
        <span className="text-xs block font-bold text-[#07003F] md:text-xl">
          {text}
        </span>
      </div>
    )
}
export default TimerCard