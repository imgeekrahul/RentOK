const User = require('../model/user');
const jwt = require('jsonwebtoken')

exports.addUser = async (req, res) => {
    try {
        const {firstname, lastname, dob, email, password, phone, address} = req.body;
        
        const token = jwt.sign({email: email}, "registrationToken")

        const data = {
            firstname,
            lastname,
            dob,
            email,
            password,
            phone,
            address,
            token
        }
        
        console.log(data);
        const createdData = await User.create(data);
        res.status(201).json({
            success: true,
            message: "User Created Successfully !!",
            data: createdData
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to add the user details !!"
        })
    }
}

exports.loginuser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const emailExist = await User.findOne({email: email})
        if(emailExist) {
            if(emailExist.password == password) {
                res.status(200).json({
                    success: true,
                    message: "Login successful !!",
                    data: emailExist,
                    token: emailExist.token
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Wrong Credentials !!"
                })
            }
        } else { 
            res.status(404).json({
                success: false,
                message: "Wrong Credentials !!"
            })
        }
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to logged In !!"
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const email = req.body.email;
        const token = jwt.sign({email: email}, "registrationToken")

        console.log(token);
        const updateUser =  await User.findOneAndUpdate({email: email}, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dob: req.body.dob,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address,
                token: token
            }
        }, {
            new: true
        })

        res.status(200).json({
            success: true,
            message: "User updated Successfully !!",
            data: updateUser
        })

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to update user details !!"
        })
    }
}

exports.removeUser = async (req, res) => {
    try {
        const userId = req.body.userId
        await User.deleteOne({_id: userId})
        .then((response) => {
            res.status(200).json({
                success: false,
                message: "User removed successfully !!",
                data: response
            })
        })

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Failed to remove user details !!"
        })
    }
}