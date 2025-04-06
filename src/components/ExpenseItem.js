import './ExpenseItem.css'

function ExpenseItem(){
    return <div className='expense-item'>
        <div>06 April 2025</div>
        <div className='expense-item__location'>Delhi</div>
        <div className='expense-item__description'>
            <h2>Book</h2>
            <div className='expense-item__price'>$20</div>
        </div>
    </div>
}
export default ExpenseItem;