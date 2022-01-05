import "./ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();

  return (
    <div className="expensedate">
      <div className="expensemonth">{Month}</div>
      <div className="expenseyear">{Year}</div>
      <div className="expenseday">{Day}</div>
    </div>
  );
}

export default ExpenseDate;
