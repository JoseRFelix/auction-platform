import React from "react";
import "./Divider.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

const Divider = ({ className }) => {
  return <div className={classnames("divider", className)}>&#8203;</div>;
};

Divider.propTypes = {
  className: PropTypes.string
};

export default Divider;
