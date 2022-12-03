
import MissionCard from './missionCard';
const MissionContainer = ({missions}: any) => {
    return (
      <div
        className="bg-cover bg-center px-[120px] py-[350px] flex flex-col space-y-[100px]"
        style={{ backgroundImage: "url('/images/bg-mission.png')" }}
      >
        <h1 className="bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text text-center text-[64px] font-extrabold text-transparent">
          This is Our Missions
        </h1>
        <section className="flex justify-center space-x-6 ">
          {missions.map((mission: any) => (
            <MissionCard {...mission} />
          ))}
        </section>
      </div>
    )
}
export default MissionContainer;