import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const Design = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-2 bg-black border-t md:justify-between border-bg-white text-bg-white md:flex-row">
      <div
        className="flex items-center gap-2 text-center cursor-pointer link link-hover"
        onClick={() =>
          window.open(
            "https://www.behance.net/gallery/169407969/Crave-Restaurant-Landing-Page",
            "_blank"
          )
        }
      >
        <FaRegHandPointRight />
        Designed by Design Prodigy
      </div>
      <div className="hidden sm:block">
        Copyright © 2023 - All right reserved by CRAVE Foods Ltd
      </div>
      <div
        className="flex items-center gap-2 text-center cursor-pointer link link-hover"
        onClick={() => window.open("https://tee-o.netlify.app", "_blank")}
      >
        <FaRegHandPointRight color="white" />
        Develop by TeeTech
      </div>
    </div>
  );
};

export default Design;
