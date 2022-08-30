import React, { useEffect, useState } from "react";
import { IBookings } from "../../../../server/models/IBookings";
import "../../styles/admin.scss";

export const Admin = () => {
  // Kanske kan använda det här sen också
  // const [bookings, setBookings] = useState<IBookings[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/admin/")
  //     .then((response) => response.json())
  //     .then((data) => setBookings(data));
  // });
  return (
    <div className="admin-image">
      <div className="admin-login-cnt">
        <span className="admin-login-user">Admin</span>
        <div className="admin-login-card">
          <form action="/admin" className="admin-login-form">
            <label htmlFor="username">Username</label>
            <input
              className="admin-login-input"
              type="text"
              name="username"
              placeholder="Your Username..."
            ></input>
            <label htmlFor="password">Password</label>
            <input
              className="admin-login-input"
              type="password"
              name="password"
              placeholder="Your Password..."
            ></input>
            <input
              type="submit"
              value="Logga in"
              className="admin-login-btn"
            ></input>
          </form>
        </div>
      </div>
    </div>

    // Kanske kan använda det här sen
    // <div className="listWrapper">
    //   {bookings.map((booking) => {
    //     return <div>{booking.time}</div>;
    //   })}
    // </div>
  );
};
