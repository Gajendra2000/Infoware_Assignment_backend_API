const express = require('express');
require('dotenv').config();
const app = express();
const connectDb = require("./config/dbConnection");
const employeeRoutes = require("./routes/employeeRoutes");

//for mongoDb connection 
connectDb();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/employees",employeeRoutes);

//running on port number 3000
app.listen(3000, ()=>console.log('listening on port',3000));