import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email }));
    navigate("/to-do-list");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-slate-100 border border-slate-400 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        </div>

        <div className="relative flex flex-col">
          <input
            type="email"
            id="email"
            className="w-full py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email
          </label>
          <BiUser className="absolute top-4 right-4" />
        </div>

        <div className="relative flex flex-col">
          <input
            type="password"
            id="password"
            className="w-full py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Password
          </label>
          <AiOutlineLock className="absolute top-4 right-4" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-700">
            New Here?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
