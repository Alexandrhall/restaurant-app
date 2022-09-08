import React from "react";
import "../../styles/about.scss";
export const About = () => {
  return (
    <div className="background">
      <div className="about-cnt">
        <span className="about-title">About Us</span>
        <div className="about-card">
          <div className="about-text">
            <p>
              Since our modest beginnings in 2005 with a little space in
              Toronto’s stylish Yorkville locale, ‘Organization Name’ ‘s
              development has been enlivened with the energy to cook and serve
              solid, Indian-roused takeout food.
            </p>
            <p>
              In contrast to other Indian eateries, ‘Organization Name’ was made
              with the explicit expectation to appear as something else.
            </p>
            <p>
              We realize numerous individuals love Indian sustenance, yet a
              large number of them loathe or are unconscious of the regularly
              unfortunate fixings that make run-of-the-mill Indian nourishment
              taste so great.
            </p>
            <p>
              Our menu highlights things that utilization the sound and fragrant
              flavors, however, forgets the stuffing ghee, spread, oil, and
              overwhelming cream.
            </p>
            <hr></hr>
          </div>
          <div className="opening-hours">
            <p>Opening Hours</p>
            <p>Monday - Thursday 17:00 - 00:00 </p>
            <p>Friday 17:00 - 01:00 </p>
            <p>Saturday 13:00 - 01:00 </p>
            <p>Sunday 17:00 - 00:00 </p>
          </div>
        </div>
      </div>
    </div>
  );
};
