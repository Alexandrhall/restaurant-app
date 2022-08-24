import React from "react";
import "./App.css";
import axios from "axios";

function App() {
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
    </div>
  );
}

export default App;
