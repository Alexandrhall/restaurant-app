import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import "../../styles/editbooking.scss";

export interface changedBooking {
  persons: number;
  information: {
    name: string;
    email: string;
    phone: string;
  };
  date: string;
  time: string;
}
export interface newBooking {
  persons: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export const AdminEditBooking = () => {
  const [singleBooking, setSingleBooking] = useState<IBookings>();

  const initialstate = {
    persons: 0,
    date: "",
    time: "",
    information: {
      name: "",
      phone: "",
      email: "",
    },
  };
  const initialstateTwo = {
    persons: 0,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  };
  const [valState, setValState] = useState<newBooking>(initialstateTwo);

  const [valStateTwo, setValStateTwo] = useState<changedBooking>(initialstate);

  const params = useParams();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/admin/bookings/" + id).then((resp) => {
      const data = resp.data;
      setValState({
        date: data.date,
        time: data.time,
        persons: data.persons,
        name: data.information.name,
        phone: data.information.phone,
        email: data.information.email,
      });
    });
  }, []);

  useEffect(
    () =>
      setValStateTwo({
        date: valState.date,
        time: valState.time,
        persons: valState.persons,
        information: {
          name: valState.name,
          phone: valState.phone,
          email: valState.email,
        },
      }),
    [valState]
  );

  const editedBooking = () => {
    axios
      .put("http://localhost:8000/admin/bookings/" + id + "/edit", valState)
      .then((resp) => {
        navigate("/admin/bookings");
      });
  };

  const valOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateTime = (e: ChangeEvent<HTMLSelectElement>) => {
    setValState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="background">
      <div className="edit-booking-cnt">
        <div className="edit-booking-card">
          <span className="edit-title">Edit booking for {valState.name}</span>
          <form className="edit-booking-form">
            <label htmlFor="persons">Number of persons</label>
            <input
              className="booking-info-edit"
              type="number"
              name="persons"
              value={valState.persons}
              onChange={valOnChange}
              min="1"
              max="6"
            ></input>
            <label htmlFor="time">Time</label>
            <select
              onChange={updateTime}
              className="booking-info-edit"
              name="time"
              value={valState.time}
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
              value={valState.date}
              onChange={valOnChange}
            ></input>

            <span className="edit-title-light">Edit personal information</span>
            <label htmlFor="name">Name</label>
            <input
              className="booking-info-edit"
              type="text"
              name="name"
              value={valState.name}
              onChange={valOnChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              className="booking-info-edit"
              type="text"
              name="email"
              value={valState.email}
              onChange={valOnChange}
            ></input>
            <label htmlFor="number">Number</label>
            <input
              className="booking-info-edit"
              type="number"
              name="phone"
              value={valState.phone}
              onChange={valOnChange}
            ></input>
            <div className="button-container">
              <Link className="back-btn" to={"/admin/bookings"}>
                Back
              </Link>
              <div className="save-btn" onClick={editedBooking}>
                Save
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
