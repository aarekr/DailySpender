const express = require('express')
const router = express.Router()
const { getExpenditure,
        setExpenditure,
        updateExpenditure,
        deleteExpenditure } = require('../controllers/expenditureController')

router.get('/', getExpenditure)

router.post('/', setExpenditure)

router.put('/:id', updateExpenditure)

router.delete('/:id', deleteExpenditure)

module.exports = router
