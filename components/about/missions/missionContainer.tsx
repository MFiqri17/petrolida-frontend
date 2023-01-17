import MissionCard from './missionCard'
const MissionContainer = ({ missions }: any) => {
  return (
    <div className="relative flex flex-col space-y-[100px] overflow-x-clip px-4 py-[350px] 2xl:px-[120px] ">
      <div className="absolute right-[15rem] bottom-40 -z-10 h-[30rem] w-[30rem] animate-blob rounded-full bg-[#B3F2E3] blur-3xl sm:top-96"></div>
      <div className="animation-delay-4 absolute left-60 -z-10 h-[30rem] w-[30rem]  animate-blob3 rounded-full bg-[#B1B7F3] blur-3xl"></div>
      <h1 className="bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text py-5 text-center text-2xl font-extrabold text-transparent md:text-[64px]">
        This is Our Missions
      </h1>
      <section className="flex flex-col items-center justify-center space-y-6 md:flex-row md:items-start md:space-x-6 md:space-y-0  ">
        {missions.map((mission: any) => (
          <MissionCard key={mission.id} {...mission} />
        ))}
      </section>
    </div>
  )
}
export default MissionContainer
