const User= require('../models/userModel')
const argon2 = require('argon2');

const signup = async (req,res)=>{
       console.log(req.body);
       try{
              const{name,email,age,occupation,place,password}=req.body;

              const passString = password.toString(); 

              const hashedPassword = await argon2.hash(passString)

              const newUser= new User({name,email,age,occupation,place,password:hashedPassword});

              await newUser.save();

              res.status(201).json({message:"Registered Successfully !",userDetails:{name:newUser.name}})
              console.log('Response Sent:', {message: "Registered Successfully !"});

              
       }catch(error){
              res.status(500).json({message:"internal server error",error:error.message})
       }  
}

module.exports={signup}