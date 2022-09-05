import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [errObject, setErrObject] = useState<IValidate>({});

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
      {/* <input
        type="submit"
        value="Submit"
        onSubmit={() => {
          if (validator.isEmail(emailVal) === false) {
            setErrObject((prevState) => ({
              ...prevState,
              emailErr: "Email is incorect",
            }));
          }
          if (validateUsername(nameVal) === false || nameVal.length < 4) {
            setErrObject((prevState) => ({
              ...prevState,
              usernameErr: "Username is incorect",
            }));
          }
          if (validator.isMobilePhone(phoneVal, "sv-SE") === false) {
            setErrObject((prevState) => ({
              ...prevState,
              phoneErr: "Phone number is incorrect",
            }));
          }
          if (props.time === "") {
            setErrObject((prevState) => ({
              ...prevState,
              timeErr: "Time is incorrect",
            }));
          }
          if (props.date === "") {
            setErrObject((prevState) => ({
              ...prevState,
              dateErr: "Date is incorrect",
            }));
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
      /> */}

      {errObject && (
        <div className="error">
          <p>{errObject.usernameErr}</p>
          <p>{errObject.emailErr}</p>
          <p>{errObject.phoneErr}</p>
          <p>{errObject.timeErr}</p>
        </div>
      )}

      <button
        onClick={() => {
          if (validator.isEmail(emailVal) === false) {
            setErrObject((prevState) => ({
              ...prevState,
              emailErr: "Email is incorect",
            }));
          } else {
            let temp: IValidate = { ...errObject };
            delete temp.emailErr;
            setErrObject(temp);
          }
          if (validateUsername(nameVal) === false || nameVal.length < 4) {
            setErrObject((prevState) => ({
              ...prevState,
              usernameErr: "Username is incorect",
            }));
          } else {
            delete errObject.usernameErr;
          }
          if (validator.isMobilePhone(phoneVal, "sv-SE") === false) {
            setErrObject((prevState) => ({
              ...prevState,
              phoneErr: "Phone number is incorrect",
            }));
          } else {
            delete errObject.phoneErr;
          }
          if (props.time === "") {
            setErrObject((prevState) => ({
              ...prevState,
              timeErr: "Time is incorrect",
            }));
          } else {
            delete errObject.timeErr;
          }
          if (props.date === "") {
            setErrObject((prevState) => ({
              ...prevState,
              dateErr: "Date is incorrect",
            }));
          } else {
            delete errObject.dateErr;
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
