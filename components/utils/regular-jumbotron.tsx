import clsx from 'clsx'
import Image from 'next/image'

export default function RegularJumbotron({
  isHome = false,
  title,
  desc,
}: {
  isHome?: boolean
  title: string
  desc: string
}) {
  return (
    <header
      className={clsx(
        'relative flex h-[623px] bg-light',
        !isHome && 'overflow-clip bg-gradient-to-r from-secondary to-primary',
      )}
    >
      <div
        className={clsx(
          'z-20 flex flex-col justify-center gap-y-8 pl-32',
          isHome ? 'w-3/5 pt-72' : 'w-1/2',
        )}
      >
        <h1 className="text-5xl font-extrabold text-white">{title}</h1>
        <p className="w-2/3 text-xl text-white">{desc}</p>
        <div className="flex gap-x-6">
          <a
            href="#"
            className="rounded-full border border-white px-6 py-2.5 font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            {isHome ? 'Learn More' : 'Guidebook'}
          </a>
          <a
            href="#"
            className="rounded-full border border-white bg-white px-6 py-2.5 font-semibold text-secondary transition hover:text-primary"
          >
            Register
          </a>
        </div>
      </div>
      {isHome ? (
        <div className="absolute top-20">
          <Image
            src={'/images/mega-triangle.png'}
            width={1145}
            height={883}
            alt="triangle"
          />
        </div>
      ) : (
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
      )}
    </header>
  )
}
