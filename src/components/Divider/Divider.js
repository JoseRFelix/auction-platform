import React from "react";
import "./Divider.css";
import PropTypes from "prop-types";

const Divider = ({ className }) => {
  return <div className={"divider " + className}>&#8203;</div>;
};

Divider.propTypes = {
  className: PropTypes.string
};

export default Divider;
