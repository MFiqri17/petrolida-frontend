const letsJoin = () => {
  return (
    <div className=" bg-gradient-to-t from-[#251F56] to-[#3D4BE0] py-[123px] px-4 md:px-0">
      <section className="flex flex-col items-center space-y-12 text-center lg:space-y-[98px]">
        <div className="flex  flex-col items-center space-y-6">
          <h1 className="text-[28px] font-extrabold text-[#FBFBFC] md:text-5xl	">
            Let’s join our excitement
          </h1>
          <p className="text-base font-semibold text-[#F3F4F7] md:text-2xl">
            Don’t miss the ultimate opportunity to showcase your ideas and{' '}
            <br className="hidden md:block" />
            innovation in reinforcing the future of our energy industry
          </p>
        </div>
        <a
          href="/register"
          className="w-[119px] rounded-full   border border-white bg-white px-6 py-2.5 font-semibold text-secondary transition hover:text-primary"
        >
          Register
        </a>
      </section>
    </div>
  )
}
export default letsJoin
