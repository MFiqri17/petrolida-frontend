
import MissionCard from './missionCard';
const MissionContainer = ({missions}: any) => {
    return (
      <div className=" bg-mission bg-cover bg-no-repeat flex flex-col space-y-[100px]  bg-center px-4 py-[350px] 2xl:px-[120px] ">
        <h1 className="bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text py-5 text-center text-2xl font-extrabold text-transparent md:text-[64px]">
          This is Our Missions
        </h1>
        <section className="flex flex-col items-center justify-center space-y-6 md:flex-row md:items-start md:space-x-6 md:space-y-0  ">
          {missions.map((mission: any) => (
            <MissionCard {...mission} />
          ))}
        </section>
      </div>
    )
}
export default MissionContainer;