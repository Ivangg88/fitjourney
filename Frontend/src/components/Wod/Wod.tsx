import "./Wod.scss";
import { useNavigate } from "react-router";

const Wod = () => {
  const navigator = useNavigate();

  return (
    <>
      <div onClick={() => navigator("/exercise")} className="wod">
        <div className="wod-image">
          <span className="wod-title">Daily plan</span>
          <img className="wod-img" src="wod.svg" alt="workout of the day" />
        </div>
      </div>
    </>
  );
};

export default Wod;
