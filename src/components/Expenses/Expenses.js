import React,{useState} from "react"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css";
import Card from "../UI/Card"

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState("2023")

const changeFilterHandler=(selectedYear)=>{
  setFilteredYear(selectedYear)
}
const filteredExpenses=props.expenses.filter((item)=>(item.date.getFullYear()==filteredYear))

  return (
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}></ExpensesFilter>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
