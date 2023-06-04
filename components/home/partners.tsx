'use client'

import Image from 'next/image';
import partnersImg from '../../public/partners.png';
// import sponsorsImg from '../../public/sponsors2.png';
// import sponsorsImg from '../../public/sponsors.png';



export default function Partners() {

  return (
    <div className="relative overflow-hidden bg-light">
      <div className="relative z-50 text-center">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Partners
        </p>
      </div>
      <div className='flex items-center justify-center w-full px-4 py-12 md:py-16 lg:py-24'>
        <Image
          src={partnersImg}
          alt={'sponsors'}
          placeholder={'blur'}
        />
      </div>
    </div >
  )
}
