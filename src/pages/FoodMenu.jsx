import React from "react";
import { popularMenu } from "../constant";
import { styles } from "../styles";
import { RiStarFill, RiHeartAddFill } from "react-icons/ri";
import { BsFillShareFill } from "react-icons/bs";

const FoodMenu = () => {
  return (
    <div className="py-16" id="menu">
      <div className="leading-10 text-center">
        <p className={` ${styles.sectionSubText}text-bg-black`}>POPULAR MENU</p>
        <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
          Amazing food you don`t want to miss
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {popularMenu.map((meal, index) => (
          <div className="px-4 pt-2 shadow-2xl card rounded-2xl w-[370px]">
            <figure className="">
              <img
                src={meal.image}
                alt="meal"
                className="object-cover w-[180px] h-[180px]"
              />
            </figure>
            <div className={`items-center`}>
              <div className="flex my-4 text-bg-red">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <h1 className="font-bold capitalize">{meal.title}</h1>
              <p>{meal.description}</p>
              <div className="flex items-center justify-between px-2 py-6">
                <p className="text-xl">₦{meal.price}</p>
                <div className="flex justify-around gap-2 text-center w-[5pc]">
                  <div className={`${styles.btnRed}`}>
                    <RiHeartAddFill />
                  </div>
                  <div className={`${styles.btnBlack}`}>
                    <BsFillShareFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
