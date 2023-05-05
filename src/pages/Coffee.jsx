import React from "react";
import { coffee } from "../assets";
import SideBarDetails from "../component/SideBarDetails";

const Coffee = () => {
  return (
    <div>
      <SideBarDetails title="Coffee" sideBarImage={coffee}/>
    </div>
  );
};

export default Coffee;
