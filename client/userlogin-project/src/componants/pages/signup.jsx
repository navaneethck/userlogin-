
const Signup =()=>{
return(
    <div className="flex items-center justify-center h-screen">
  <div className="bg-blue-600 w-[400px] h-auto p-6 rounded-xl">
   
    <div className="text-white text-center underline underline-offset-4 text-2xl font-thin mb-6">
      <h1>SIGN UP</h1>
    </div>

  
    <form className="text-white flex flex-col gap-2">
      
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-sm font-thin">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your name"
        />
      </div>
   
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-thin">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your email"
        />
      </div>
     
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-1 text-sm font-thin">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your age"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="occupation" className="mb-1 text-sm font-thin">
          Occupation
        </label>
        <input
          id="occupation"
          type="text"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your occupation"
        />
      </div>
     
      <div className="flex flex-col">
        <label htmlFor="place" className="mb-1 text-sm font-thin">
          Place
        </label>
        <input
          id="place"
          type="text"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your place"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-thin">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 text-black"
          placeholder="Enter your password"
        />
      </div>
     
      <div className="flex justify-between text-base text-gray-300 mt-4">
        <a href="/" className="hover:underline hover:text-gray-100 ml-4">
          Already have an account?
        </a>
      </div>
      
      <button
        type="submit"
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 mt-4"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>


)
}
export default Signup