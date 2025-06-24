import { useState } from "react"
import { useDispatch } from "react-redux"
import { createExpense } from '../features/expenses/expenseSlice'

function ExpenseForm() {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    //const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatchEvent(createExpense({amount}, {category}))
    }
    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Expense</label>
                <input type="text" name="amount" id="amount" value={amount} 
                    onChange={(e) => setAmount(e.target.value)} />
                <input type="text" name="category" id="category" value={category}
                    onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add expense</button>
            </div>
        </form>
    </section>
}

export default ExpenseForm
