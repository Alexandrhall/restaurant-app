import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IBookingAnswer } from "../../models/IBookings";
import "../../styles/deletebooking.scss";

export const DeleteBooking = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [objData, setObjData] = useState<IBookingAnswer>();

  useEffect(() => {
    axios.get("http://localhost:8000/booking/" + params.id).then((resp) => {
      setObjData(resp.data);
    });
  }, [params.id]);

  return (
    <>
      <div className="deleteWrap">
        <h1>Delete page</h1>
        <div className="deleteInfo">
          <div>
            <p>{`Your booking information:`}</p>
            <p>{`Name: ${objData?.information.name}`}</p>
            <p>{`Phone: +46${objData?.information.phone}`}</p>
            <p>{`Email: ${objData?.information.email}`}</p>
            <p>{`Persons: ${objData?.persons}`}</p>
            <p>{`Date: ${objData?.date}`}</p>
            <p>{`Time: ${objData?.time}`}</p>
          </div>
          <div className="deleteBut">
            <label className="delLab" htmlFor="deletBut">
              Are you sure you want to cancel you booking?
            </label>
            <button
              id="deletBut"
              onClick={async () => {
                await axios
                  .delete("http://localhost:8000/booking/delete/" + params.id)
                  .then((resp) => {
                    console.log(resp.data);
                  });
                navigate("/cancel");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
