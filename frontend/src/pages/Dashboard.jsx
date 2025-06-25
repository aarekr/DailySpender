import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "../components/ExpenseForm"
import Spinner from '../components/Spinner'
import { getExpenses, reset } from "../features/expenses/expenseSlice"

function Dashboard() {
  const navigate = useNavigate()
  //const dispatch = useDispatch()
  //const { user } = useSelector((state) => state.auth)
  const user = ""
  //const { goals, isLoading, isError, message } = useSelector((state) => state.expenses)

  /*useEffect(() => {
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
  }, [user, navigate, isError, message, dispatch])*/

  /*if (isLoading) {
    return <Spinner />
  }*/

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Expenses overview</p>
      </section>
      <ExpenseForm />
    </>
  )
}

export default Dashboard
