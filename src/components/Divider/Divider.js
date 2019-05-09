import React from "react";
import "./Divider.css";

const Divider = ({ className }) => {
  return <div className={"divider " + className}>&#8203;</div>;
};

export default Divider;
