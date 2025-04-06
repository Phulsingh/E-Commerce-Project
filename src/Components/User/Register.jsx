import React, { useState } from "react";
import Logo from "../../../src/assets/LOGO 1.png";
import Art from "../../../src/assets/Art.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useContext } from "react";
import Footer from "../Home/Footer";
import MyContaxt from "../Contaxt/MyContaxt";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Set users to contaxt
  const { users, setUsers } = useContext(MyContaxt);

  //Show the Password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedUsers = [...(users || []), formData];
    setUsers(updatedUsers);
  
    if (updatedUsers.length > users.length) {
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Registration successful!");
    }
  
    setFormData({ name: "", email: "", password: "", mobile: "" });
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
          Sign up to start ordering.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm mt-6">
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              value={formData.name}
              name="name"
              onChange={HandleChange}
              type="name"
              placeholder="eg. John A"
              className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Phone Number</label>
            <input
            value={formData.mobile}
            name="mobile"
            onChange={HandleChange}
              type="text"
              placeholder="enter your 10 digit number"
              className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
               value={formData.email}
               name="email"
               onChange={HandleChange}
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
                 value={formData.password}
                 name="password"
                 onChange={HandleChange}
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
            className="w-full bg-orange-500 cursor-pointer text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-gray-500">
          Do you have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign in
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
    </>
  );
};

export default Register;
