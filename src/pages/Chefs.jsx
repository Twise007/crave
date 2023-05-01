import React from "react";
import { styles } from "../styles";
import { popularMeal } from "../constant";

const Chefs = () => {
  return (
    <div className="text-center">
      <p className={`${styles.sectionSubText}`}>Our Staff</p>
      <div className="border-t-8 ">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 ">
          {popularMeal.map((meal, index) => (
            <div className="p-4 pt-2 card w-[280px] border-2 rounded-none">
              <figure className="flex flex-col border-b-2 ">
                <img
                  src={meal.image}
                  alt="meal"
                  className="object-cover w-[200px] h-[200px]"
                />
                <h1 className="uppercase">JoHN DOE</h1>
              </figure>
              <div className={`items-center justify-center text-center`}>
                <h1 className="pt-2 capitalize">{meal.title}</h1>
                <div className="flex items-center pt-2 justify-evenly">
                  <div className={`${styles.btnRed}`}></div>
                  <div className={`${styles.btnRed}`}></div>
                  <div className={`${styles.btnRed}`}></div>
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
