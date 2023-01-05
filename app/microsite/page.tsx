import Image from 'next/image'
import Button from '../../components/microsite/button'
import Socials from '../../components/layout/footer/socials'

const buttonList = [
  { id: 1, name: 'Registration Form', href: '/event-register' },
  { id: 2, name: 'Guidebook Petrolida 2023', href: '' },
  { id: 3, name: 'Web Developer', href: '' },
  { id: 4, name: 'Wakanda Forever', href: '' },
]

export default function MicrositePage() {
  return (
    <div className="relative flex items-center justify-center overflow-clip bg-light">
      <div className="z-20 my-20 h-screen md:px-0 px-5  flex flex-col items-center justify-center">
        <Image
          src={'/images/petrolida-circle.png'}
          alt="logo petrolida circle"
          width={100}
          height={100}
        />
        <h1 className="mt-4 text-center text-[28px] font-bold">
          Petrolida 2023
        </h1>
        <h5 className="text-center text-base font-medium">
          Petroleum Integrated Days 2023
        </h5>
        <section className="mt-12 mb-8 flex flex-col space-y-4">
          {buttonList.map((list) => (
            <Button key={list.id} {...list} />
          ))}
        </section>
        <Socials width={40} height={40} />
        <p className="text-[rgba(7, 0, 63, 0.64)] mt-[37px] text-center text-[14px]">
          Create by Web Developer Petrolida 2023
        </p>
      </div>
      <div className="absolute -right-24 -bottom-40">
        <Image
          src={'/images/auth-bg.png'}
          width={1047}
          height={1630}
          alt="trophy"
        />
      </div>
    </div>
  )
}
