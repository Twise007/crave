import React from "react";
import { styles } from "../styles";
import { MdDeliveryDining } from "react-icons/md";

const SideBarDetails = ({ title, sideBarImage }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between gap-2 mt-2 sm:flex-row">
        <p className={`${styles.sideBarTitle} shadow-lg px-2 `}>{title}</p>
        <p className="flex items-center justify-center gap-1 p-2 leading-4 text-black duration-500 border rounded-full cursor-pointer bg-bg-white border-bg-black hover:bg-bg-black hover:text-bg-white">
          Fast <span className="hidden sm:block">delivery</span>
          <MdDeliveryDining color="red" className="text-3xl" />
        </p>
      </div>
      <div className="h-full hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={sideBarImage}
            alt="meal"
            className="ronded-lg w-[8rem] md:w-[16rem] lg:w-[34rem] object-contain"
          />
          <div>
            <h1
              className={`${styles.sectionHeadText} text-bg-red leading-none`}
            >
              get delivered while it's hot.
            </h1>
            <p className="py-6 text-bg-black">
              Bring together your discussions membership and content. <br />
              Start your 7-day free trail
            </p>
            <button className={`${styles.btnBlack}`}>Get Started</button>
          </div>
        </div>
      </div>
      {/* <div
        className="h-screen hero"
        style={{
          backgroundImage: `url(${sideBarImage})`,
        }}
      >
        <div className="bg-opacity-20 hero-overlay"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1
              className={`${styles.sectionHeadText} text-bg-red leading-none`}
            >
              get delivered while it's hot.
            </h1>
            <p className="py-4 text-bg-white">
              Bring together your discussions membership and content. <br />
              Start your 7-day free trail
            </p>
            <button className={`${styles.btnBlack}`}>Get Started</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SideBarDetails;
