import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES=[
  {
    id: "1",
    date: new Date(2023, 7, 15),
    title: "Insurance",
    price: 100,
  },
  {
    id: "2",
    date: new Date(2024, 3, 25),
    title: "Book",
    price: 10,
  },
  {
    id: "3",
    date: new Date(2024, 10, 11),
    title: "Pen",
    price: 1,
  },
  {
    id: "4",
    date: new Date(2025, 1, 14),
    title: "Laptop",
    price: 200,
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    console.log("Expense Data", expenseData);
    setExpenses((prev) => {
      return [expenseData, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
