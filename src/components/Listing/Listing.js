import React from "react";
import "./Listing.scss";
import Divider from "../Divider/Divider";
import Countdown from "../Countdown/Countdown";

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
      <div className="bid-details">
        <div className="section status">
          <div className="status__container">
            <h6>Tempo Restante</h6>
            <Countdown initialTimerTime={100000} />
          </div>
          <Divider className="status__divider" />
          <div className="status__container">
            <h6>Ultima Oferta</h6>
            <h1 className="status__bid">R$ 29.250</h1>
          </div>
        </div>
        <div className="section car-details">
          <h4>Honda fit 1.4 LXL 8V Gasolina 4p automatico 2007</h4>
        </div>
        <div className="section car-condition">
          <h4>2007</h4>
          <Divider className="status__divider" />
          <h4>92.610 KM</h4>
        </div>
        <button className="bid-details__button">Fazer oferta</button>
      </div>
    </div>
  );
};

export default Listing;
