import React from "react";
import { FaTimes } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";


const Sidebar = ({ isOpen, handleIsOpen }) => {
  const navigate = useNavigate();
  const { currentUser} = useContext(MyContaxt)

  const logout = ()=>{
    localStorage.removeItem("currentUser");
    navigate("/login")
  }

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button
            onClick={handleIsOpen}
            className="absolute top-5 right-5 text-2xl"
          >
            <FaTimes />
          </button>

          {/* Sidebar Content */}
          <ul className="mt-14 text-lg font-semibold space-y-3 px-6">
            <li onClick={()=> navigate("/")}>Home</li>
            <li onClick={()=> navigate("/product")}>Browser Menu</li>
            <li onClick={()=> navigate("/order")}>Track Order</li>
            <li onClick={()=> navigate("/product")}>Special Offer</li>
            <li onClick={()=> navigate("/product")}>Setting</li>
          </ul>
          <div className="flex w-full justify-start items-center  m-5 ml- 4">
            <button onClick={logout} className="text-1xl font-semibold p-1 w-[70%] bg-black text-[#FC8A06] rounded-2xl">
              {currentUser ? "Logout": "Login"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
