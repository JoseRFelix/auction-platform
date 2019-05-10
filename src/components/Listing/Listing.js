import React, { useState } from "react";
import "./Listing.scss";
import Divider from "../Divider/Divider";
import Countdown from "../Countdown/Countdown";
import ImageLoader from "./ImageLoader";
import LazyLoad from "react-lazy-load";
import PropTypes from "prop-types";
import classnames from "classnames";

const Listing = ({ details }) => {
  const [bids, setBids] = useState(details.bids);
  const [isDone, setIsDone] = useState(false);

  const highestBid = bids.length
    ? bids[bids.length >= 0 ? bids.length - 1 : 0].amount
    : 0; //If length is 0 then the bid amount will be 0

  const addBid = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      setBids([
        ...bids,
        {
          amount: highestBid + 250,
          dealership: "Instacarro",
          createdAt: new Date().toISOString(),
          channel: "Mobile"
        }
      ]);
    else
      setBids([
        ...bids,
        {
          amount: highestBid + 250,
          dealership: "Instacarro",
          createdAt: new Date().toISOString(),
          channel: "Web"
        }
      ]);
  };

  return (
    <div className="listing">
      <div className="image-container">
        <LazyLoad className="image-container__lazy-load" offset={0}>
          <ImageLoader src={details.imageUrl} alt="Car" />
        </LazyLoad>
        <h4 className="image-container__details ">ver detalhes</h4>
      </div>
      <div className="bid-details">
        <div className="section status">
          <div className="status__container">
            <h6>Tempo Restante</h6>
            <Countdown
              done={setIsDone}
              initialTimerTime={details.remainingTime}
            />{" "}
          </div>
          <Divider className="status__divider" />
          <div className="status__container">
            <h6>Ultima Oferta</h6>
            <h1 className="status__bid" data-testid="currentBid">
              R$ {highestBid.toLocaleString("pt-BR")}
            </h1>
          </div>
        </div>
        <div className="section car-details">
          <h4>
            {details.make} {details.model} {details.version} {details.year}
          </h4>
        </div>
        <div className="section car-condition">
          <h4>{details.year}</h4>
          <Divider className="status__divider" />
          <h4>{details.km.toLocaleString("pt-BR")} KM</h4>
        </div>
        <button
          onClick={isDone ? null : addBid}
          className={classnames(
            "bid-details__button",
            isDone ? "bid-details__button--done" : ""
          )}
        >
          Fazer oferta
        </button>
      </div>
    </div>
  );
};

Listing.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    version: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
    remainingTime: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    bids: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        dealership: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        channel: PropTypes.oneOf(["Web", "Mobile"]).isRequired
      })
    ).isRequired
  }).isRequired
};

export default Listing;
