const express = require("express")
const app = express()
const connectDB = require('./database/db')
require('colors')

connectDB();


const port = process.env.PORT || 5000;


app.listen (port, ()=> console.log(`연결 포트는 ${port}`.bgMagenta.white))