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
    </div>
  );
}

export default App;
