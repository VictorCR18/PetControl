
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors'); 
const mysql = require('mysql2');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(routes)

app.listen(3000, () => {
    console.log('server running');
})