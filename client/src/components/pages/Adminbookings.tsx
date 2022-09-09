import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import "../../styles/adminbookings.scss";
import ReactDatePicker from "react-datepicker";

export const Adminbookings = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);
  const [dateValue, setDateValue] = useState<Date>(new Date());

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/admin/bookings?date=" +
          dateValue.toLocaleDateString("sv-SE")
      )
      .then((resp) => {
        setBookings(resp.data);
        console.log(resp.data);
      });
  }, [dateValue]);

  return (
    <div className="background">
      <div className="bookings-container">
        <div className="bookings-card">
          <h3>Choose a Date:</h3>
          <ReactDatePicker
            popperPlacement="bottom"
            selected={dateValue}
            onChange={(date: Date) => {
              setDateValue(date);
            }}
          ></ReactDatePicker>
          <div className="listWrapper">
            {bookings.map((booking, i) => {
              return (
                <div key={i} className="single-booking">
                  <p className="booking-mobile-text">Date:</p>
                  <p className="booking-info">{booking.date}</p>
                  <p className="booking-info">
                    <span className="booking-mobile-text">Name & Email:</span>
                    {booking.information.name} <br></br>
                    {booking.information.email}
                  </p>
                  <p className="booking-mobile-text">Persons:</p>
                  <p className="booking-info">{booking.persons}</p>
                  <p className="booking-mobile-text">Time:</p>
                  <p className="booking-info">{booking.time}</p>
                  <p className="booking-mobile-text">Phone:</p>
                  <p className="booking-info">{booking.information.phone}</p>
                  <div className="editBtn-cnt">
                    <Link
                      className="editBtn"
                      to={"/admin/bookings/" + booking._id}
                    >
                      Edit
                    </Link>
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
