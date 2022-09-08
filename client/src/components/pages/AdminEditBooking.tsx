import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import "../../styles/editbooking.scss";
export const AdminEditBooking = () => {
  const [singleBooking, setSingleBooking] = useState<IBookings>();

  const params = useParams();
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/admin/bookings/" + id)
      .then((response) => response.json())
      .then((data) => setSingleBooking(data));
  }, []);

  return (
    <div className="background">
      <div className="edit-booking-cnt">
        <div className="edit-booking-card">
          <span className="edit-title">
            Edit booking for {singleBooking?.information.name}
          </span>
          <form className="edit-booking-form">
            <label htmlFor="persons">Number of persons</label>
            <input
              className="booking-info-edit"
              type="number"
              name="persons"
              value={singleBooking?.persons}
            ></input>
            <label htmlFor="time">Time</label>
            <select
              className="booking-info-edit"
              name="time"
              value={singleBooking?.time}
            >
              <option value="" disabled selected>
                Select time
              </option>
              <option value="18">18</option>
              <option value="21">21</option>
            </select>
            <label htmlFor="date">Date</label>
            <input
              className="booking-info-edit"
              type="text"
              name="date"
              value={singleBooking?.date}
            ></input>

            <span className="edit-title-light">Edit personal information</span>
            <label htmlFor="name">Name</label>
            <input
              className="booking-info-edit"
              type="text"
              name="name"
              value={singleBooking?.information.name}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              className="booking-info-edit"
              type="text"
              name="email"
              value={singleBooking?.information.email}
            ></input>
            <label htmlFor="number">Number</label>
            <input
              className="booking-info-edit"
              type="number"
              name="phone"
              value={singleBooking?.information.phone}
            ></input>
            <div className="button-container">
              <Link className="back-btn" to={"/admin/bookings"}>
                Back
              </Link>
              <Link className="save-btn" to={"/admin/bookings"}>
                Save
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
