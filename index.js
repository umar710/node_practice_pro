const express = require('express');
const db = require('./db');

const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const router = require('./routes/bookRoutes');
app.use('/book', router);



app.listen(PORT, ()=>{
    console.log("Server Runing LocalHost:4000")
})