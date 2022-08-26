import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      Hoppsan! Nu blev det fel. <br />
      <Link to={"/"}>Klicka här får gå tillbaka</Link>
    </>
  );
};
