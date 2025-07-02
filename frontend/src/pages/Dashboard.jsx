import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "../components/ExpenseForm"
import ExpenseItem from "../components/ExpenseItem"
import Spinner from '../components/Spinner'
import CategoryRow from "./CategoryRow"
import { getExpenses, reset } from "../features/expenses/expenseSlice"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { expenses, isLoading, isError, message } = useSelector((state) => state.expenses)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getExpenses)
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Expenses overview</p>
      </section>
      <ExpenseForm />
      <section className="content">
        {expenses.length > 0
          ? <><hr /> <br /> <h3>Expenses per spending category</h3></>
          : null
        }
        {expenses.length > 0
          ? <table border="1">
              <thead>
                <tr>
                  <th width="150">Category</th>
                  <th width="100">Sum</th>
                  <th width="110">% of Total</th>
                </tr>
              </thead>
              <tbody>
                <CategoryRow expenses={expenses} category={'Beer'} />
                <CategoryRow expenses={expenses} category={'Food'} />
                <CategoryRow expenses={expenses} category={'Eating out'} />
                <CategoryRow expenses={expenses} category={'Fuel'} />
                <CategoryRow expenses={expenses} category={'Gifts'} />
                <CategoryRow expenses={expenses} category={'Home'} />
                <CategoryRow expenses={expenses} category={'Public transport'} />
                <CategoryRow expenses={expenses} category={'Travel'} />
                <CategoryRow expenses={expenses} category={'Other'} />
              </tbody>
            </table>
          : null
        }
      </section>
      <section className="content">
        {expenses.length > 0
          ? <div className="expenses">
              <br /> <hr /> <br />
              <h3>All expenses</h3>
              <table border="1">
                <thead>
                  <tr>
                    <th width="130">Date</th>
                    <th width="150">Category</th>
                    <th width="90">Amount</th>
                    <th width="110">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) =>
                      <ExpenseItem key={expense._id} expense={expense} />
                  )}
                </tbody>
              </table>
            </div>
          : <h3>You have not entered any expenses</h3>
        }
        <br /> <br />
      </section>
    </>
  )
}

export default Dashboard
