import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";

export const Navigation = () => {
  return (
    <div className="navWrapper">
      <div className="logoWrapper">
        {/* <Link to={"/"}>Här är våran logga</Link> */}
      </div>
      <div className="menuWrapper">
        <Link className="menuText" to={"/about"}>
          About Us
        </Link>
        <Link className="menuText" to={"/contact"}>
          Contact
        </Link>
        <Link className="menuText" to={"/Booking"}>
          Booking
        </Link>
      </div>
    </div>
  );
};
