const express = require('express');
const connect = require('./database/db');
const route = require('./routes/routes');

const app = express();

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use("/", route);

const PORT = 5050

connect();

app.listen(PORT, () => {
    console.log(`Server is started on PORT: ${PORT}`)
})

