const Invoice = require('../model/invoice');
const InvoiceItem = require('../model/invoiceItem');

exports.createInvoiceItem = async (req, res) => {
    try {
        const {invoiceId, invoiceNumber, quantity, type, code, description, price, taxRate} = req.body;

        const invoiceIdExist = Invoice.findById({_id: invoiceId});
        if(invoiceIdExist && invoiceIdExist.invoiceNumber == invoiceNumber) {
            const data = {
                invoiceId,
                invoiceNumber,
                quantity,
                type,
                code,
                description,
                price,
                taxRate
            }

            const createInvoiceItem = await InvoiceItem.create(data);
            res.status(201).json({
                sucess: true,
                message: "Invoice Item added!!",
                data: createInvoiceItem
            })

        } else {
            res.status(500).json({
                success: false,
                message: "check invoice number or invoiceId!!"
            })
        }

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to create invoice item!!",
            data: err
        })
    }
}