import React from "react";
import SideBarDetails from "../component/SideBarDetails";
import { pizza } from "../assets";

const Pizza = () => {
  return (
    <div>
      <SideBarDetails title='pizza' sideBarImage={pizza}/>
    </div>
  );
};

export default Pizza;
