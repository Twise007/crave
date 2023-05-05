import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

import { Link } from "react-router-dom";
import { sideMenu } from "../constant";

const Sidebar = ({ children }) => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(true);

  return (
    <div className="flex text-bg-sec">
      <div
        className={`${
          open ? "w-auto" : "w-[70px]"
        } relative duration-500 bg-bg-sec rounded-lg`}
      >
        <div className="p-3">
          <BsArrowLeftCircle
            size={30}
            className={`cursor-pointer absolute -right-8 top-[57px] duration-500 bg-bg-red hover:bg-bg-sec hover:text-bg-red rounded-full p-1 ${
              !open && "rotate-180 duration-500"
            }
              `}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={`flex flex-col pr-2`}>
          <ul className="">
            {sideMenu.map((menu, index) => (
              <Link to={menu.link} key={index}>
                <li
                  key={index}
                  className={`${
                    active === menu.link
                      ? "text-bg-red "
                      : ""
                  } flex items-center gap-5 p-2 m-3 my-8 text-sm rounded-lg cursor-pointer text-bg-black bg-bg-white hover:bg-bg-red hover:text-bg-white `}
                  onClick={() => setActive(menu.link)}
                >
                  <span className="block float-left text-2xl">
                    {React.createElement(menu.icon, { size: "20" })}
                  </span>
                  <span
                    className={`text-base font-meduim ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 h-auto ml-8 overflow-y-scroll rounded-lg bg-bg-sec">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
