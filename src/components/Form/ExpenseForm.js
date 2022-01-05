import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterAmount("");
    setEnterTitle("");
    setEnterDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expenses">
          <div className="element1">
            <div className="new-expense_control">
              <label> Title </label>
              <input
                type="text"
                value={enterTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>

            <div className="new-expense_control">
              <label> Amount </label>
              <input
                type="number"
                value={enterAmount}
                onChange={amountChangeHandler}
              ></input>
            </div>
          </div>

          <div className="element2">
            <div className="new-expense_control">
              <label> Date </label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enterDate}
                min="2018-01-01"
                max="2021-31-12"
              ></input>
            </div>
            <button
              type="button"
              onClick={props.cancelHandler}
              className="buttonUpper2"
            >
              Cancel
            </button>
            <button type="submit" className="buttonUpper">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
