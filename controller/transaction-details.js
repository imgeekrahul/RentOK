const User = require('../model/user');
const Invoice = require('../model/invoice');
const Transaction = require('../model/transaction');

exports.createTransaction = async (req, res) => {
    try {
        const {userId, invoiceId, amount, status, paymentMethod} = req.body

        const userExist = await User.findOne({_id: userId})
        const invoiceExist = await Invoice.findOne({_id: invoiceId})
        if(userExist && invoiceExist && req.headers['auth-token'] === userExist.token) {
            const data = {
                userId,
                invoiceId,
                amount,
                status,
                paymentMethod
            }

            const createdTransaction = await Transaction.create(data);
            res.status(201).json({
                success: true,
                message: "Transaction created successfully !!",
                data: createdTransaction
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Something went wrong!!"
            })
        }

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to create transaction !!",
            data: err
        })
    }
}

exports.getTransactionDetailsUsingUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExist = User.findById({_id: userId})

        if(req.headers['auth-token'] === userExist.token) {
            const transactionDetails = await transactionDetails.find({user: userId})
            res.status(200).json({
                success: true,
                message: "Fetched transactional details for a user having Id: " + userExist._id,
                data: transactionDetails
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Something went wrong !!"
            })
        }
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to get details !!"
        })
    }
}

