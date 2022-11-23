export default function ComingSoon() {
    return (
        <div>
            <main className="bg-[#EDEEF3] bg-[center_18rem] h-screen overflow-hidden flex flex-col justify-center items-center" style={{
                backgroundImage: "url('/coming-soon/triangle.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}>
                <h1 className="text-5xl md:text-5xl lg:text-7xl text-center bg-gradient-to-r text-transparent bg-clip-text from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] font-bold">
                    COMING SOON
                </h1>
                <a href="https://www.instagram.com/petrolida.2023/" className="absolute bottom-36 flex bg-[#07003F] rounded-full px-12 py-4 transition duration-300 hover:-translate-y-2" target="_blank">
                    <span className="pr-3">
                        <img src="/coming-soon/bxl_instagram-alt.svg" alt="instagram" className="w-full" />
                    </span>
                    <span className="text-[#EDEEF3]">
                        Our Instagram
                    </span>
                </a>
            </main>
        </div>
    );
}