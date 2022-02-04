import Data from "../Data.json";
import "./Template.css";

const DataText = () => {
  return (
    <div className="data">
      <p>{Data[0].title}</p>
      <div className="description">
        <p>{Data[0].description}</p>
      </div>
    </div>
  );
};

export default DataText;
