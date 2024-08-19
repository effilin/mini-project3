const express = require ('express');
require("dotenv").config();
const dbConnect = require('./dbConnect');
let userRoutes = require('./routes/userRoutes');
let forecastRoutes = require('./routes/forecastRoutes')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/', express.static('public'))
app.use('/api/users', userRoutes);
app.use('/api/forecast', forecastRoutes);
app.listen(PORT, () => {
    console.log (`mini-project-3 is listening at http://localhost:${PORT}`)
})
