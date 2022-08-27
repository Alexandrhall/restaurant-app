import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Button } from "./Button";

export const Home = () => {
  return (
    <div className="hero-image">
      {/* <Navigation></Navigation> */}
      <div className="hero-text">
        Classic Food With The <br></br>Taste of Homecooked
        <p className="book-button">Book a table</p>
        <Link className="book-button" to={"/booking"}>
          Book a table
        </Link>
      </div>
      <Button></Button>
    </div>
  );
};
