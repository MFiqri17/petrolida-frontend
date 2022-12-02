import Image from 'next/image'

export default function RegularJumbotron() {
  return (
    <header className="flex h-[623px] overflow-clip bg-gradient-to-r from-secondary to-primary">
      <div className="flex w-1/2 flex-col justify-center gap-y-8 pl-32">
        <h1 className="text-5xl font-extrabold text-white">Oil Rig Desain</h1>
        <p className="text-xl text-white">
          Designing a semi-submersible platform though a sustainable approach
          for a specific offshore oil field to reinforce the future of energy
          industry.
        </p>
        <div className="flex gap-x-6">
          <a
            href="#"
            className="rounded-full border border-white px-6 py-2.5 font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            Guidebook
          </a>
          <a
            href="#"
            className="rounded-full border border-white bg-white px-6 py-2.5 font-semibold text-secondary transition hover:text-primary"
          >
            Register
          </a>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="absolute -bottom-60 right-0 z-20">
          <Image
            src={'/svg/jumbotron-triangle.svg'}
            width={441}
            height={580}
            alt="triangle"
          />
        </div>
        <div className="absolute right-[13rem] -bottom-60">
          <Image
            src={'/svg/jumbotron-triangle.svg'}
            width={441}
            height={580}
            alt="triangle"
          />
        </div>
      </div>
    </header>
  )
}
