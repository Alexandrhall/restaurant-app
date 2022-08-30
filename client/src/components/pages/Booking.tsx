import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, subDays, addDays } from "date-fns";
import axios from "axios";
import { IBookings } from "../../models/IBookings";
import { ICustomer } from "../../models/ICustomer";
import { getValue } from "@testing-library/user-event/dist/utils";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(
    new Date(setHours(setMinutes(new Date(), 0), 18))
  );

  const [startDate, setStartDate] = useState(new Date());
  const [calDate, setCalDate] = useState<IBookings[]>([]);

  return (
    <>
      <h1>Booking page</h1>
      {/* <Calendar onChange={setCalDate} value={calDate} /> */}
      {/* <p>{dateValue.toString()}</p> */}
      <DatePicker
        selected={dateValue}
        onChange={(date: Date) => setDateValue(date)}
        // showTimeSelect
        showWeekNumbers
        //timeIntervals={180}
        calendarStartDay={1}
        // timeFormat="HH:mm"
        popperPlacement="bottom"
        // includeTimes={[
        //   setHours(setMinutes(new Date(), 0), 18),
        //   setHours(setMinutes(new Date(), 0), 21),
        // ]}
        // dateFormat={"dd/MM/yyyy"}
        dateFormat={"yyyy-MM-dd"}
        minDate={subDays(startDate, 0)}
        maxDate={addDays(startDate, 60)}
        name="date"
        // minTime={setHours(setMinutes(new Date(), 0), 18)}
        // maxTime={setHours(setMinutes(new Date(), 0), 21)}
      />
      <input
        type="radio"
        name="time"
        id="18"
        value={"18:00"}
        onClick={async (e) => {
          console.log(e.currentTarget.value);
        }}
      />
      <label htmlFor="18">18:00</label>
      <input
        type="radio"
        name="time"
        id="21"
        value={"21:00"}
        onClick={async (e) => {
          console.log(e.currentTarget.value);
        }}
      />
      <label htmlFor="21">21:00</label>
      <button
        onClick={async () => {
          axios({
            method: "post",
            url: "http://localhost:8000/test",
            data: { date: dateValue.toLocaleDateString() },
          }).then((resp) => {
            setCalDate(resp.data);
          });
        }}
      >
        Search
      </button>
      {calDate.map((booking) => {
        return (
          <>
            <p>
              {booking.information.name}
              {booking.date}
            </p>
          </>
        );
      })}
      <form action="http://localhost:8000/booking" method="post">
        {/* <DatePicker
          selected={timeValue}
          onChange={(date: Date) => setTimeValue(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={180}
          timeCaption="Time"
          dateFormat={"HH:mm"}
          popperPlacement="bottom"
        /> */}

        {/* <input type="text" name="name" placeholder="First Name" />
        <input type="number" name="phone" placeholder="Phone number" />
        <input type="email" name="email" placeholder="Email" />
        <input
          type="number"
          name="persons"
          placeholder="Persons"
          max={6}
          min={1}
        />
        <input type="submit" value="Submit" /> */}
      </form>
    </>
  );
};
