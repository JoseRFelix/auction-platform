import React, { useState, useEffect } from "react";
import "./ListingsView.scss";
import axios from "axios";
import Listing from "../Listing/Listing";

const ListingsView = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json"
      )
      .then(
        ({ data }) =>
          setListings(data.sort((a, b) => a.remainingTime - b.remainingTime)) //Sort listings remaining time in ascending order
      )
      .catch(err => setListings([]));
  }, []);

  return (
    <main className="listings-view">
      {listings ? (
        listings.map(listingInformation => (
          <Listing key={listingInformation.id} details={listingInformation} />
        ))
      ) : (
        <h1>Failed fetching listings</h1>
      )}
    </main>
  );
};

export default ListingsView;
