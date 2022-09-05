import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
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

  const [sendData, setSendData] = useState<boolean>(false);

  const handleClick = () => {
    if (validator.isEmail(emailVal) === false || emailVal === "") {
      setErrObject((prevState) => ({
        ...prevState,
        emailErr: "Email is incorect",
      }));
    } else {
      delete errObject.emailErr;
      // let temp: IValidate = { ...errObject };
      // delete temp.emailErr;
      // setErrObject(temp);
    }
    if (
      validateUsername(nameVal) === false ||
      nameVal.length < 4 ||
      nameVal === ""
    ) {
      setErrObject((prevState) => ({
        ...prevState,
        usernameErr: "Username is incorect",
      }));
    } else {
      delete errObject.usernameErr;
      // let temp: IValidate = { ...errObject };
      // delete temp.usernameErr;
      // setErrObject(temp);
    }
    if (
      validator.isMobilePhone(phoneVal, "sv-SE") === false ||
      phoneVal === ""
    ) {
      setErrObject((prevState) => ({
        ...prevState,
        phoneErr: "Phone number is incorrect",
      }));
    } else {
      delete errObject.phoneErr;
      // let temp: IValidate = { ...errObject };
      // delete temp.phoneErr;
      // setErrObject(temp);
    }
    if (props.time === "") {
      setErrObject((prevState) => ({
        ...prevState,
        timeErr: "Time is incorrect",
      }));
    } else {
      delete errObject.timeErr;
      // let temp: IValidate = { ...errObject };
      // delete temp.timeErr;
      // setErrObject(temp);
    }
    if (props.date === "") {
      setErrObject((prevState) => ({
        ...prevState,
        dateErr: "Date is incorrect",
      }));
    } else {
      delete errObject.dateErr;
      // let temp: IValidate = { ...errObject };
      // delete temp.dateErr;
      // setErrObject(temp);
    }

    if (sendData === true) {
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
      console.log(sendData);
    }
  };

  const sendForm = async () => {
    if (Object.keys(errObject).length === 0) {
      setSendData(true);
    } else {
      setSendData(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errObject).length === 0) {
      setSendData(true);
    } else {
      setSendData(false);
    }
  });

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

      {errObject && (
        <div className="error">
          <p>{errObject.usernameErr}</p>
          <p>{errObject.emailErr}</p>
          <p>{errObject.phoneErr}</p>
          <p>{errObject.timeErr}</p>
        </div>
      )}

      {/* <button
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

          if (sendData === true) {
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
            console.log(sendData);
          }
        }}
      >
        Submit
      </button> */}
      <button
        onClick={() => {
          handleClick();
          // await sendForm();
        }}
      >
        Submit
      </button>
    </>
  );
};
