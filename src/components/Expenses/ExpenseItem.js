import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);

  function buttonClickHandler() {
    console.log("Button clicked");
    setTitle("New Title");
    setPrice(price + 1);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
