import { ChangeEvent, useState } from "react";

interface IBookFromProps {
  date: string;
  time: string;
}

export const BookingForm = (props: IBookFromProps) => {
  const [nameVal, setNameVal] = useState<string>("");
  const [phoneVal, setPhoneVal] = useState<string>("");
  const [emailVal, setEmailVal] = useState<string>("");
  const [personsVal, setPersonsVal] = useState<number>(1);

  return (
    <>
      <form action="http://localhost:8000/booking" method="post">
        <input type="text" name="time" value={props.time} readOnly />
        <input type="text" name="date" value={props.date} readOnly />
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={nameVal}
          onChange={(name: ChangeEvent<HTMLInputElement>) =>
            setNameVal(name.target.value)
          }
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          value={phoneVal}
          onChange={(number: ChangeEvent<HTMLInputElement>) =>
            setPhoneVal(number.target.value)
          }
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={emailVal}
          onChange={(email: ChangeEvent<HTMLInputElement>) =>
            setEmailVal(email.target.value)
          }
        />
        <input
          type="number"
          name="persons"
          placeholder="Persons"
          max={6}
          min={1}
          value={personsVal}
          onChange={(number: ChangeEvent<HTMLInputElement>) =>
            setPersonsVal(parseInt(number.target.value))
          }
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
