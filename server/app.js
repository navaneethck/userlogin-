require ('dotenv').config();
const express = require ('express');
const cors = require('cors');
const connectDb = require('./config/dbconfig');
const router=require('./routes/user')


const app =express();


connectDb();

app.use(cors());
app.use(express.json());
app.use('/',router)

const PORT = process.env.PORT || 2000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})