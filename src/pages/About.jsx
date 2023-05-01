import React from 'react';
import Chefs from './Chefs'
import { styles } from '../styles';

const About = () => {
  return (
    <div>
      <div className="py-16" id="about us">
        <div className="leading-10 text-center">
          <p className={` ${styles.sectionSubText}text-bg-black`}>
            what we stand for
          </p>
          <h1 className={`${styles.sectionHeadText} text-bg-red leading-none`}>
            get to know us and our staffs
          </h1>
        </div>
        <p className={`${(styles.paddingX)} pt-6`}>
          Crave is an online restaurant, where delicious cuisine served and
          exceptional dining experience is provide for customers. Whether you're
          looking for a romantic dinner for two or a family feast, our menu
          features a wide variety of mouth-watering dishes to satisfy any
          palate. From appetizers to desserts, our talented chefs use only the
          freshest ingredients to create dishes that are both flavorful and
          visually appealing. With a commitment to providing outstanding
          customer service, we strive to make your online dining experience
          seamless and enjoyable from start to finish. So sit back, relax, and
          let us take care of your dining needs.
        </p>
      </div>
      <Chefs />
    </div>
  );
}

export default About