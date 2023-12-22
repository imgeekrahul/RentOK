const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    dob: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    token: {
        type: String
    }
}, {
    timestamps: true
})

const User = new mongoose.model("user", UserSchema);

module.exports = User;