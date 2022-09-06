import axios from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import validator from "validator";
import { IvalChange, IValidate } from "../models/IValidate";
import { validateUsername } from "../validate/validate";

interface IBookFormProps {
  date: string;
  time: string;
}

export const BookingForm = (props: IBookFormProps) => {
  const initalState = {
    name: "",
    phone: "",
    email: "",
    persons: 1,
  };

  const [valState, setValState] = useState<IvalChange>(initalState);

  const [errObject, setErrObject] = useState<IValidate>({
    emailErr: "",
    usernameErr: "",
    phoneErr: "",
    timeErr: "",
    dateErr: "",
  });

  const [sendData, setSendData] = useState<boolean>(false);
  const [showErr, setShowErr] = useState<boolean>(false);

  const valOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const valFormTest = useCallback(() => {
    if (validator.isEmail(valState.email) === false) {
      setErrObject((prevState) => ({
        ...prevState,
        emailErr: "Email is incorect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp.emailErr;
        return temp;
      });
    }
    if (validateUsername(valState.name) === false || valState.name.length < 4) {
      setErrObject((prevState) => ({
        ...prevState,
        usernameErr: "Username is incorect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp.usernameErr;
        return temp;
      });
    }
    if (validator.isMobilePhone(valState.phone, "sv-SE") === false) {
      setErrObject((prevState) => ({
        ...prevState,
        phoneErr: "Phone number is incorrect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp["phoneErr"];
        return temp;
      });
    }
    if (props.time === "") {
      setErrObject((prevState) => ({
        ...prevState,
        timeErr: "Time is incorrect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp.timeErr;
        return temp;
      });
    }
    if (props.date === "") {
      setErrObject((prevState) => ({
        ...prevState,
        dateErr: "Date is incorrect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp.dateErr;
        return temp;
      });
    }
  }, [valState, errObject, props]);

  useEffect(() => {
    valFormTest();
  }, [valState, props]);

  const bolTest = () => {
    if (Object.keys(errObject).length < 1) {
      setSendData(true);
    } else {
      setSendData(false);
    }
  };

  useEffect(() => {
    bolTest();
  });

  const sendForm = () => {
    if (sendData === true) {
      axios({
        method: "post",
        url: "http://localhost:8000/booking",
        data: {
          name: valState.name,
          phone: valState.phone,
          email: valState.email,
          date: props.date,
          time: props.time,
          persons: valState.persons,
        },
      }).then((resp) => {
        setValState({ ...initalState });
      });
    } else {
      console.log(errObject);
      console.log(Object.keys(errObject).length);
      // console.log(sendData);
    }
  };

  return (
    <>
      {/* <form action="http://localhost:8000/booking" method="post"></form> */}
      <input type="text" name="time" value={props.time} readOnly />
      <input type="text" name="date" value={props.date} readOnly />
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={valState.name}
        // onChange={(name: ChangeEvent<HTMLInputElement>) =>
        //   setNameVal(name.target.value)
        // }
        onChange={valOnChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone number"
        value={valState.phone}
        // onChange={(number: ChangeEvent<HTMLInputElement>) =>
        //   setPhoneVal(number.target.value)
        // }
        onChange={valOnChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={valState.email}
        // onChange={(email: ChangeEvent<HTMLInputElement>) =>
        //   setEmailVal(email.target.value)
        // }
        onChange={valOnChange}
      />
      <input
        type="number"
        name="persons"
        placeholder="Persons"
        max={6}
        min={1}
        value={valState.persons}
        // onChange={(number: ChangeEvent<HTMLInputElement>) =>
        //   setPersonsVal(parseInt(number.target.value))
        // }
        onChange={valOnChange}
      />

      {showErr && (
        <div className="error">
          <p>{errObject.usernameErr}</p>
          <p>{errObject.emailErr}</p>
          <p>{errObject.phoneErr}</p>
          <p>{errObject.timeErr}</p>
          <p>{sendData.toString()}</p>
        </div>
      )}

      <button
        onClick={() => {
          sendForm();
          setShowErr(true);
        }}
      >
        Submit
      </button>
    </>
  );
};
