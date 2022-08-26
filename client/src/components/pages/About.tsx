import React from "react";
import "../../styles/about.scss";
import { Navigation } from "../Navigation";
export const About = () => {
  return (
    <div className="box">
      <Navigation></Navigation>
      <div className="image-container">
        <img src="../../assets/Aboutimage.png" alt="" />
      </div>
      <div className="text">
        <p className="title-text">About Us</p>
        <p className="info-text">
          Since our modest beginnings in 2005 with a little space in Toronto’s
          stylish Yorkville locale, ‘Organization Name’ ‘s development has been
          enlivened with the energy to cook and serve solid, Indian-roused
          takeout food. In contrast to other Indian eateries, ‘Organization
          Name’ was made with the explicit expectation to appear as something
          else. We realize numerous individuals love Indian sustenance, yet a
          large number of them loathe or are unconscious of the regularly
          unfortunate fixings that make run-of-the-mill Indian nourishment taste
          so great. Our menu highlights things that utilization the sound and
          fragrant flavors, however, forgets the stuffing ghee, spread, oil, and
          overwhelming cream.
        </p>
      </div>
    </div>
  );
};
