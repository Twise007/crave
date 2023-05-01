import React from "react";
import { popularMeal } from "../constant";
import { styles } from "../styles";
import { RiStarFill } from "react-icons/ri";

const Specials = () => {
  return (
    <div className="py-16" id="ourspecials">
      <div className="text-center">
        <p className="text-bg-black">ONLINE STORE</p>
        <h1 className="text-bg-red text-[48px]">Popular Meals</h1>
      </div>
      <div className="flex gap-4 mt-4 overflow-x-auto">
        {popularMeal.map((meal, index) => (
          <div className="shadow-xl card w-96">
            <figure className="pt-10">
              <img src={meal.image} alt="meal" className="object-cover w-36 h-36" />
            </figure>
            <div className="items-center leading-3 text-center card-body">
              <div className="flex my-4 text-bg-red">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p>{meal.country}</p>
              <h2 className="text-2xl capitalize">{meal.title}</h2>
              <div className="card-actions">
                <button className={`${styles.btnRed}`}>
                  Add to cart{" "}
                  <span className="p-1 border-l-2">₦{meal.price}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
