import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

const index = () => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(97.23deg, #004380 0%, #0085D2 100%)",
      }}
    >
      <div className="flex flex-col items-center pt-20 pb-10">
        <h2 className="text-grey-100 text-3xl sm:text-4xl font-heading font-bold px-5  lg:text-center sm:px-10 lg:px-20 max-w-[800px] lg:max-w-[700px] mx-auto mb-8 lg:mb-0">
          Testimonials - Hear what our happy tenants have to say
        </h2>

        <div className="flex flex-col w-full items-center py-20 px-5 sm:px-10 lg:px-20 max-w-[800px]  mx-auto">
          <div className="mb-5 lg:block hidden">
            <img src="icons/quote.svg" alt="testimonials" />
          </div>
          <div className="relative pt-5 lg:pt-0">
            {" "}
            <Swiper
              slidesPerView={1}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop
            >
              <SwiperSlide>
                <div className="lg:px-14 flex flex-col lg:items-center">
                  <p className="lg:text-center text-grey-100 text-sm sm:text-base">
                    I’ve been a tenant with Apollo Properties for almost a year.
                    Bruce and Masatoshi have been very helpful since my move to
                    Japan. They're very quick to respond and get a hold of.
                    Bruce was able to help me set up my internet and replace a
                    couple of appliances that have broken within a day. Staying
                    at Apollo Properties have been instrumental to my move to
                    Japan.
                  </p>
                  <div className="mt-5 flex gap-5 items-center">
                    <img
                      className=" w-[80px] h-[80px] rounded-full border-2 border-blue-200"
                      src="images/testimonials/debbie.png"
                      alt="debbie"
                    />
                    <div className="flex flex-col  text-grey-100">
                      <p className="font-bold">Debbie</p>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:px-14 flex flex-col lg:items-center">
                  <p className="lg:text-center text-grey-100 text-sm sm:text-base">
                    I’ve been a tenant with Apollo Properties for almost a year.
                    Bruce and Masatoshi have been very helpful since my move to
                    Japan. They're very quick to respond and get a hold of.
                    Bruce was able to help me set up my internet and replace a
                    couple of appliances that have broken within a day. Staying
                    at Apollo Properties have been instrumental to my move to
                    Japan.
                  </p>
                  <div className="mt-5 flex gap-5 items-center">
                    <img
                      className=" w-[80px] h-[80px] rounded-full border-2 border-blue-200"
                      src="images/testimonials/debbie.png"
                      alt="debbie"
                    />
                    <div className="flex flex-col  text-grey-100">
                      <p className="font-bold">Debbie</p>
                      <p>student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute lg:-translate-x-1/2 -translate-y-1/2 -left-2 sm:left-0 -top-8 lg:top-1/3 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 "
            >
              <img
                src="icons/triangle.svg"
                alt="previous"
                className=" -scale-100"
              />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute translate-x-14  sm:translate-x-20 lg:translate-x-1/2 -translate-y-1/2 left-0 -top-8 lg:left-auto lg:right-0 lg:top-1/3 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 "
            >
              <img src="/icons/triangle.svg" alt="next" />
            </button>
          </div>
          <div className="mt-14 -mb-10">
            <a
              href="/testimonials"
              className="text-blue-200 underline hover:text-blue-300 transition-colors"
            >
              See all testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
