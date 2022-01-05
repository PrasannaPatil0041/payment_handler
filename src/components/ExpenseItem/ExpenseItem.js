import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React from "react";

function ExpenseItem(props) {
  return (
    <div className="expenseclass">
      <ExpenseDate date={props.date} />
      <div className="expenseinfo">
        <h2>{props.title}</h2>
        <div className="expenseh3">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
