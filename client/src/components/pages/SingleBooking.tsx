import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookings } from "../../models/IBookings";
import { ObjectId } from "mongoose";
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

  useEffect(() => {
    fetch("http://localhost:8000/admin/bookings/" + id)
      .then((response) => response.json())
      .then((data) => setSinglebooking(data));
    console.log(singleBooking);
  }, []);

  return (
    <>
      <p>{singleBooking?.information.name}</p>
      <p>{singleBooking?.information.email}</p>
      <p>{singleBooking?.date}</p>
    </>
  );
};
