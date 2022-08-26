import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
