import React from "react";

import "./ExpensesFilter.css";
const date = new Date(2018, 0, 3);
console.log(date);

const ExpensesFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter Year</label>
        <select select={props.selected} onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option selected value="2021">
            2021
          </option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
