import React from "react";
import { styles } from "../styles";
import { heroBanner } from "../constant";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {heroBanner.map((banner, index) => (
        <SwiperSlide>
          <div className="mb-4 hero">
            <div className="flex-col pt-20 hero-content lg:flex-row-reverse">
              <img
                src={banner.image}
                alt="banner"
                className="object-contain w-[15pc] h-[15pc] md:w-[30pc] md:h-[30pc] "
              />
              <div
                className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
              >
                <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
                <div className="flex flex-row-reverse items-center justify-center gap-2">
                  <h1
                    className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    <span className="text-[0.5pc] md:text-[1pc]">₦</span>
                    {banner.price}
                  </h1>
                  <h1 className={`${styles.heroHeadText} text-bg-red`}>
                    {banner.title}
                  </h1>
                </div>
                <p className="py-6 leading-6">{banner.description}</p>
                <div className="flex items-center gap-2">
                  <button className={`${styles.btnRed}`}>Add to Cart</button>
                  <button className={`${styles.btnBlack}`}>Book a Table</button>
                </div>
                <div className="flex items-center gap-8 pt-8">
                  <div>
                    <h2 className="font-bold">Lunch</h2>
                    <p className="pt-2 font-light">1:00pm - 3:00pm</p>
                  </div>
                  <div>
                    <h2 className="font-bold">Dinner</h2>
                    <p className="pt-2 font-light">6:00pm - 10:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
