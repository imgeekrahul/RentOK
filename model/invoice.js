const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    invoiceDate: {
        type: String
    },
    transactionDate: {
        type: String
    },
    paymentDate: {
        type: String
    },
    supplier_Name: {
        type: String
    },
    supplier_Tax: {
        type: String
    },
    supplier_Address_Line1: {
        type: String
    },
    supplier_Address_Line2: {
        type: String
    },
    supplier_PostCode: {
        type: String
    },
    supplier_City: {
        type: String
    },
    supplier_Country: {
        type: String
    },
    customer_Name: {
        type: String
    },
    customer_Tax: {
        type: String
    },
    customer_Email: {
        type: String
    },
    customer_Address_Line1: {
        type: String
    },
    customer_Address_Line2: {
        type: String
    },
    customer_PostCode: {
        type: String
    },
    customer_City: {
        type: String
    },
    customer_Country: {
        type: String
    },
    customer_Order_Id: {
        type: String
    }
}, {
    timestamps: true
})

const Invoice = mongoose.model("invoice", InvoiceSchema);

module.exports = Invoice;