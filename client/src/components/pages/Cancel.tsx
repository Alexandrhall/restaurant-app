import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cancel.scss";

export const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, 2500);
  });

  return (
    <>
      <div className="cancelWrap">
        <div>
          <h3>You have canceled you reservation </h3>
          <h3>See you next time!</h3>
        </div>
      </div>
    </>
  );
};
