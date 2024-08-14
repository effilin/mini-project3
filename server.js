const express = require ('express');
require("dotenv").config;
const dbConnect = require('./dbConnect')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/', express.static('public'))

app.listen(PORT, () => {
    console.log (`mini-project-3 is listening at http://localhost: ${PORT}`)
})
