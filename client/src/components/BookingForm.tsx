import axios from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { IBookingAnswer } from "../models/IBookings";
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
    persons: 0,
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

  const [answerObj, setAnswerObj] = useState<IBookingAnswer>({
    _id: "",
    information: {
      _id: "",
      name: "",
      phone: NaN,
      email: "",
    },
    persons: NaN,
    date: "",
    time: "",
  });

  const navigate = useNavigate();

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
    if (valState.persons < 1 || valState.persons > 6) {
      setErrObject((prevState) => ({
        ...prevState,
        personErr: "Persons is incorrect",
      }));
    } else {
      setErrObject((current) => {
        let temp = { ...current };
        delete temp.personErr;
        return temp;
      });
    }
  }, [valState, props]);

  useEffect(() => {
    valFormTest();
  }, [valState, props, valFormTest]);

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
        setAnswerObj({
          _id: resp.data._id,
          information: resp.data.information,
          persons: resp.data.persons,
          date: resp.data.date,
          time: resp.data.time,
        });
      });
    } else {
      return;
      // console.log(errObject);
      // console.log(Object.keys(errObject).length);
      // console.log(sendData);
    }
  };

  useEffect(() => {
    if (answerObj._id === "") return;

    navigate("/booking/confirm/" + answerObj._id);
  }, [answerObj, navigate]);

  return (
    <>
      {showErr ? (
        <>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              id="time"
              placeholder="Time"
              value={props.time}
              readOnly
            />
            <p>{errObject.timeErr}</p>
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="text" name="date" value={props.date} readOnly />
            <p>{errObject.dateErr}</p>
          </div>
          <div>
            <label htmlFor="persons">Persons</label>
            <input
              type="number"
              name="persons"
              placeholder="Persons"
              max={6}
              min={1}
              value={valState.persons}
              onChange={valOnChange}
            />
            <p>{errObject.personErr}</p>
          </div>
          <div>
            <label htmlFor="persons">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={valState.name}
              onChange={valOnChange}
            />
            <p>{errObject.usernameErr}</p>
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              value={valState.phone}
              onChange={valOnChange}
            />
            <p>{errObject.phoneErr}</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={valState.email}
              onChange={valOnChange}
            />
            <p>{errObject.emailErr}</p>
          </div>

          <button
            className="bookingBut"
            onClick={() => {
              sendForm();
              setShowErr(true);
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              placeholder="Time"
              value={props.time}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="text" name="date" value={props.date} readOnly />
          </div>
          <div>
            <label htmlFor="persons">Persons</label>
            <input
              type="number"
              name="persons"
              placeholder="Persons"
              max={6}
              min={1}
              value={valState.persons}
              onChange={valOnChange}
            />
          </div>
          <div>
            <label htmlFor="persons">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={valState.name}
              onChange={valOnChange}
            />
          </div>
          <div>
            <label htmlFor="persons">Phone number</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              value={valState.phone}
              onChange={valOnChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={valState.email}
              onChange={valOnChange}
            />
          </div>
          <button
            className="bookingBut"
            onClick={() => {
              sendForm();
              setShowErr(true);
            }}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
};
