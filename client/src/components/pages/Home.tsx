import React from "react";
import { Navigation } from "../Navigation";
import "../../styles/home.scss";

export const Home = () => {
  return (
    <div className="hero-image">
      <Navigation></Navigation>
      <div className="hero-text">
        Classic Food With The <br></br>Taste of Homecooked
        <p className="book-button">Book a table</p>
      </div>
    </div>
  );
};
