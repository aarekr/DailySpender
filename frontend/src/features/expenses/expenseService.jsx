import axios from 'axios'

const API_URL = '/api/expenditure/'

// Create new expense
const createExpense = async (expenseData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, expenseData, config)
    return response.data
}

// Get user expenses
const getExpenditure = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Delete user expenses
const deleteExpense = async (expenseId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + expenseId, config)
    return response.data
}

const expenseService = {
    createExpense,
    getExpenditure,
    deleteExpense,
}

export default expenseService
