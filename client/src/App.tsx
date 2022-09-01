import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Booking } from "./components/pages/Booking";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Admin } from "./components/pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          {/* <Route path="/booking/form" element={<BookingForm />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
