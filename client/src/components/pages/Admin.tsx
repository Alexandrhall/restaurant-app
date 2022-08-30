import React, { useEffect, useState } from "react";
import { IBookings } from "../../../../server/models/IBookings";

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookings[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/admin/")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  });
  return (
    <div className="listWrapper">
      {bookings.map((booking) => {
        return <div>{booking.time}</div>;
      })}
    </div>
  );
};
