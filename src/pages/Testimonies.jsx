import React from "react";
import { styles } from "../styles";
import { blackMan } from "../assets";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonies = () => {
  return (
    <div className="py-16">
      <div className="leading-10 text-center">
        <p className={` ${styles.sectionSubText}text-bg-black`}>testimonial</p>
        <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
          What they are saying about us
        </h1>
      </div>
      <div className="flex-col items-center justify-center mt-8 shadow-2xl md:flex-row card card-side">
        <figure className="rounded-[100px] shadow my-4 md:ml-6 bg-bg-sec md:w-full w-[12pc]">
          <img src={blackMan} alt="testify" className="h-full " />
        </figure>
        <div className="flex flex-col md:ml-4 card-body">
          <div className="">
            <div className="">
              <FaQuoteLeft className="text-2xl md:text-6xl text-bg-red" />
              <h1 className="p-2 pt-4 mt-4 text-justify border-l-2 md:p-6 border-bg-red">
                I enjoy premium services Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora ullam commodi autem natus harum
                consequatur. Quis quisquam blanditiis, nulla amet tempore
                architecto repellat velit saepe laboriosam unde quas laborum
                culpa!
              </h1>
            </div>
          </div>
          <div className="items-center justify-end text-center card-actions text-bg-red">
            <FaChevronLeft className="text-lg cursor-pointer text-bg-sec" />
            <h1 className="text-3xl">
              01 <span className="text-lg"> /03</span>
            </h1>
            <FaChevronRight className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
