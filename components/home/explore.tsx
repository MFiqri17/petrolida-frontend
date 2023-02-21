'use client'

import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InstagramEmbed } from 'react-social-media-embed';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';

const igUrl = [
  {
    name: 'ig1',
    url: 'https://www.instagram.com/reel/CjFbBprDlxR/?utm_source=ig_web_copy_link',
  },
  {
    name: 'ig2',
    url: 'https://www.instagram.com/p/CmEWb0ZykNz/?utm_source=ig_web_copy_link',
  },
  {
    name: 'ig3',
    url: 'https://www.instagram.com/reel/Cm-4JyZoK8A/?utm_source=ig_web_copy_link',
  },
  {
    name: 'ig4',
    url: 'https://www.instagram.com/p/CnME7-JSIz2/?utm_source=ig_web_copy_link',
  }
]

export default function Explore() {

  return (
    <div className="relative overflow-hidden bg-light">
      <div className="relative z-50 text-center">
        <p className="text-center text-lg font-medium text-[#3D4BE0]">
          Instagram Contents
        </p>
        <h2 className="bg-gradient-to-r from-[#07003F] to-[#5461E4]  bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent lg:text-6xl">
          Explore with Us
        </h2>
        <p className="text-lg font-medium text-[#07003F] px-12">
          Stay connected with us and explore our world through captivating visuals by following our Instagram, <br />
          where we share the latest updates and exclusive content you won't find anywhere else."
        </p>
      </div>
      <div className='relative z-50 hidden lg:block'>
        <Swiper
          // install Swiper modules
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[EffectCoverflow]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 30,
            stretch: 260,
            depth: -60,
            modifier: 1,
            slideShadows: false,
          }}
          // slidesOffsetBefore={330}
          // slidesOffsetAfter={330}
          slidesPerView={2}
          grabCursor={true}
          centeredSlides={true}
          className='relative z-50 mt-24 max-w-7xl mySwiper'
        >
          <div className='w-full swiper-wrapper'>
            {igUrl.map((item, index) => {
              return (
                <>
                  <SwiperSlide key={index} className='w-full'>
                    <div className='flex items-center justify-center w-full py-32 rounded-xl'>
                      <div className="flex items-center justify-center bg-white cursor-pointer lg:-translate-y-10 h-fit w-fit rounded-xl">
                        <InstagramEmbed
                          url={item.url}
                          captioned={true}
                          width="400"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              )
            })}

          </div>
        </Swiper >
      </div>
      <div className='relative z-50 grid grid-cols-1 gap-4 py-24 place-items-center lg:hidden'>
        {igUrl.map((item, index) => {
          return (
            <div className="flex items-center justify-center bg-white cursor-pointer lg:-translate-y-10 h-fit w-fit rounded-xl" key={index}>
              <InstagramEmbed
                url={item.url}
                captioned={true}
                width="400"
              />
            </div>
          )
        })}
      </div>
      <div className="absolute animate-blob top-24 lg:top-56 left-1 w-[30rem] h-[30rem] bg-[#A5F4DF] rounded-full blur-3xl"></div>
      <div className="absolute animate-blob animation-delay-2 top-96 lg:top-56 lg:left-[36rem] w-[30rem] h-[30rem] bg-gradient-to-l from-[#3D4BE0] to-[#838CEB] rounded-full blur-3xl"></div>
      <div className="absolute animate-blob animation-delay-4 bottom-24 lg:top-56 right-1  w-[30rem] h-[30rem] bg-[#B1B7F3] rounded-full blur-3xl"></div>


    </div >
  )
}
