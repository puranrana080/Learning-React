import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [check,setCheck] =useState(false)

const addExpenseHandler=()=>{
  setCheck(true)
}
const cancelClickHandler=()=>{
  setCheck(false)
}

const saveExpenseDataHandler=(enteredExpenseData)=>{
  const expenseData={...enteredExpenseData,id:Math.random().toString()}
  props.onAddExpense(expenseData)
  setCheck(false)

}

  return (
    <div className="new-expense">

      {!check && <button onClick={addExpenseHandler}>Add Expense</button>}

      {check && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClickHandler} />
      )}
    </div>
  );
}

export default NewExpense;
