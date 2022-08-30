import React, { useState } from "react";
import axios from "axios";

export const Button = () => {
  const dataVar = {
    name: "Pellson",
    age: 34,
    car: "Tesla",
  };

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
          axios({
            method: "post",
            url: "http://localhost:8000/create",
            data: dataVar,
          }).then((resp) => {
            console.log(resp.data);
          });
        }}
      >
        Create
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
