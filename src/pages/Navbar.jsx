import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import {
  BsFillChatQuoteFill,
  BsFillPersonLinesFill,
  BsFillPieChartFill,
  BsPersonVcard,
  BsSearch,
  BsBagHeart,
} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { logo } from "../assets";
import { styles } from "../styles";

const navLinks = [
  { title: "Our specials", id: "ourspecials", icon: <BsFillChatQuoteFill /> },
  { title: "Menu", id: "menu", icon: <BsFillPersonLinesFill /> },
  { title: "About us", id: "about us", icon: <BsFillPieChartFill /> },
  { title: "Testimonies", id: "testimonies", icon: <BsFillChatQuoteFill /> },
  { title: "Contact", id: "contact", icon: <BsPersonVcard /> },
];
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        styles.paddingX
      } navbar w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-bg-sec" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-[18px] font-bold cursor-pointer flex text-bg-red">
            Crave Foods
          </p>
        </Link>
      </div>
      <div className="my-2 navbar-center">
        <ul className="flex-row hidden gap-8 list-none md:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "border-b-4 border-bg-red"
                  : "text-bg-black"
              } hover:border-b-4 hover:border-bg-red text-[18px] font-medium cursor-pointer duration-500 px-1`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="flex-row hidden gap-2 list-none ftext-center md:flex">
          <li className="hover:text-[20px] hover:text-bg-red text-[18px]  font-bold cursor-pointer duration-500">
            <BsSearch />
          </li>
          <li className="hover:text-[20px] hover:text-bg-red text-[18px]  font-bold cursor-pointer duration-500">
            <BsBagHeart />
          </li>
          <li className="hover:text-[20px] hover:text-bg-red text-[18px]  font-bold cursor-pointer duration-500">
            <AiOutlineUser />
          </li>
        </ul>
        <div className="flex items-center justify-end flex-1 md:hidden">
          <Hamburger toggled={toggle} toggle={setToggle} />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-6 absolute top-16 right-0 my-2 min-w-[140px] min-h-screen bg-bg-white duration-500`}
          >
            <div></div>
            <div className="flex flex-col justify-start flex-1 gap-4 list-none menu">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-[13pc] font-poppins font-medium cursor-pointer text-[16px] hover:text-[18px] duration-500 hover:border-b-4 hover:border-bg-red ${
                    active === nav.title ? "border-b-4 border-bg-red" : ""
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a className="duration-500" href={`#${nav.id}`}>
                    <span className="text-[26px] text-bg-red duration-500">
                      {nav.icon}
                    </span>
                    {nav.title}
                  </a>
                </li>
              ))}

              <div className="flex justify-around p-4 mt-10 bg-bg-sec">
                <BsSearch className="hover:text-[28px] hover:text-bg-red text-[26px] font-bold cursor-pointer duration-500 border-bg-sec hover:border-b-2 hover:border-bg-red" />
                <BsBagHeart className="hover:text-[28px] hover:text-bg-red text-[26px] font-bold cursor-pointer duration-500 border-bg-sec hover:border-b-2 hover:border-bg-red" />
                <AiOutlineUser className="hover:text-[28px] hover:text-bg-red text-[26px] font-bold cursor-pointer duration-500 border-bg-sec hover:border-b-2 hover:border-bg-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
