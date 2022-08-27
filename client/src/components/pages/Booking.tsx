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
  const [calDate, setCalDate] = useState(new Date());

  return (
    <>
      <h1>Booking page</h1>
      {/* <Calendar onChange={setCalDate} value={calDate} /> */}
      {/* <p>{dateValue.toString()}</p> */}

      <form action="http://localhost:8000/booking" method="post">
        <DatePicker
          selected={dateValue}
          onChange={(date: Date) => setDateValue(date)}
          showTimeSelect
          showWeekNumbers
          timeIntervals={180}
          calendarStartDay={1}
          timeFormat="HH:mm"
          popperPlacement="bottom"
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 18),
            setHours(setMinutes(new Date(), 0), 21),
          ]}
          dateFormat={"dd/MM/yyyy HH:mm"}
          minDate={subDays(startDate, 0)}
          maxDate={addDays(startDate, 60)}
          name="date"
          minTime={setHours(setMinutes(new Date(), 0), 18)}
          maxTime={setHours(setMinutes(new Date(), 0), 21)}
        />
        <input type="text" name="name" placeholder="First Name" />
        <input type="number" name="phone" placeholder="Phone number" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="seats" placeholder="Seats" max={6} min={1} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
