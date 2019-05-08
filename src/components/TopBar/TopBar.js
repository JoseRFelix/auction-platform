import React from "react";
import logo from "../../assets/logo.png";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";

const TopBar = () => {
  return (
    <nav className="top-bar">
      <div>
        <img src={logo} />
        <PhoneIcon />
      </div>
    </nav>
  );
};

export default TopBar;
