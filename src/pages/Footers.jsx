import React from "react";
import { logo } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Design from "../component/Design";

const Footers = () => {
  return (
    <div className="flex flex-col">
      <div
        className={`${styles.padding} z-10 -mb-20 bg-bg-white sm:mx-16 mx-6 rounded-2xl border border-bg-red`}
      >
        <Contact />
      </div>
      <footer className="p-10 mt-4 bg-black py-28 footer">
        <Link
          to="/"
          className="items-center justify-center cursor-pointer text-bg-white"
        >
          <div>
            <img src={logo} alt="logo" className="object-cover w-10 h-10" />
          </div>
          <p>
            <span className={`${styles.heroSubText}`}>Crave Foods.</span>
            <br />
            Providing nourishing foods since 1992
          </p>
        </Link>
        <div className={`uppercase tracking-wider text-bg-sec`}>
          <span className="text-lg footer-title">Services</span>
          <a href="#ourspecials" className="link link-hover">
            Our specials
          </a>
          <a href="#menu" className="link link-hover">
            menu
          </a>
        </div>
        <div className={`uppercase tracking-wider text-bg-sec`}>
          <span className="text-lg footer-title">Company</span>
          <a href="#about us" className="link link-hover">
            About us
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
          <a href={`/`} className="link link-hover">
            Jobs
          </a>
        </div>
        <div className={`uppercase tracking-wider text-bg-sec`}>
          <span className="text-lg footer-title">Legal</span>
          <a href={`/`} className="link link-hover">
            Terms of use
          </a>
          <a href={`/`} className="link link-hover">
            Privacy policy
          </a>
          <a href={`/`} className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
      <Design />
    </div>
  );
};

export default Footers;
