import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseElement.css";
import ExpneseChart from "../ExpenseChart/ExpenseChart";
import React, { useState } from "react";
import ExpensesFilter from "../yearFilter/yearFilter";

function ExpenseElement(props) {
  const [filterdYear, setSelectedYear] = useState("2021");
  const FilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  props.yearHandle(filterdYear);

  return (
    <div className="Element">
      <div className="expenseElement">
        <ExpensesFilter
          selected={filterdYear}
          onFilterYear={FilterHandler}
        ></ExpensesFilter>
        <ExpneseChart expenses={props.giveExpense} />
        {props.handleExpense.length === 0 && (
          <div className="defaultMessage">
            <p> No Expense Found</p>
          </div>
        )}
        {props.handleExpense.length > 0 &&
          props.handleExpense.map((arrayObject) => (
            <ExpenseItem
              key={arrayObject.id}
              title={arrayObject.title}
              amount={arrayObject.amount}
              date={arrayObject.date}
            ></ExpenseItem>
          ))}
      </div>
    </div>
  );
}

export default ExpenseElement;
