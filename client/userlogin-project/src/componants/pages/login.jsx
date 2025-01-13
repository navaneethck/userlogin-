

const Login = ()=>{
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
    
    <form className="text-white flex flex-col gap-6">
      
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-thin">
     
        </label>
        <input
          id="email"
          type="email"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your email"
        />
      </div>
     
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-thin">
         
        </label>
        <input
          id="password"
          type="password"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your password"
        />

        <a
          href="#"
          className="text-base text-gray-300 mt-4  hover:underline hover:text-gray-100 "
        >
          Forgot Password?
        </a>
      </div>
     
      <button
        type="submit"
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 mt-4"
      >
        Login
      </button>
    </form>
  </div>
</div>

    )
}

export default Login; 