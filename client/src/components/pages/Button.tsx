import React, { useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Button = () => {
  return (
    <>
      <button
        onClick={async () => {
          axios
            .get("http://localhost:8000")
            .then((resp) => console.log(resp.data));
        }}
      >
        Fetch
      </button>
      <button
        onClick={async () => {
          axios
            .post("http://localhost:8000")
            .then((resp) => console.log(resp.data));
        }}
      >
        Post
      </button>
      <button
        onClick={async () => {
          axios
            .post("http://localhost:8000/createbook")
            .then((resp) => console.log(resp.data));
        }}
      >
        Post book
      </button>
      <button
        onClick={async () => {
          axios
            .post("http://localhost:8000/test")
            .then((resp) => console.log(resp.data));
        }}
      >
        Create test
      </button>
    </>
  );
};
