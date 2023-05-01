import { React, useState } from "react";
import { styles } from "../styles";
import { testimoniesData } from "../constant";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonies = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, description } = testimoniesData[index];

  const checkNumber = (number) => {
    if (number > testimoniesData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimoniesData.length - 1;
    }
    return number;
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="py-16" id="testimonies">
      <div className="leading-10 text-center">
        <p className={` ${styles.sectionSubText}text-bg-black`}>testimonial</p>
        <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
          What they are saying about us
        </h1>
      </div>
      <div className="flex-col items-center justify-center mt-8 shadow-2xl md:flex-row card card-side">
        <figure className="rounded-[100px] shadow my-4 md:ml-6 bg-bg-sec md:w-full w-[12pc]">
          <img src={image} alt="testify" className="md:h-[16pc] h-[10pc] object-cover" />
        </figure>
        <div className="flex flex-col md:ml-4 card-body">
          <div className="flex flex-col-reverse items-center">
            <p className={`${styles.sectionSubText} font-bold text-xl`}>{name}</p>
            <div className="">
              <FaQuoteLeft className="text-2xl md:text-6xl text-bg-red" />
              <h1 className="p-2 pt-4 mt-4 text-justify border-l-2 md:p-6 border-bg-red">
                {description}
              </h1>
            </div>
          </div>
          <div className="items-center justify-end text-center card-actions text-bg-red">
            <button onClick={prev}>
              <FaChevronLeft className="text-lg cursor-pointer" />
            </button>
            <h1 className="text-4xl">
              0{id} <span className="text-lg"> /04</span>
            </h1>
            <button onClick={next}>
              <FaChevronRight className="text-lg cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
