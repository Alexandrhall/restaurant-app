import { Link, Outlet } from "react-router-dom";
import "../styles/navigation.scss";

export const Layout = () => {
  return (
    <div className="App">
      {/* <h1>Restaurant booking</h1> */}
      <div className="navWrapper">
        <div className="logoWrapper"></div>

        <nav className="menuWrapper">
          <Link to={"/"}>Home</Link>
          <Link to={"/booking"}>Booking</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
