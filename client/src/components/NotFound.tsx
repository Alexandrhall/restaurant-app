import { useNavigate } from "react-router-dom";
import "../styles/notfound.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="notFoundWrap">
        <div>
          <h3> Oops! now you clicked wrong</h3> <br />
          <button
            className="homeBut"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to home page
          </button>
        </div>
      </div>
    </>
  );
};
