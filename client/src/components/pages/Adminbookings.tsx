import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import { Booking } from "./Booking";
import "../../styles/adminbookings.scss";

export const Adminbookings = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/admin/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="background">
      <div className="bookings-container">
        <div className="bookings-card">
          <div className="text-container">
            <p className="text-title">Date</p>
            <p className="text-title">Name: & E-mail</p>
            <p className="text-title">Amount</p>
            <p className="text-title">Time</p>
            <p className="text-title">Phone</p>
          </div>
          <div className="listWrapper">
            {bookings.map((booking) => {
              return (
                <div className="single-booking">
                  <p className="booking-info">{booking.date}</p>
                  <p className="booking-info">
                    {booking.information.name} {booking.information.email}
                  </p>
                  <p className="booking-info">{booking.persons}</p>
                  <p className="booking-info">{booking.time}</p>
                  <p className="booking-info">{booking.information.phone}</p>
                  <div className="editBtn">
                    <Link to={"/admin/bookings/" + booking._id}>Edit</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
