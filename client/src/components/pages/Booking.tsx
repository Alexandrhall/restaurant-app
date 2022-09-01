import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, subDays, addDays } from "date-fns";
import axios from "axios";
import { IBookings } from "../../models/IBookings";
import { ICustomer } from "../../models/ICustomer";
import { Link } from "react-router-dom";
import { BookingForm } from "../BookingForm";
import "react-calendar/dist/Calendar.css";

export const Booking = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [eightTeen, setEightTeen] = useState<IBookings[]>([]);
  const [twentyOne, setTwentyOne] = useState<IBookings[]>([]);

  const [timeValue, setTimeValue] = useState<string>("");

  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8000/getdate",
      data: { date: dateValue.toLocaleDateString() },
    }).then((resp) => {
      setEightTeen(resp.data.eightTeen);
      setTwentyOne(resp.data.twentyOne);
    });
  }, [dateValue]);

  return (
    <>
      <h1>Booking page</h1>
      <Calendar
        onChange={(date: Date) => {
          setDateValue(date);
          setShowForm(true);
        }}
        value={dateValue}
        minDate={subDays(startDate, 0)}
        maxDate={addDays(startDate, 60)}
      />
      {/* <DatePicker
        selected={dateValue}
        onChange={(date: Date) => setDateValue(date)}
        showWeekNumbers
        calendarStartDay={1}
        popperPlacement="bottom"
        dateFormat={"yyyy-MM-dd"}
        minDate={subDays(startDate, 0)}
        maxDate={addDays(startDate, 60)}
        name="date"
      /> */}
      {/* <button
        onClick={async () => {
          await axios({
            method: "post",
            url: "http://localhost:8000/getdate",
            data: { date: dateValue.toLocaleDateString() },
          }).then((resp) => {
            setEightTeen(resp.data.eightTeen);
            setTwentyOne(resp.data.twentyOne);
            setShowForm(true);
          });
        }}
      >
        Search
      </button> */}

      {showForm ? (
        <div>
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
          <BookingForm date={dateValue.toLocaleDateString()} time={timeValue} />
        </div>
      ) : (
        <div>
          <></>
        </div>
      )}

      {/* <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="name" placeholder="First Name" />
        <input type="number" name="phone" placeholder="Phone number" />
        <input type="email" name="email" placeholder="Email" />
        <input
          type="number"
          name="persons"
          placeholder="Persons"
          max={6}
          min={1}
        />
        <input type="submit" value="Submit" />
      </form> */}
    </>
  );
};
