import { useDispatch } from "react-redux"
import { deleteExpense } from '../features/expenses/expenseSlice'

function ExpenseItem({ expense }) {
    const dispatch = useDispatch()
    // <div>{new Date(expense.createdAt.toLocalString('en-US'))}</div>
    const dateSplit = expense.createdAt.split('-')
    const dateModified = dateSplit[2].split('T')[0] + '.' + dateSplit[1] + '.' + dateSplit[0]

    return (
        <tr>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{dateModified}</td>
            <td><button onClick={() => dispatch(deleteExpense(expense._id))} className="close">Delete</button></td>
        </tr>
    )
}

export default ExpenseItem
