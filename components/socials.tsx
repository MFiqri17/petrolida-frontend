'use client'
import Image from "next/image"

const socialsData = [
  {
    name: 'Instagram',
    src: '/icon/insta.png',
    href: 'https://www.instagram.com/petrolida.2023/'
  },
  {
    name: 'Line',
    src: '/icon/line.png',
    href: 'https://page.line.me/?accountId=petrolida'
  },
  {
    name: 'Linkedin',
    src: '/icon/linkedin.png',
    href: 'https://www.linkedin.com/company/petroleum-integrated-days-petrolida/'
  },
]

export default function Socials({
  width = 60,
  height = 60,
}: {
  width: number
  height: number
}) {
  return (
    <div className="flex items-center justify-center space-x-6">
      {socialsData.map(({ name, src, href }) => (
        <a
          target={'_blank'}
          href={href}
          className="transition duration-300 ease-linear hover:-translate-y-1"
        >

          <div className="flex items-center justify-center">
            <Image
              src={src}
              alt={name}
              width={width}
              height={height}
            />
          </div>
        </a>
      ))}
    </div>
  )
};
