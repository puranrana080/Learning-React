import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate = new Date(2025,4,6).toISOString()
    const expenseLocation="Bangalore"
    const expenseTitle = "Insurance"
    const expenseAmount = 50;


    return <div className='expense-item'>
        <div>{expenseDate}</div>
        <div className='expense-item__location'>{expenseLocation}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
}
export default ExpenseItem;