import React from "react";
import { styles } from "../styles";
import { fiveChickhen } from "../assets";

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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
      <SwiperSlide>
        <div className="hero">
          <div className="flex-col hero-content lg:flex-row-reverse md:pt-20">
            <img src={fiveChickhen} alt="5chickhen" className="max-w-full" />
            <div
              className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start leading-none`}
            >
              <p className="text-bg-red">NOW TAKING ONLINE ORDERS</p>
              <div className="flex flex-row-reverse items-center justify-center gap-2">
                <h1
                  className="text-bg-sec text-[1pc] md:text-[2pc] text-slate-300"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-[0.5pc] md:text-[1pc]">N</span>1200
                </h1>
                <h1 className="font-bold text-[4pc] md:text-[6pc] text-bg-red font-serif">
                  JOLLOF
                </h1>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red">
                  Add to Cart
                </button>
                <button className="p-3 duration-500 border-2 rounded-lg border-bg-white bg-bg-black hover:bg-bg-white hover:border-2 hover:border-bg-black text-bg-white hover:text-bg-black">
                  Book a Table
                </button>
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
    </Swiper>
  );
};

export default Hero;
