import React from "react";
import "./Divider.scss";
import PropTypes from "prop-types";

const Divider = ({ className }) => {
  return <div className={`divider ${className ? className : ""}`}>&#8203;</div>;
};

Divider.propTypes = {
  className: PropTypes.string
};

export default Divider;
