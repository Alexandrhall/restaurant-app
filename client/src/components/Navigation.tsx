import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navWrapper">
      <div className="logoWrapper">
        <Link to={"/"}>Här är våran logga</Link>
      </div>
      <div className="menuWrapper">
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};
