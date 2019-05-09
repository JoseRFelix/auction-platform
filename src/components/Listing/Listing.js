import React from "react";
import "./Listing.css";
import Divider from "../Divider/Divider";

const Listing = () => {
  return (
    <div className="listing">
      <div className="image-container">
        <img
          src={
            "https://uploads.instacarro.com/JPEG_20180825_1305445b79a2d044791c001a61224a313739693525860090.jpg"
          }
          alt="car"
        />
        <h4 className="image-container__details ">ver detalhes</h4>
      </div>
      <div className="status">
        <Divider />
      </div>
    </div>
  );
};

export default Listing;
