import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IBookingAnswer } from "../../models/IBookings";
import axios from "axios";

export const ConfirmBooking = () => {
  const params = useParams();
  const [objData, setObjData] = useState<IBookingAnswer>();

  useEffect(() => {
    axios("http://localhost:8000/booking/" + params.id).then((resp) => {
      setObjData(resp.data);
    });
  }, [params.id]);

  return (
    <>
      <h1>Thank you for your booking!</h1>
      <p>{objData?.information.name}</p>
      <p>{`You are welcome ${objData?.date} at ${objData?.time}`}</p>
      <p>{`We have sent an confirmation email to ${objData?.information.email}`}</p>
    </>
  );
};
