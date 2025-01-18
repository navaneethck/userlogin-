import React,{useState} from "react";
import { userLogin } from "../../services/api";


const Login = ()=>{
  
  const [formData,setFormData] = useState({email:"",password:""});
  const [message,setMessage] = useState("");

  const handleChange = (e)=>{
    const {id,value} = e.target;
    setFormData((prevData)=>({...prevData,[id]:value}));
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{

      const response = await userLogin(formData)
      setMessage(response.data.message);

      setFormData({email:"",password:""});

    }catch(error){
      setMessage(error.response?.data?.message || 'login failed..!')
    }
  }
  
    return(
      // <div className="flex items-center justify-center h-screen">
      // <div className="bg-blue-600 w-[400px]   h-[500px]  p-4 rounded-xl ">
      // <div className="text-white text-center text-decoration-line: underline underline-offset-4 text-2xl font-black"><h1 className="font-thin">LOGIN</h1></div>
      //  <form className="text-white flex flex-col gap-4">
      //   <div className="flex flex-col">
      //     <label htmlFor="name" className="font-thin">Email</label>
      //   </div>
      //  </form>
      // </div>
     
      // </div>

      <div className="flex items-center justify-center h-screen">
  <div className="bg-blue-600 w-[400px] h-[500px] p-6 rounded-xl">
   
    <div className="text-white text-center underline underline-offset-4 text-2xl font-thin mb-6">
      <h1>LOGIN</h1>
    </div>
    
    <form onSubmit={handleSubmit} className="text-white flex flex-col gap-6">
      
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-thin">
     
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black mt-8"
          placeholder="Enter your email"
         
        />
      </div>
     
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-thin">
         
        </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black mt-8"
          placeholder="Enter your password"
        />
     <div className="flex justify-between text-base text-gray-300 mt-4">
          <a href="#" className="hover:underline hover:text-gray-100 ml-4">
            Forgot Password?
          </a>
          <a href="/signup" className="hover:underline hover:text-gray-100 mr-5">
            Sign Up?
          </a>
        </div>
  
      </div>
     
      <button
        type="submit"
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 mt-14"
      >
        Login
      </button>
    </form>
    {message && <div className="mt-4 text-white text-center">{message}</div>}
  </div>
</div>

    )
}

export default Login; 