require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected successfully")
    }catch(error){
        console.error("mongod connect error ",error)
    }
}

module.exports = connectDb