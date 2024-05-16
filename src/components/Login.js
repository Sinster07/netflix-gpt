import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />

      <div className="absolute">
        <img
          src="https://www.pcworld.com/wp-content/uploads/2024/04/Netflix-Hintergrund.jpg?quality=50&strip=all"
          alt="bg-img"
        />
      </div> 

      <form className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-90 rounded-lg ">
      <h1 className="font-bold text-3xl p-2" >Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800"/>
        <input type="password" placeholder="Password"  className="p-4 my-4 w-full bg-gray-800"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Login</button> 
        <p className="py-4"> New to Netflix? SignUp Now</p>
      </form>
    </>
  );
};

export default Login;
