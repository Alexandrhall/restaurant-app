import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/pages/Button";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Button />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          {/* <Route path="/booking/form" element={<BookingForm />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
