import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h1>Booking page</h1>
      <Calendar onChange={setDateValue} value={dateValue} />
      <p>{dateValue.toString()}</p>
      <DatePicker
        selected={dateValue}
        onChange={(date: Date) => setDateValue(date)}
        showTimeSelect
      />

      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="name" placeholder="First Name" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
