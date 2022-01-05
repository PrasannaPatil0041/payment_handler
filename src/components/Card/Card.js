import React from "react";
import "./Card.css";
import Chartbar from "./Chartbar";

const Card = (props) => {
  const allarrayValue = props.dataPoints.map((element) => element.value);
  const maxValueofArray = Math.max(...allarrayValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValueofArray}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Card;
