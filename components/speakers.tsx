export default function Speakers() {
  return (
    <div className=" bg-light py-4">
      <div className="text-center ">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Non Competitions
        </p>
        <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
          Sharing, Inspiring, Networking
        </h2>
        <p className="text-lg font-medium text-[#07003F]">
          Don’t miss the ultimate opportunity to meet and interact with great
          speakers <br />
          on Petrolida Career Talks, explore the city of Surabaya virtually, and
          Awarding Night.
        </p>
      </div>
      <div
        className="grid grid-cols-3 place-items-center gap-8 bg-contain bg-[center_-4rem] bg-no-repeat px-24 py-56"
        style={{
          backgroundImage: "url('/speakers/bg.png')",
        }}
      >
        <div className="flex h-96 w-80 -rotate-12 -skew-x-12 cursor-pointer items-center justify-center rounded-xl bg-white transition duration-300 hover:rotate-0 hover:skew-x-0">
          <p className="text-2xl font-bold text-[#07003F] ">Coming Soon</p>
        </div>
        <div className="flex h-96 w-80 -translate-y-10 cursor-pointer items-center justify-center rounded-xl bg-white">
          <p className="text-2xl font-bold text-[#07003F]">Coming Soon</p>
        </div>
        <div className="flex h-96 w-72 rotate-12 skew-x-12 cursor-pointer items-center justify-center rounded-xl bg-white transition duration-300 hover:rotate-0 hover:skew-x-0">
          <p className="text-2xl font-bold text-[#07003F]">Coming Soon</p>
        </div>
      </div>
    </div>
  )
}
