import "./Wod.scss";
import { useNavigate } from "react-router";

const Wod = () => {
  const navigator = useNavigate();

  return (
    <>
      <div onClick={() => navigator("/exercise")} className="wod">
        <div className="wod-image">
          <img className="wod-img" src="wod.svg" alt="workout of the day" />
        </div>
      </div>
    </>
  );
};

export default Wod;
