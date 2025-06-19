const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get expenditure' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set expenditure' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update expenditure ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete expenditure ${req.params.id}` })
})

module.exports = router
