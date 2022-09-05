import React from "react";
import "../../styles/contact.scss";

export const Contact = () => {
  return (
    <div className="wrapper">
      {/* <Navigation></Navigation> */}
      <div className="contact">
        <p className="contact-text">Contact</p>
        <div className="image-box">
          <img
            className="contactImage"
            src="https://www.homedoo.com/wp-content/uploads/2016/04/AK-A_48_Urban_Garden_32.jpg"
            alt="our restaurant"
          />
        </div>
        <div className="contact-form">
          <form action="" method="post">
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your name..."
            />
            <input
              className="contact-input"
              type="text"
              name="email"
              placeholder="Your email..."
            />
            <textarea
              className="contact-input"
              name="message"
              placeholder="Write something..."
            ></textarea>
            <input className="contact-submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <p>
            Phone <br></br> 070-865-70-08
          </p>
          <p>
            Email <br></br> restaurant@gmail.com
          </p>
          <p>
            Adress <br></br> Gustavlundsvägen 151D <br></br> 168 80 Bromma
          </p>
        </div>
      </div>
    </div>
  );
};
