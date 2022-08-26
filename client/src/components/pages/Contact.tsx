import React from "react";
import { Navigation } from "../Navigation";

export const Contact = () => {
  return (
    <div className="wrapper">
      <Navigation></Navigation>
      <div className="contact">
        <p className="contact-text">Contact</p>
        <div className="contact-form">
          <form action="" method="post">
            <input type="text" name="name" placeholder="Your name..." />
            <input type="text" name="email" placeholder="Your email..." />
            <textarea
              name="message"
              placeholder="Write something..."
            ></textarea>
            <input type="submit" value="Send" />
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
