import ExpenseElement from "./components/ExpenseElement/ExpenseElement";
import React, { useState } from "react";
import NewExpense from "./components/Form/NewExpense";
import "./App.css";

function App() {
  const [First, Final] = useState("");
  const filerYear = (gotYear) => {
    Final(gotYear);
  };
  console.log(First);
  const Dummyexpense = [
    {
      id: "e1",
      title: "Sem Fee",
      amount: 100,
      date: new Date(2020, 11, 19),
    },
    {
      id: "e8",
      title: "Hostel",
      amount: 850,
      date: new Date(2021, 5, 8),
    },
    {
      id: "e10",
      title: "Party Contribution",
      amount: 1229,
      date: new Date(2021, 7, 22),
    },
    {
      id: "e13",
      title: "Liscence",
      amount: 419,
      date: new Date(2021, 2, 3),
    },
    {
      id: "e2",
      title: "Mess",
      amount: 483,
      date: new Date(2021, 3, 25),
    },

    {
      id: "e3",
      title: "Electric Bill",
      amount: 1893,
      date: new Date(2018, 7, 7),
    },

    {
      id: "e4",
      title: "Wifi rent",
      amount: 938,
      date: new Date(2019, 9, 13),
    },
  ];

  const [expense, setexpense] = useState(Dummyexpense);
  const addExpenseHandler = (parameter) => {
    setexpense((fullExpense) => {
      return [parameter, ...expense];
    });
  };
  const filterExpenseHandler = expense.filter((items) => {
    return items.date.getFullYear().toString() === First;
  });
  //  return React.createElement(
  //    "div",
  //    {},
  //    React.createElement(NewExpense, {}),
  //    React.createElement(ExpenseElement, {})
  //  );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseElement
        yearHandle={filerYear}
        handleExpense={filterExpenseHandler}
        giveExpense={filterExpenseHandler}
      ></ExpenseElement>
    </div>
  );
}

export default App;
