import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, subDays, addDays } from "date-fns";

export const Booking = () => {
  const [dateValue, setDateValue] = useState(
    new Date(setHours(setMinutes(new Date(), 0), 18))
  );
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h1>Booking page</h1>
      <Calendar onChange={setDateValue} value={dateValue} />
      {/* <p>{dateValue.toString()}</p> */}

      <DatePicker
        selected={dateValue}
        onChange={(date: Date) => setDateValue(date)}
        showTimeSelect
        showWeekNumbers
        timeIntervals={180}
        timeFormat="HH:mm"
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 21),
          setHours(setMinutes(new Date(), 0), 18),
        ]}
        dateFormat={"dd/MM/yyyy HH:mm"}
        minDate={subDays(startDate, 0)}
        maxDate={addDays(startDate, 60)}
      />

      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="name" placeholder="First Name" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
