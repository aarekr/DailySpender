// @desc    Get expenditure
// @route   GET /api/expenditure
// @access  Private
const getExpenditure = (req, res) => {
    res.status(200).json({ message: 'Get expenditure' })
}

// @desc    Set expenditure
// @route   POST /api/expenditure
// @access  Private
const setExpenditure = (req, res) => {
    res.status(200).json({ message: 'Set expenditure' })
}

// @desc    Update expenditure
// @route   PUT /api/expenditure/:id
// @access  Private
const updateExpenditure = (req, res) => {
    res.status(200).json({ message: `Update expenditure ${req.params.id}` })
}

// @desc    Delete expenditure
// @route   DELETE /api/expenditure/:id
// @access  Private
const deleteExpenditure = (req, res) => {
    res.status(200).json({ message: `Delete expenditure ${req.params.id}` })
}

module.exports = {
    getExpenditure,
    setExpenditure,
    updateExpenditure,
    deleteExpenditure,
}
