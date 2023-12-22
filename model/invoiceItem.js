const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    invoiceNumber: {
        type: String
    },
    quantity: {
        type: Number
    },
    type: {
        type: String
    },
    code: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    taxRate: {
        type: String
    }
}, {
    timestamps: true
})

const invoiceItem = mongoose.model("invoiceItem", ItemSchema);
module.exports = invoiceItem;