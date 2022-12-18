import {missionInterface} from '../data/missionitem'

const MissionCard = ({id, text}: missionInterface) => {
    return (
      <div
        className={`flex md:w-[282px] xl:h-[393px] md:h-[360px] w-full flex-col items-center justify-start space-y-7 rounded-[30px] px-5  ${
          id === '01' || id === '03'
            ? 'bg-gradient-to-t from-[#FBFBFC]'
            : 'bg-gradient-to-b from-[#FBFBFC]'
        }`}
      >
        <h1 className="bg-gradient-to-b from-[#07003F] pt-5 via-[#3D4BE0] to-[#D0D4F8] bg-clip-text md:text-[64px] text-5xl font-extrabold  text-transparent">
          {id}
        </h1>
        <p className="text-center xl:text-2xl lg:text-xl text-base text-[#07003F] pb-10 font-semibold">{text}</p>
      </div>
    )
}
export default MissionCard; 