import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="App">
      <h1>Restaurant booking</h1>
      <Outlet></Outlet>
    </div>
  );
};
