import React from "react";
import "./Chartbar.css";

const Chartbar = (props) => {
  let barFillHeight = "0%";
  console.log(props.value);
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
