import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { urlForImage } from 'sanity/urlForImage';
import { urlFor } from '../../sanity/imageBuilder.js';

interface SliderProps {
  images: [] | undefined;
}

const Slider = ({ images }: SliderProps) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
      >
        {images?.map((image: any, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={urlFor(image.asset).width(1000).format('webp').url()}
                alt={image['alt']}
                className="rounded-[20px] md:rounded-[40px] w-full h-auto aspect-[4/3] object-contain mx-auto "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute -translate-x-1/2 -translate-y-1/2 left-0 top-1/2 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 "
      >
        <img src="/icons/triangle.svg" alt="previous" className=" -scale-100" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute translate-x-1/2 -translate-y-1/2 right-0 top-1/2 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 "
      >
        <img src="/icons/triangle.svg" alt="next" />
      </button>
    </div>
  );
};

export default Slider;
