import { useState } from "react";
import { netflix_login_bg_img } from "../utils/url";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const logStatus = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={netflix_login_bg_img}
          className="w-full h-full object-cover"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form className="w-105 p-10 bg-black opacity-80 text-white rounded-md">
          <h1 className="text-3xl font-semibold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col space-y-4">
           {!isSignIn &&<input
              type="name"
              placeholder="Name"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-500 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button className="w-full mt-6 px-3 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={logStatus} className="mt-9 cursor-pointer">
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already a member? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
