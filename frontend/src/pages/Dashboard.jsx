import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "../components/ExpenseForm"
import ExpenseItem from "../components/ExpenseItem"
import Spinner from '../components/Spinner'
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
      <hr /> <br />
      <section className="content">
        {expenses.length > 0
          ? <div className="expenses">
              <h3>All expenses</h3>
              <table border="1">
                <thead>
                  <tr>
                    <td width="90">Amount</td>
                    <td width="150">Category</td>
                    <td width="130">Date</td>
                    <td width="110">Delete</td>
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
      </section>
    </>
  )
}

export default Dashboard
