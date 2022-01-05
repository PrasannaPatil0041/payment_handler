import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveTheEnterData = (enterExpenseData) => {
    const expense = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
  };
  const [isEditing, setisEditng] = useState(false);
  const clickShow = () => {
    setisEditng(true);
  };

  const dataTransfer = () => {
    setisEditng(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <div className="new_div">
          <button className="buttonAdd" onClick={clickShow}>
            {" "}
            Add Expense{" "}
          </button>
        </div>
      )}
      ;
      {isEditing === true && (
        <ExpenseForm
          cancelHandler={dataTransfer}
          onSaveExpenseData={saveTheEnterData}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
