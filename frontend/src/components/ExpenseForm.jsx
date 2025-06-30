import { useState } from "react"
import { useDispatch } from "react-redux"
import { createExpense } from '../features/expenses/expenseSlice'

function ExpenseForm() {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createExpense({amount, category}))
    }
    // <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Expense</label>
                <input type="text" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Beer">Beer</option>
                    <option value="Food">Food</option>
                    <option value="Eating out">Eating out</option>
                    <hr />
                    <option value="Fuel">Fuel</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Home">Home</option>
                    <hr />
                    <option value="Public transport">Public transport</option>
                    <option value="Travel">Travel</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add expense</button>
            </div>
        </form>
    </section>
}

export default ExpenseForm
