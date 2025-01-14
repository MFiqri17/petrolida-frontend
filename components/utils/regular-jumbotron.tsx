import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

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
        'relative flex h-[623px] bg-light lg:mb-[350px]',
        !isHome && 'overflow-clip bg-gradient-to-r from-secondary to-primary',
      )}
    >
      <div
        className={clsx(
          'z-20 flex flex-col justify-center gap-y-8 sm:pl-32',
          isHome
            ? 'px-5 pt-28 sm:w-3/5 sm:px-0 sm:pt-72'
            : 'px-5 sm:w-1/2 sm:px-0',
        )}
      >
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="text-white sm:w-2/3 sm:text-xl">{desc}</p>
        <div className="flex gap-x-6">
          <a
            href={
              isHome
                ? '#petrolida'
                : 'https://drive.google.com/drive/folders/1ddc7zQtaKLThA31BF0RnscSXaXkPDEg4'
            }
            className="rounded-full border border-white px-6 py-2.5 font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            {isHome ? 'Learn More' : 'Guidebook'}
          </a>
          <Link
            href="/register"
            className="rounded-full border border-white bg-white px-6 py-2.5 font-semibold text-secondary transition hover:text-primary"
          >
            Register
          </Link>
        </div>
      </div>
      {isHome ? (
        <div className="absolute top-20 sm:top-0">
          <Image
            src={'/images/mega-triangle-mobile.svg'}
            width={1147}
            height={883}
            alt="triangle"
            className="sm:hidden"
          />
          <Image
            src={'/images/mega-triangle.svg'}
            width={1260}
            height={883}
            alt="triangle"
            className="hidden sm:block"
          />
        </div>
      ) : (
        <>
          <div className="relative hidden w-1/2 sm:block">
            <div className="absolute right-0 z-20 -bottom-60">
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
          <div className="absolute z-20 block w-1/2 right-12 -bottom-24 sm:hidden">
            <Image
              src={'/svg/jumbotron-triangle.svg'}
              width={441}
              height={580}
              alt="triangle"
            />
          </div>
          <div className="absolute z-20 block w-1/2 -bottom-24 -right-8 sm:hidden">
            <Image
              src={'/svg/jumbotron-triangle.svg'}
              width={441}
              height={580}
              alt="triangle"
            />
          </div>
        </>
      )}
    </header>
  )
}
