import React from "react";
import { styles } from "../styles";
import { staffs } from "../constant";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Chefs = () => {
  return (
    <div className="text-center">
      <p className={`${styles.sectionSubText}`}>Our Staffs</p>
      <div className="border-t-8">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-8 ">
          {staffs.map((staff, index) => (
            <div className="p-4 pt-2 card w-[280px] border-2 rounded-none">
              <figure className="flex flex-col border-b-2 ">
                <img
                  src={staff.image}
                  alt="meal"
                  className="object-cover w-[200px] h-[230px]"
                />
                <h1 className="uppercase">{staff.name}</h1>
              </figure>
              <div className={`items-center justify-center text-center`}>
                <h1 className="pt-2 capitalize">{staff.title}</h1>
                <div className="flex items-center pt-2 justify-evenly">
                  <div
                    className={`${styles.btnRed}`}
                    key={index}
                    onClick={() => window.open(staff.fb, "_blank")}
                  >
                    <BsFacebook />
                  </div>
                  <div
                    className={`${styles.btnRed}`}
                    key={index}
                    onClick={() => window.open(staff.tw, "_blank")}
                  >
                    <BsTwitter />
                  </div>
                  <div
                    className={`${styles.btnRed}`}
                    key={index}
                    onClick={() => window.open(staff.li, "_blank")}
                  >
                    <BsLinkedin />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
