import { missionInterface } from '../../../data/missionitem'

const MissionCard = ({ id, text }: missionInterface) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-start space-y-7 rounded-[30px] px-5 md:h-[360px] md:w-[282px] xl:h-[393px]  ${
        id === '01' || id === '03'
          ? 'bg-gradient-to-t from-[#FBFBFC]'
          : 'bg-gradient-to-b from-[#FBFBFC]'
      }`}
    >
      <h1 className="bg-gradient-to-b from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] bg-clip-text pt-5 text-5xl font-extrabold text-transparent  md:text-[64px]">
        {id}
      </h1>
      <p className="pb-10 text-center text-base font-semibold text-[#07003F] lg:text-xl xl:text-2xl">
        {text}
      </p>
    </div>
  )
}
export default MissionCard
