'use client'
import Image from "next/image"

const socialsData = [
    {
        name: 'Instagram',
        src: '/icon/instagram.svg',
        href: 'https://www.instagram.com/petrolida.2023/'
    },
    {
        name: 'Line',
        src: '/icon/line-text.svg',
        href: 'https://page.line.me/?accountId=petrolida'
    },
    {
        name: 'Linkedin',
        src: '/icon/linkedin.svg',
        href: 'https://www.linkedin.com/company/petroleum-integrated-days-petrolida/'
    },
]

export default function Socials() {
    return (
        <div className="flex items-center justify-center space-x-6" >
            {socialsData.map(({ name, src, href }) => (
                <a target={'_blank'} href={href} className="transition duration-300 ease-linear hover:-translate-y-1">
                    <div className="bg-[#FBFBFC] rounded-full w-[60px] h-[60px]  flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Image
                                src={src}
                                alt={name}
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
};
