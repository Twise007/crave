import React from "react";
import { styles } from "../styles";
import { coffee } from "../assets";
import { MdDeliveryDining } from "react-icons/md";

const Coffee = () => {
  return (
    <div>
      <p className={`${styles.sideBarTitle}`}>coffee</p>
      <div className="h-full hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={coffee}
            alt="meal"
            className="ronded-lg w-[8rem] md:w-[24rem]"
          />
          <div>
            <p className="flex items-center justify-center gap-1 p-2 mb-1 leading-4 text-black duration-500 border rounded-full cursor-pointer bg-bg-white border-bg-black hover:bg-bg-black hover:text-bg-white">
              Faster Food Service
              <MdDeliveryDining color="red" className="text-3xl" />
            </p>
            <h1
              className={`${styles.sectionHeadText} text-bg-red leading-none`}
            >
              get delivered while it`s hot.
            </h1>
            <p className="py-6 text-bg-black">
              Bring together your discussions membership and content. <br />
              Start your 7-day free trail
            </p>
            <button className={`${styles.btnBlack}`}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
