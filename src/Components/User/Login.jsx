import React, { useState } from "react";
import Logo from "../../../src/assets/LOGO 1.png";
import Art from "../../../src/assets/Art.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { users } = useContext(MyContaxt);

  //Show the Password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === formData.email);

    console.log(user)

    if (!user) {
      console.log("User does not exists");
      alert("User does not exist");
      return;
    }

    
    if (user.password === formData.password) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success('Successfully toasted!') // ✅ Show toast first

      setTimeout(() => {
        navigate("/"); // ✅ Delay navigation for toast to appear
      }, 1500);
    } else {
      toast.error("This didn't work.") // ❌ Incorrect password
    }
    
  };

  return (
    <>
    <div className="flex min-h-screen">
      {/* Left Section - Form */}

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold flex items-center">
          <img src={Logo} />
        </h1>
        <h2 className="text-2xl text-md font-semibold mt-2">Welcome Back</h2>
        <p className="text-gray-500 text-sm text-center mt-1">
          Start ordering now..
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-sm mt-6">
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <div className="w-full flex items-center border rounded-lg mt-1 px-4 focus-within:border-orange-500">
              <input
                onChange={handleChange}
                value={formData.password}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                className="w-full py-2 outline-none"
              />
              {showPassword ? (
                <IoMdEyeOff
                  onClick={handleShowPassword}
                  size={24}
                  className="cursor-pointer text-gray-500"
                />
              ) : (
                <IoEye
                  onClick={handleShowPassword}
                  size={24}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>

          <button
            onClick={handleShowPassword}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>

      {/* Right Section - Image (Hidden on Mobile) */}
      <div className="hidden md:block rounded-2xl md:w-1/2">
        <img
          src={Art}
          alt="Food"
          className="w-full h-screen p-5  object-cover"
        />
      </div>
    </div>
    <Footer/>
    <ToastContainer 
    position="top-center"
    reverseOrder={false}/>
    </>
  );
};

export default Login;
