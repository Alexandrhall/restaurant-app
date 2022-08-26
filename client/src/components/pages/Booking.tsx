import { useState } from "react";
import Calendar from "react-calendar";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(new Date());

  // console.log(dateValue);
  return (
    <>
      <h1>Booking page</h1>
      <Calendar onChange={setDateValue} value={dateValue} />
      <p>{dateValue.toString()}</p>

      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="name" placeholder="First Name" />
        <input type="submit" value="submit" />
        {/* <input type="date" value={dateValue.toString("yyyy-MM-dd")} /> */}
      </form>
    </>
  );
};
