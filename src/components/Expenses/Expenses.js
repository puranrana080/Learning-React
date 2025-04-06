import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
