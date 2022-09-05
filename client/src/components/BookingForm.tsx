import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
// import axios from "axios";
import validator from "validator";
import { IValidate } from "../models/IValidate";
import { validateUsername } from "../validate/validate";

interface IBookFormProps {
  date: string;
  time: string;
}

export const BookingForm = (props: IBookFormProps) => {
  const [nameVal, setNameVal] = useState<string>("");
  const [phoneVal, setPhoneVal] = useState<string>("");
  const [emailVal, setEmailVal] = useState<string>("");
  const [personsVal, setPersonsVal] = useState<number>(1);

  let errObject: IValidate = {};

  // const [errObject, setErrObject] = useState<IValidate>({});

  // let errHtml = <></>;

  const renderErrHtml = () => {
    let errHtml = <></>;

    if (Object.keys(errObject).length !== 0) {
      errHtml = (
        <>
          <p>{errObject.dateErr}</p>
          <p>{errObject.phoneErr}</p>
        </>
      );
    }
    console.log(errHtml);

    return errHtml;
  };

  useEffect(() => {}, [errObject]);

  return (
    <>
      {/* <form action="http://localhost:8000/booking" method="post"></form> */}
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

      <button
        onClick={() => {
          if (validator.isEmail(emailVal) === false) {
            Object.assign(errObject, { emailErr: "Email is incorect" });
          }
          if (validateUsername(nameVal) === false || nameVal.length < 4) {
            Object.assign(errObject, { usernameErr: "Username is incorect" });
          }
          if (validator.isMobilePhone(phoneVal, "sv-SE") === false) {
            Object.assign(errObject, { phoneErr: "Phone number is incorrect" });
          }
          if (props.time === "") {
            Object.assign(errObject, { timeErr: "Time is incorrect" });
          }
          if (props.date === "") {
            Object.assign(errObject, { dateErr: "Date is incorrect" });
          }

          if (Object.keys(errObject).length === 0) {
            axios({
              method: "post",
              url: "http://localhost:8000/booking",
              data: {
                name: nameVal,
                phone: phoneVal,
                email: emailVal,
                date: props.date,
                time: props.time,
                persons: personsVal,
              },
            }).then((resp) => {});
          } else {
            console.log(errObject);
          }
        }}
      >
        Submit
      </button>
    </>
  );
};
