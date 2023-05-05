import React from "react";
import SideBarDetails from "../component/SideBarDetails";
import { wedCake } from "../assets";

const Cakes = () => {
  return (
  <div>
    <SideBarDetails title='cakes' sideBarImage={wedCake}/>
  </div>
  );
};

export default Cakes;
