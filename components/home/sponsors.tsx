'use client'

import Image from 'next/image';
import sponsorsImg from '../../public/sponsors5.png';

export default function Sponsors() {

  return (
    <div className="relative overflow-hidden bg-light">
      <div className="relative z-50 text-center">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Sponsors
        </p>
        <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
          Empowering Change
        </h2>
      </div>
      <div className='flex items-center justify-center w-full px-4 py-12 md:py-16 lg:py-24'>
        <Image
          src={sponsorsImg}
          alt={'sponsors'}
          placeholder={'blur'}
        />
      </div>
    </div >
  )
}
