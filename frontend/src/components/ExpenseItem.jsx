import { useDispatch } from "react-redux"
import { deleteExpense } from '../features/expenses/expenseSlice'

function ExpenseItem({ expense }) {
    const dispatch = useDispatch()
    return (
        <div className="expense">
            <div>{new Date(expense.createdAt.toLocalString('en-US'))}</div>
            <h2>{expense.amount} {expense.category}</h2>
            <button onClick={() => dispatch(deleteExpense(expense._id))} className="close">X</button>
        </div>
    )
}

export default ExpenseItem
