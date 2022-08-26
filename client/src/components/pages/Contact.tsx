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
    </div>
  );
};
