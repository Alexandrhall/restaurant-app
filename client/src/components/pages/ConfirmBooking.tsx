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
      <h1 className="welcomeMsg">Thank you for your booking!</h1>
      <div className="bookingInfo">
        {/* <p>{objData?.information.name}</p>
        <p>{`You are welcome ${objData?.date} at ${objData?.time}`}</p>
        <p>{`We have sent an confirmation email to ${objData?.information.email}`}</p> */}

        <h2> {`${objData?.information.name}`}</h2>
        <p>{`You are welcome ${objData?.date} at ${objData?.time}`}</p>
        <p>{`Your booking information:`}</p>
        <p>{`Name: ${objData?.information.name}`}</p>
        <p>{`Phone: +46${objData?.information.phone}`}</p>
        <p>{`Email: ${objData?.information.email}`}</p>
        <p>{`People: ${objData?.persons}`}</p>
        <p>{`We here at 10s hope you enjoy your stay!`}</p>
        <p>{`If you have any questions please contact us on the information below.`}</p>
        <p>{`Phone: 070-865-70-08 Email: group10restaurant@gmail.com`}</p>
      </div>
    </>
  );
};
