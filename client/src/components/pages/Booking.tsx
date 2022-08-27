import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(new Date());

  // console.log(dateValue);
  return (
    <>
      <h1>Booking page</h1>
      <Calendar onChange={setDateValue} value={dateValue} />
      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="name" placeholder="First Name" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
