import React from "react";
import "../../styles/contact.scss";

export const Contact = () => {
  return (
    <div className="background">
      <div className="contact-cnt">
        <span className="contact-title">Contact Us</span>
        <div className="contact-card">
          <form action="" className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your Name..."
            />
            <label htmlFor="email">Email</label>
            <input
              className="contact-input"
              type="text"
              name="email"
              placeholder="Your Email..."
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="contact-input"
              name="message"
              placeholder="Your Message..."
            />
            <input type="submit" value="Send" className="contact-send"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
