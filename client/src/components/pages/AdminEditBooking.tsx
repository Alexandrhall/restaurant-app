import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <form>
      <h2>Edit booking for {singleBooking?.information.name}</h2>

      <input
        className="Something"
        type="number"
        name="persons"
        value={singleBooking?.persons}
      ></input>

      <select className="Something" name="time" value={singleBooking?.time}>
        <option value="" disabled selected>
          Select time
        </option>
        <option value="18">18</option>
        <option value="21">21</option>
      </select>

      <input
        className="Something"
        type="text"
        name="date"
        value={singleBooking?.date}
      ></input>

      <h3>Edit personal information for {singleBooking?.information.name}</h3>

      <input
        className="Something"
        type="text"
        name="name"
        value={singleBooking?.information.name}
      ></input>

      <input
        className="Something"
        type="text"
        name="email"
        value={singleBooking?.information.email}
      ></input>

      <input
        className="Something"
        type="number"
        name="phone"
        value={singleBooking?.information.phone}
      ></input>
      <button className="Something">Back</button>
      <button className="Something">Save</button>
    </form>
  );
};
