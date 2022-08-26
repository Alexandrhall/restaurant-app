import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="App">
      <h1>Restaurant booking</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/booking"}>Booking</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};
