import { styles } from "../styles";
import { coffee } from "../assets";

const Cakes = () => {
  return (
    <div>
      <p
        className={`${styles.sectionSubText} text-end text-bg-black `}
      >
        Cakes
      </p>
      <div className="h-full hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={coffee}
            alt="meal"
            className="ronded-lg w-[8rem] md:w-[24rem]"
          />
          <div className="">
            <h1
              className={`${styles.sectionHeadText} text-bg-red leading-none`}
            >
              get delivered while it`s hot.
            </h1>
            <p className="py-6 text-bg-black">
              Bring together your discussions membership and content. <br />
              Start your 7-day free trail
            </p>
            <button className={`${styles.btnBlack}`}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cakes;
