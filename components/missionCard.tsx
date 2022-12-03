import {missionInterface} from '../data/missionitem'

const MissionCard = ({id, text}: missionInterface) => {
    return (
      <div
        className={`flex w-[282px] flex-col items-center justify-start space-y-7 rounded-[30px] px-5 py-10 ${
          id === '01' || id === '03'
            ? 'bg-gradient-to-t from-[#FBFBFC]'
            : 'bg-gradient-to-b from-[#FBFBFC]'
        }`}
      >
        <h1 className="bg-gradient-to-b from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] bg-clip-text text-[64px] font-extrabold  text-transparent">
          {id}
        </h1>
        <p className="text-center text-2xl text-[#07003F] font-semibold">{text}</p>
      </div>
    )
}
export default MissionCard; 