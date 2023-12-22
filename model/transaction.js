const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'invoice',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', "failed"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Transaction = mongoose.model('transaction', transactionSchema);
module.exports = Transaction;