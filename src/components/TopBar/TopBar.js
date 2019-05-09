import React from "react";
import logo from "../../assets/logo.png";
import "./TopBar.css";
import Divider from "../Divider/Divider";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as CaretIcon } from "../../assets/caret.svg";

const TopBar = () => {
  return (
    <nav className="top-bar">
      <div className="top-bar__image-container">
        <img className="top-bar__image" src={logo} alt="Logo" />
        <Divider className="top-bar__divider" />
        <h3 className="top-bar__phone-number">
          <PhoneIcon /> (11) 3569 - 3465
        </h3>
      </div>
      <div className="user-box">
        <UserIcon className="user-box__user-icon" />
        <h3>User Test</h3>
        <CaretIcon className="user-box__caret" />
      </div>
    </nav>
  );
};

export default TopBar;
