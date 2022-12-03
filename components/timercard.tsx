const TimerCard = ({text, date} : {text:string, date:string}) => {
    return (
      <div className="w-[141px] h-[162px] flex flex-col justify-center rounded-[30px] bg-gradient-to-t from-[#FBF8F3]  text-center text-xl font-bold text-[#07003F] ">
        <span className="mb-6 block bg-gradient-to-r from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] bg-clip-text text-transparent pt-[30px] pb-[10px] text-[32px] font-extrabold md:text-[64px]">
          {date}
        </span>{' '}
        {text}
      </div>
    )
}
export default TimerCard