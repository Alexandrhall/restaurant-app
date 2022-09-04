import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import { Booking } from "./Booking";

export const Adminbookings = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/admin/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="bookings-container">
      <div className="bookings-card">
        <div className="text-container">
          <p>Date</p>
          <p>Name: & E-mail</p>
          <p>Amount</p>
          <p>Time</p>
          <p>Phone</p>
        </div>
        <div className="listWrapper">
          {bookings.map((booking) => {
            return (
              <div>
                <p>{booking.date}</p>
                <p>
                  {booking.information.name} {booking.information.email}
                </p>
                <p>{booking.persons}</p>
                <p>{booking.time}</p>
                <p>{booking.information.phone}</p>
                <div className="editBtn">
                  <Link to={"/admin/bookings" + booking._id}>Edit</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
