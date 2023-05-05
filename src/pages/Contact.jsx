import React from "react";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div id="contact">
      <div className="leading-10 text-center">
        <p className={` ${styles.sectionSubText}text-bg-black`}>contact us</p>
        <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
          get our specials discount
        </h1>
      </div>
      <div className="items-center justify-center pt-8 text-center">
        <p>
          Enter your email address and complete your subscription to get our
          special offerd
        </p>
        <div className="flex p-1 mt-4 border rounded-full border-bg-red">
          <input type="email" placeholder="example@abc.com" className="w-full mx-1 bg-transparent rounded-full outline-none md:mx-4 text-bg-black"/>
          <button className="p-1 duration-500 border-2 rounded-full cursor-pointer border-bg-white bg-bg-red hover:bg-bg-white hover:border-2 hover:border-bg-red text-bg-white hover:text-bg-red md:p-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
