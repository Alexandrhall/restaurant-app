import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IBookingAnswer } from "../../models/IBookings";
import axios from "axios";
import "../../styles/confirmbooking.scss";

export const ConfirmBooking = () => {
  const params = useParams();
  const [objData, setObjData] = useState<IBookingAnswer>();

  useEffect(() => {
    axios.post("http://localhost:8000/booking/" + params.id).then((resp) => {
      setObjData(resp.data);
    });
  }, [params.id]);

  return (
    <>
      <div className="bookWrapper">
        <h1 className="thankMsg">Thank you for your booking!</h1>
        <h2> {`${objData?.information.name}`}</h2>
        <p>{`You are welcome ${objData?.date} at ${objData?.time}`}</p>
        <div className="bookingInfo">
          <div className="infoMsg">
            <div>
              <p>{`Your booking information:`}</p>
              <p>{`Name: ${objData?.information.name}`}</p>
              <p>{`Phone: +46${objData?.information.phone}`}</p>
              <p>{`Email: ${objData?.information.email}`}</p>
              <p>{`Persons: ${objData?.persons}`}</p>
            </div>
          </div>
          <div>
            <div>
              <p>{`We here at 10´s hope you will enjoy your stay!`}</p>
              <p>{`If you have any questions please contact us on the information below.`}</p>
            </div>
            <div className="contact">
              <p>{`Phone: 070-865-70-08`}</p>
              <p>{`Email: group10restaurant@gmail.com`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
