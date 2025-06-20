const mongoose = require('mongoose')

const expenditureSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, 'Please add amount']
        },
        category: {
            type: String,
            required: [true, 'Please add spending category']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Expenditure', expenditureSchema)
