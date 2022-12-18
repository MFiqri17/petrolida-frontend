const letsJoin = () => {
    return (
      <div className=" bg-gradient-to-t from-[#251F56] to-[#3D4BE0] py-[123px] md:px-0 px-4">
        <section className="flex flex-col lg:space-y-[98px] space-y-12 items-center text-center">
          <div className="flex  flex-col items-center space-y-6">
            <h1 className="md:text-5xl text-[28px] font-extrabold text-[#FBFBFC]	">
              Let’s join our excitement
            </h1>
            <p className="md:text-2xl text-base font-semibold text-[#F3F4F7]">
              Don’t miss the ultimate opportunity to showcase your ideas and{' '}
              <br className="md:block hidden"/>
              innovation in reinforcing the future of our energy industry
            </p>
          </div>
          <a
            href="#"
            className="w-[119px] rounded-full   border border-white bg-white px-6 py-2.5 font-semibold text-secondary transition hover:text-primary"
          >
            Register
          </a>
        </section>
      </div>
    )
}
export default letsJoin