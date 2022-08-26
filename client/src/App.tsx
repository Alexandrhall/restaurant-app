import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
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
