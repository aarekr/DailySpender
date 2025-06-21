const asyncHandler = require('express-async-handler')
const Expenditure = require('../models/expenditureModel')
const User = require('../models/userModel')

// @desc    Get expenditure
// @route   GET /api/expenditure
// @access  Private
const getExpenditure = asyncHandler(async (req, res) => {
    const expenditureItems = await Expenditure.find({ user: req.user.id })
    res.status(200).json(expenditureItems)
})

// @desc    Set expenditure
// @route   POST /api/expenditure
// @access  Private
const setExpenditure = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body) {
        res.status(400)
        throw new Error('Please add amount and spending category')
    }
    if (!req.body.amount) {
        res.status(400)
        throw new Error('Please add amount')
    }
    if (!req.body.category) {
        res.status(400)
        throw new Error('Please add spending category')
    }
    const expenditure = await Expenditure.create({
        amount: req.body.amount,
        category: req.body.category,
        user: req.user.id,
    })
    res.status(200).json(expenditure)
})

// @desc    Update expenditure
// @route   PUT /api/expenditure/:id
// @access  Private
const updateExpenditure = asyncHandler(async (req, res) => {
    const expenditure = await Expenditure.findById(req.params.id)
    if (!expenditure) {
        res.status(400)
        throw new Error('Expenditure item not found')
    }
    const user = await User.findById(req.user.id)
    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the expenditure user
    if (expenditure.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedExpenditure = await Expenditure.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedExpenditure)
})

// @desc    Delete expenditure
// @route   DELETE /api/expenditure/:id
// @access  Private
const deleteExpenditure = asyncHandler(async (req, res) => {
    const expenditure = await Expenditure.findById(req.params.id)
    if (!expenditure) {
        res.status(400)
        throw new Error('Expenditure item not found')
    }
    const user = await User.findById(req.user.id)
    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the expenditure user
    if (expenditure.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await expenditure.deleteOne()  //remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getExpenditure,
    setExpenditure,
    updateExpenditure,
    deleteExpenditure,
}
