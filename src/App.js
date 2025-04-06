import ExpenseItem from './components/ExpenseItem'



function App() {
  return (
    <div>
      <h1>Lets get started</h1>
      <p>I am Learning React!</p>
      <ExpenseItem date={new Date(2022,2,24)} location="Bangalore" title="Inurance" price="50"></ExpenseItem>
      <ExpenseItem date={new Date(2023,1,5)} location="Delhi" title="Book" price="20"></ExpenseItem>
      <ExpenseItem date={new Date(2024,10,11)} location="Hyderabad" title="Pen" price="5"></ExpenseItem>
      <ExpenseItem date={new Date(2025,4,5)} location="Mumbai" title="Laptop" price="200"></ExpenseItem>
    </div>
  );
}

export default App;
