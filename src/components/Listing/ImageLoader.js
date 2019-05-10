import React, { useState } from "react";
import PropTypes from "prop-types";

//Wrapper for image; changes class of image to loaded after lazy loading
const ImageLoader = ({ src, alt, className }) => {
  const [classNames, setClassNames] = useState(
    `${className ? className : ""} img-loading`
  );
  const onLoad = () => {
    setClassNames(`${className ? className : ""} img-loaded`);
  };

  return <img src={src} alt={alt} onLoad={onLoad} className={classNames} />;
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ImageLoader;
