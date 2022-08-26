import React from "react";
import { Navigation } from "../Navigation";
import "../../styles/home.scss";

export const Home = () => {
  return (
    <header>
      {/* <Navigation></Navigation> */}
      <div className="hero-image">
        <div className="hero-text">
          Classic Food With The Taste of Homecooked
        </div>
        <p className="book-button">Book a table</p>
      </div>
    </header>
  );
};
