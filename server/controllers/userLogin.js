const User = require('../models/userModel');
const argon2= require('argon2')

const userLogin = async (req,res)=>{
     try{
          const {password,email}=req.body;

          const user = await User.findOne({email});

          if(!email){

               res.status(404).json({message:" user not found !",userDetails:req.body});
          }
          
          const passwordMatch = await argon2.verify(user.password,password.toString());

          if(!passwordMatch){

               res.status(404).json({message:" password is not matching !"});
          }

          res.status(200).json({
               message:'Logged in successfully!',userDetails:{name:user.name}
          })
     }catch(error){

          res.status(500).json({message:"an error occure during loggin",error:error.message})
          console.log(error)

     }
}

module.exports = {userLogin}