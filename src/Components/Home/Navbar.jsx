import React from "react";
import Logo from "../../../src/assets/LOGO 1.png";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MyContaxt from "../Contaxt/MyContaxt";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(MyContaxt);
  const {ToggleCartDetails} = useContext(MyContaxt)

  return (
    <div className="w-full md:mt-2 flex justify-between items-center h-15">
      <div className="hidden md:flex justify-between items-center w-[90%]  mx-auto">
        <div className="w-[20%]">
          <img className="h-11" src={Logo} alt="logo" />
        </div>
        <nav className="flex w-[50%] space-x-10">
          <a className="rounded-2xl hover:bg-[#FC8A06] px-2.5 py-1" href="">
            Home
          </a>
          <a className="rounded-2xl hover:bg-[#FC8A06] px-2 py-1" href="">
            Browse Menu
          </a>
          <a className="rounded-2xl hover:bg-[#FC8A06] px-2 py-1" href="">
            Special Offer
          </a>
          <a className="rounded-2xl hover:bg-[#FC8A06] px-2 py-1" href="">
            Restaurants
          </a>
          <a className="rounded-2xl hover:bg-[#FC8A06] px-2 py-1" href="">
            Track Order
          </a>
        </nav>
        <div onClick={()=>{
          navigate("/login")
        }} className="bg-[#03081F] cursor-pointer flex justify-start items-center  rounded-3xl w-[15%] mr-15 text-white h-full md:px-5 md:py-2 space-x-3">
          <IoPersonCircleSharp className="text-[#FC8A06] " size={24} />
          <button className="h-full cursor-pointer flex">{currentUser?.name ? currentUser.name.slice(0,10) : "Login /Signup"}</button>
        </div>
      </div>
      <div className="md:hidden  flex w-full justify-around  items-center">
           <div  onClick={()=>{
            navigate("/login")
           }} className="bg-[#FC8A06] cursor-pointer h-16 space-x-2 flex items-center justify-center w-[50%]">
           <IoPersonCircleSharp size={34} />
                <p className="text-1xl  font-semibold">{currentUser?.name ? currentUser.name.slice(0,10) : "Login /Signup"}</p>
           </div>
           <div onClick={ToggleCartDetails} className="flex justify-center cursor-pointer  h-16  bg-[#028643] space-x-2 items-center w-[50%] ">
            <FaShoppingCart className="text-gray-200" size={25}/>
               <p className="text-1xl font-semibold text-white">My Cart</p>
           </div>
      </div>
    </div>
  );
};

export default Navbar;
