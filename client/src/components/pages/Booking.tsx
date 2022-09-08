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
  const [showForm, setShowForm] = useState<boolean>(false);
  const startDate: Date = new Date();

  const renderRadioHtml = () => {
    let eightHtml: JSX.Element = <></>;
    let twentHtml: JSX.Element = <></>;

    if (15 - eightTeen.length <= 0) {
      eightHtml = (
        <>
          <input
            type="radio"
            name="time"
            id="18"
            value={"18:00"}
            disabled
            onClick={async (e) => {
              setTimeValue("");
            }}
          />
          <label className="fullBook" htmlFor="18">
            18:00 is fullbooked
          </label>
        </>
      );
    } else {
      eightHtml = (
        <>
          <input
            type="radio"
            name="time"
            id="18"
            value={"18:00"}
            onClick={async (e) => {
              setTimeValue(e.currentTarget.value);
            }}
          />
          <label htmlFor="18">18:00 ({15 - eightTeen.length} available)</label>
        </>
      );
    }

    if (15 - twentyOne.length <= 0) {
      twentHtml = (
        <>
          <input
            type="radio"
            name="time"
            id="21"
            value={"21:00"}
            disabled
            onClick={async (e) => {
              setTimeValue("");
            }}
          />
          <label className="fullBook" htmlFor="21">
            21:00 is fullbooked
          </label>
        </>
      );
    } else {
      twentHtml = (
        <>
          <input
            type="radio"
            name="time"
            id="21"
            value={"21:00"}
            onClick={async (e) => {
              setTimeValue(e.currentTarget.value);
            }}
          />
          <label htmlFor="21">21:00 ({15 - twentyOne.length} available)</label>
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
          <Calendar
            onChange={(date: Date) => {
              setDateValue(date);
              setShowForm(true);
              setTimeValue("");
            }}
            value={dateValue}
            minDate={subDays(startDate, 0)}
            maxDate={addDays(startDate, 60)}
          />

          <div className="radioBut">{renderRadioHtml()}</div>
          <div className="formWrap">
            <BookingForm
              date={dateValue.toLocaleDateString("sv-SE")}
              time={timeValue}
            />
          </div>
        </div>

        {/* {showForm ? (
          <>
            <div className="radioBut">{renderRadioHtml()}</div>
            <div className="formWrap">
              <BookingForm
                date={dateValue.toLocaleDateString("sv-SE")}
                time={timeValue}
              />
            </div>
          </>
        ) : (
          <></>
        )} */}
      </div>
    </>
  );
};
