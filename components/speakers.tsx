export default function Speakers() {
    return (
        <div className="bg-[#EDEEF3] py-4">
            <div className="text-center ">
                <p className="text-center text-[#3D4BE0] font-medium text-lg">
                    Non Competitions
                </p>
                <h2 className="text-2xl lg:text-6xl font-bold  text-transparent bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text pt-4 pb-8">
                    Sharing, Inspiring, Networking
                </h2>
                <p className="text-[#07003F] font-medium text-lg">
                    Don’t miss the ultimate opportunity to meet and interact with great speakers <br />
                    on Petrolida Career Talks, explore the city of Surabaya virtually, and Awarding Night.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 px-24 py-56 place-items-center bg-[center_-4rem] bg-contain bg-no-repeat" style={{
                backgroundImage: "url('/speakers/bg.png')",
            }}>
                <div className="flex items-center justify-center transition duration-300 -skew-x-12 bg-white cursor-pointer hover:skew-x-0 -rotate-12 hover:rotate-0 rounded-xl w-80 h-96">
                    <p className="text-[#07003F] text-2xl font-bold ">Coming Soon</p>
                </div>
                <div className="flex items-center justify-center -translate-y-10 bg-white cursor-pointer rounded-xl w-80 h-96">
                    <p className="text-[#07003F] text-2xl font-bold">Coming Soon</p>
                </div>
                <div className="flex items-center justify-center transition duration-300 skew-x-12 bg-white cursor-pointer hover:skew-x-0 w-72 hover:rotate-0 rounded-xl rotate-12 h-96">
                    <p className="text-[#07003F] text-2xl font-bold">Coming Soon</p>
                </div>
            </div>
        </div>
    )
};
