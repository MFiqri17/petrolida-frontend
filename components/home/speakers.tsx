export default function Speakers() {
  return (
    <div className="py-4 bg-light">
      <div className="text-center ">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Non Competitions
        </p>
        <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
          Sharing, Inspiring, Networking
        </h2>
        <p className="text-lg font-medium text-[#07003F] px-12">
          Don’t miss the ultimate opportunity to meet and interact with great
          speakers <br />
          on Petrolida Career Talks, explore the city of Surabaya virtually, and
          Awarding Night.
        </p>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4  lg:gap-8 bg-cover lg:bg-contain bg-[center_-4rem] bg-no-repeat px-24 py-16 lg:py-56"
        style={{
          backgroundImage: "url('/speakers/bg.png')",
        }}
      >
        <div className="flex items-center justify-center transition duration-300 bg-white cursor-pointer lg:-skew-x-12 h-96 w-80 lg:-rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
          <p className="text-2xl font-bold text-[#07003F] ">Coming Soon</p>
        </div>
        <div className="flex items-center justify-center bg-white cursor-pointer lg:-translate-y-10 h-96 w-80 rounded-xl">
          <p className="text-2xl font-bold text-[#07003F]">Coming Soon</p>
        </div>
        <div className="flex items-center justify-center transition duration-300 bg-white cursor-pointer lg:skew-x-12 h-96 w-80 lg:rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
          <p className="text-2xl font-bold text-[#07003F]">Coming Soon</p>
        </div>
      </div>
    </div>
  )
}
