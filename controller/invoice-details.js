const Invoice = require('../model/invoice');
const User = require('../model/user');

exports.createInvoice = async (req, res) => {
    try {
        const {invoiceNumber, invoiceDate, transactionDate, paymentDate, supplier_Name, supplier_Tax, supplier_Address_Line1, supplier_Address_Line2, supplier_PostCode, supplier_City, supplier_Country, customer_Name, customer_Tax, customer_Email, customer_Address_Line1, customer_Address_Line2, customer_PostCode, customer_City, customer_Country, customer_Order_Id} = req.body
        
        const data = {
            invoiceNumber, 
            invoiceDate, 
            transactionDate, 
            paymentDate, 
            supplier_Name, 
            supplier_Tax, 
            supplier_Address_Line1, 
            supplier_Address_Line2, 
            supplier_PostCode, 
            supplier_City, 
            supplier_Country, 
            customer_Name, 
            customer_Tax,
            customer_Email,
            customer_Address_Line1, 
            customer_Address_Line2, 
            customer_PostCode, 
            customer_City, 
            customer_Country, 
            customer_Order_Id
        }

        const emailExist = await User.findOne({email: customer_Email})
        if(req.headers["auth-token"] == emailExist.token){
            const createInvoice = await Invoice.create(data); 
            res.status(201).json({
                success: true,
                message: "Invoice created successfully!!",
                data: createInvoice
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Invalid Token!!",
                data: "Please provide valid token!!"
            })
        }
        
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to create invoice !!",
            data: err
        })
    }
}