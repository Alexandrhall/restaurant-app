import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";
import axios from "axios";
import { IBookings } from "../../models/IBookings";
import { BookingForm } from "../BookingForm";
import "react-calendar/dist/Calendar.css";
import "../../styles/bookings.scss";

export const Booking = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const [eightTeen, setEightTeen] = useState<IBookings[]>([]);
  const [twentyOne, setTwentyOne] = useState<IBookings[]>([]);
  const [timeValue, setTimeValue] = useState<string>("");
  const startDate: Date = new Date();

  const renderButtonHtml = () => {
    let eightHtml: JSX.Element = <></>;
    let twentHtml: JSX.Element = <></>;

    if (15 - eightTeen.length <= 0) {
      eightHtml = (
        <>
          <button
            name="time"
            id="18"
            className="fullbooked"
            disabled
            onClick={async (e) => {
              setTimeValue("");
            }}
          >{`18:00 (Fully booked)`}</button>
        </>
      );
    } else {
      eightHtml = (
        <>
          <button
            id="18"
            name="time"
            value={"18:00"}
            onClick={async (e) => {
              setTimeValue(e.currentTarget.value);
              document.getElementById("18")?.classList.add("checked");
              if (
                document.getElementById("21")?.classList.contains("checked")
              ) {
                document.getElementById("21")?.classList.remove("checked");
              }
            }}
          >{`18:00 (${15 - eightTeen.length} available)`}</button>
        </>
      );
    }

    if (15 - twentyOne.length <= 0) {
      twentHtml = (
        <>
          <button
            name="time"
            id="21"
            className="fullbooked"
            disabled
            onClick={async (e) => {
              setTimeValue("");
            }}
          >{`21:00 (Full booked)`}</button>
        </>
      );
    } else {
      twentHtml = (
        <>
          <button
            id="21"
            name="time"
            value={"21:00"}
            onClick={async (e) => {
              setTimeValue(e.currentTarget.value);
              document.getElementById("21")?.classList.add("checked");
              if (
                document.getElementById("18")?.classList.contains("checked")
              ) {
                document.getElementById("18")?.classList.remove("checked");
              }
            }}
          >{`21:00 (${15 - twentyOne.length} available)`}</button>
        </>
      );
    }

    const rendHtml: JSX.Element = (
      <>
        {eightHtml}
        {twentHtml}
      </>
    );

    return rendHtml;
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8000/getdate",
      data: { date: dateValue.toLocaleDateString("sv-SE") },
    }).then((resp) => {
      setEightTeen(resp.data.eightTeen);
      setTwentyOne(resp.data.twentyOne);
    });
  }, [dateValue]);

  return (
    <>
      <div className="bookBack">
        <h1>Booking page</h1>
        <div className="bookWrap">
          <div className="calAndBut">
            <Calendar
              onChange={(date: Date) => {
                setDateValue(date);
                setTimeValue("");
                document.getElementById("18")?.classList.remove("checked");
                document.getElementById("21")?.classList.remove("checked");
              }}
              value={dateValue}
              minDate={subDays(startDate, 0)}
              maxDate={addDays(startDate, 60)}
            />
            <div className="radioBut">{renderButtonHtml()}</div>
          </div>

          <div className="formWrap">
            <BookingForm
              date={dateValue.toLocaleDateString("sv-SE")}
              time={timeValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};
