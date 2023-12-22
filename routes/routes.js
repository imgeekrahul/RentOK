const express = require('express');
const userDetails = require('../controller/user-details');
const invoiceDetails = require('../controller/invoice-details');
const invoiceItemDetails = require('../controller/invoice-item-details');
const transactionDetails = require('../controller/transaction-details');

const route = express.Router();

/**** Manage User Details ****/
route.post("/api/v0/add/user", userDetails.addUser);
route.put("/api/v0/update/user", userDetails.updateUser); 
route.delete("/api/v0/remove/user", userDetails.removeUser); 
route.post("/api/v0/login/user", userDetails.loginuser);
/**** Manage User Details ****/

/**** Manage Invoice Details ****/
route.post("/api/v0/create/invoice", invoiceDetails.createInvoice);
route.post("/api/v0/create/invoice-item", invoiceItemDetails.createInvoiceItem);
/**** Manage Invoice Details ****/

/**** Transaction Details ****/
route.post("/api/v0/create/transaction", transactionDetails.createTransaction);
route.get("/api/v0/get/:userId/transaction", transactionDetails.getTransactionDetailsUsingUserId);
/**** Transaction Details ****/

module.exports = route;

