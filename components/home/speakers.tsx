'use client'
import { InstagramEmbed } from 'react-social-media-embed';


export default function Speakers() {
  return (
    <div className="relative overflow-hidden bg-light">
      <div className="relative z-50 text-center">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Non Competitions
        </p>
        <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
          Sharing, Inspiring, Networking
        </h2>
        <p className="text-lg font-medium text-[#07003F] px-12">
          Don’t miss the ultimate opportunity to meet and interact with great
          speakers <br />
          on Petrolida Career Talks, explore the city of Surabaya virtually, and
          Awarding Night.
        </p>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 bg-cover lg:bg-contain bg-[center_-4rem] bg-no-repeat px-24 py-16 lg:py-56 relative z-50"
      >

        <div className="flex items-center justify-center transition duration-300 bg-white cursor-pointer lg:-skew-x-12 h-fit w-fit lg:-rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
          <InstagramEmbed
            url={`https://www.instagram.com/reel/Co6eEkFMxf3/?utm_source=ig_web_copy_link`}
            captioned={true}
            width="400"
          />
        </div>
        <div className="flex items-center justify-center bg-white cursor-pointer lg:-translate-y-10 h-fit w-fit rounded-xl">
          <InstagramEmbed
            url={`https://www.instagram.com/reel/Co4jU4wNI6-/?utm_source=ig_web_copy_link`}
            captioned={true}
            width="400"
          />
        </div>
        <div className="flex items-center justify-center transition duration-300 bg-white cursor-pointer lg:skew-x-12 h-fit w-fit lg:rotate-12 rounded-xl hover:rotate-0 hover:skew-x-0">
          <InstagramEmbed
            url={`https://www.instagram.com/p/Cozm6kzytXn/?utm_source=ig_web_copy_link`}
            captioned={true}
            width="400"
          />
        </div>
      </div>
      <div className="absolute animate-blob top-24 lg:top-56 left-1 w-[30rem] h-[30rem] bg-[#A5F4DF] rounded-full blur-3xl"></div>
      <div className="absolute animate-blob animation-delay-2 top-96 lg:top-56 lg:left-[36rem] w-[30rem] h-[30rem] bg-gradient-to-l from-[#07003F] via-[#5461E4] to-[#838CEB] rounded-full blur-3xl"></div>
      <div className="absolute animate-blob animation-delay-4 bottom-24 lg:top-56 right-1  w-[30rem] h-[30rem] bg-[#B1B7F3] rounded-full blur-3xl"></div>
    </div>
  )
}
