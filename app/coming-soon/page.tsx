export default function ComingSoon() {
  return (
    <div>
      <main
        className="flex h-screen flex-col items-center justify-center overflow-hidden bg-[#EDEEF3] bg-[center_18rem]"
        style={{
          backgroundImage: "url('/coming-soon/triangle.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <h1 className="bg-gradient-to-r from-[#07003F] via-[#3D4BE0] to-[#D0D4F8] bg-clip-text text-center text-5xl font-bold text-transparent md:text-5xl lg:text-7xl">
          COMING SOON
        </h1>
        <a
          href="https://www.instagram.com/petrolida.2023/"
          className="absolute bottom-20 md:bottom-36 flex rounded-full bg-[#07003F] px-8 py-4 transition duration-300 hover:-translate-y-2 md:px-12"
          target="_blank"
          rel="noreferrer"
        >
          <span className="pr-3">
            <img
              src="/coming-soon/bxl_instagram-alt.svg"
              alt="instagram"
              className="w-full"
            />
          </span>
          <span className="text-[#EDEEF3]">Our Instagram</span>
        </a>
      </main>
    </div>
  )
}
