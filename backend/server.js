const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.port || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/expenditure', require('./routes/expenditureRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
