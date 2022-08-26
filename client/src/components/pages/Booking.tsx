import { useState } from "react";
import Calendar from "react-calendar";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(new Date());

  console.log(dateValue);
  return (
    <>
      <h1>Booking page</h1>
      <Calendar onChange={setDateValue} value={dateValue} />
    </>
  );
};
