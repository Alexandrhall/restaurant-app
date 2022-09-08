import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cancel.scss";

export const Cancel = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cancelWrap">
        <div>
          <h3>You have canceled your reservation </h3>
          <h3>See you next time!</h3>
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
