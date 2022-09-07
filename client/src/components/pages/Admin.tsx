import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import "../../styles/admin.scss";

export const Admin = () => {
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
            <div className="login-button-container">
              <Link className="admin-login-btn" to={"/admin/bookings"}>
                Login
              </Link>
            </div>
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
