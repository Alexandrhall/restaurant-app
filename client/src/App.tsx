import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <div className="App">
      <h1>Restaurang booking</h1>
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
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
