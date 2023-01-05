'use client'

import clsx from 'clsx'
import Image from 'next/image'

export default function FormTimeline({
  formType,
  isActive,
}: {
  formType: string[]
  isActive: number
}) {
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <ol className="mx-12 flex h-56 max-w-screen-2xl snap-x items-center overflow-x-auto">
          {formType.map((item) => (
            <li
              key={formType.indexOf(item)}
              className="relative mb-6 snap-center sm:mb-0"
            >
              {item == 'General' ? (
                <>
                  <div
                    className={`
                        flex w-32 ${
                          isActive == formType.indexOf(item)
                            ? 'animate-pulse'
                            : ''
                        }  items-center justify-center
                      `}
                  >
                    <div
                      className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full md:h-8 md:w-8 ${
                        isActive == formType.indexOf(item)
                          ? 'bg-[#3D4BE0] outline outline-8 outline-[#838CEB] ring-8 ring-[#D0D4F8] ring-offset-8'
                          : isActive > formType.indexOf(item)
                          ? 'bg-[#838CEB] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                          : 'bg-[#ffffff] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                      } `}
                    >
                      <Image
                        className={`${
                          isActive > formType.indexOf(item) ? 'block' : 'hidden'
                        }`}
                        src={'/icon/check.png'}
                        alt={'check'}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className={`${
                        isActive > formType.indexOf(item)
                          ? 'bg-[#D0D4F8]'
                          : 'bg-[#FBFBFC]'
                      }
                            absolute right-0
                            flex h-2
                        w-1/2`}
                    ></div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-poppins translate-y-4 text-center text-base font-semibold text-black">
                      {item}
                    </h3>
                  </div>
                </>
              ) : item == 'Files' ? (
                <>
                  <div
                    className={`${
                      isActive == formType.indexOf(item) ? 'animate-pulse' : ''
                    }
                        relative  flex w-32 items-center`}
                  >
                    <div
                      className={`z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8 ${
                        isActive == formType.indexOf(item)
                          ? 'bg-[#3D4BE0] outline outline-8 outline-[#838CEB] ring-8 ring-[#D0D4F8] ring-offset-8'
                          : isActive > formType.indexOf(item)
                          ? 'bg-[#838CEB] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                          : 'bg-[#ffffff] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                      }`}
                    >
                      {' '}
                      <Image
                        className={`${
                          isActive > formType.indexOf(item) ? 'block' : 'hidden'
                        }`}
                        src={'/icon/check.png'}
                        alt={'check'}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className={`absolute left-0 flex h-2 w-1/2 ${
                        isActive > formType.indexOf(item)
                          ? 'bg-[#D0D4F8]'
                          : 'bg-[#FBFBFC]'
                      } `}
                    ></div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-poppins translate-y-4 text-center text-base font-semibold text-black">
                      {item}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div
                    className={`relative ${
                      isActive == formType.indexOf(item) ? 'animate-pulse' : ''
                    }  flex w-32 items-center`}
                  >
                    <div
                      className={`z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8 ${
                        isActive == formType.indexOf(item)
                          ? 'bg-[#3D4BE0] outline outline-8 outline-[#838CEB] ring-8 ring-[#D0D4F8] ring-offset-8'
                          : isActive > formType.indexOf(item)
                          ? 'bg-[#838CEB] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                          : 'bg-[#ffffff] bg-gradient-to-r outline outline-[7px] outline-[#D0D4F8] ring-[7px] ring-inset ring-[#838CEB]'
                      }`}
                    >
                      {' '}
                      <Image
                        className={`${
                          isActive > formType.indexOf(item) ? 'block' : 'hidden'
                        }`}
                        src={'/icon/check.png'}
                        alt={'check'}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className={`${
                        isActive > formType.indexOf(item)
                          ? 'bg-[#D0D4F8]'
                          : 'bg-[#FBFBFC]'
                      } absolute
                            flex h-2
                        w-full`}
                    ></div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-poppins translate-y-4 text-center text-base font-semibold text-black">
                      {item}
                    </h3>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
