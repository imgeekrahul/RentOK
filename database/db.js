const mongoose = require("mongoose");


const Connection = async () => {
    const URL = `mongodb+srv://admin:admin@cluster0.j6hqihe.mongodb.net/rentOK?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
        })
        console.log("Database connected successfully")
    } catch(err) {
        console.log("Error while connecting the database ", err.message);
    }
}

module.exports = Connection;