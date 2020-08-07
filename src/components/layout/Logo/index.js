import React from "react";

import Background from "../../../assets/logo/LOGO.svg";
import Mov from "../../../assets/logo/MOV.svg";
import Ser from "../../../assets/logo/SER.svg";
import "./style.css";

export default function Logo() {
  return (
    <div id="logo" className="cursor-pointer relative">
      <img src={Background} alt="ies" className="h-8 rounded logo z-0" />
      <div className="absolute" style={{ top: 0 }}>
        <img
          src={Mov}
          alt="mov"
          className="h-8 rounded absolute top-0 z-20 mov"
        />
        <img src={Ser} alt="ser" className="h-8 rounded z-10 ser" />
      </div>
    </div>
  );
}
