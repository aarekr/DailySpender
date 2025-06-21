const express = require('express')
const router = express.Router()
const { getExpenditure,
        setExpenditure,
        updateExpenditure,
        deleteExpenditure } = require('../controllers/expenditureController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getExpenditure)

router.post('/', protect, setExpenditure)

router.put('/:id', protect, updateExpenditure)

router.delete('/:id', protect, deleteExpenditure)

module.exports = router
