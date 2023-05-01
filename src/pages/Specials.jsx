import React from "react";
import { popularMeal } from "../constant";
import { styles } from "../styles";
import { RiStarFill } from "react-icons/ri";

const Specials = () => {
  return (
    <div className="py-16" id="ourspecials">
      <div className="leading-10 text-center">
        <p className={` ${styles.sectionSubText}text-bg-black`}>ONLINE STORE</p>
        <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
          Popular Meals
        </h1>
      </div>
      <div
        className={`py-4 ${styles.paddingX} mr-6 flex flex-row gap-3 overflow-y-auto`}
      >
        {popularMeal.map((meal, index) => (
          <div
            className="px-4 pt-2 shadow card rounded-2xl w-[18pc] bg-bg-sec min-w-[18pc]"
          >
            <figure className="">
              <img
                src={meal.image}
                alt="meal"
                className="object-cover w-[200px] h-[200px]"
              />
            </figure>
            <div className={`items-center justify-center text-center`}>
              <div className="flex justify-center my-4 text-center text-bg-red">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <h1 className="font-bold capitalize">{meal.title}</h1>
              <div className={`${styles.btnRed}  mb-6 mt-2 mx-5`}>
                Add to cart ₦{meal.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
