import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import "../../styles/singlebooking.scss";
import { ObjectId } from "mongoose";
import axios from "axios";
import { Booking } from "./Booking";
export const SingleBooking = () => {
  //   const [singleBooking, setSingleBooking] = useState<IBookings>({
  //     _id: ObjectId(),
  //     information: {
  //       _id: ObjectId(),
  //       name: "",
  //       phone: 0,
  //       email: "",
  //     },
  //     persons: 0,
  //     date: "",
  //     time: "",
  //   });

  const [singleBooking, setSinglebooking] = useState<IBookings>();

  const params = useParams();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/admin/bookings/" + id)
      .then((response) => response.json())
      .then((data) => setSinglebooking(data));
    console.log(singleBooking);
  }, []);

  const deleteBooking = () => {
    axios
      .delete("http://localhost:8000/admin/bookings/" + id + "/delete")
      .then(() => navigate("/admin/bookings"));
  };

  return (
    <>
      <div className="background">
        <div className="single-booking-cnt">
          <div className="single-booking-card">
            <p>Customer Name:</p>
            <p className="single-booking-info">
              {singleBooking?.information.name}
            </p>
            <p>Customer Email:</p>
            <p className="single-booking-info">
              {singleBooking?.information.email}
            </p>
            <p>Customer Phone:</p>
            <p className="single-booking-info">
              {singleBooking?.information.phone}
            </p>
            <p>Date & Time booked:</p>
            <p className="single-booking-info">
              {singleBooking?.time} <br></br>
              {singleBooking?.date}
            </p>
            <p>Number of people:</p>
            <p className="single-booking-info">{singleBooking?.persons}</p>
            <div className="button-container">
              <div className="delete-button" onClick={deleteBooking}>
                Delete
              </div>
              <Link className="edit-button" to={"/admin/bookings/:id/edit"}>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
