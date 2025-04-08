import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import PopularResturants from "../Home/PopularResturants";
import Footer from "../Home/Footer";

const OrderDetails = () => {
  const { cart } = useContext(MyContaxt);
  const navigate = useNavigate();
  const salesTax = 30;

  // const subtotal = cart.reduce((total, item) => total + item.prize, 0);
  // const discount = 50;
  // const deleveryFee = 30;
  // const totalPayable = subtotal - discount + deleveryFee;
  
  
  return (
    <>
      <div className="flex md:px-18 p-5 flex-col justify-center w-full md:w-full  h-full">
        <div className="flex justify-center md:justify-start items-center md:space-x-5">
          <span
            onClick={() => navigate("/product")}
            className="hidden cursor-pointer md:flex"
          >
            <FaArrowLeft size={24} />
          </span>
          <p className="text-2xl text-center font-bold">Your Order Details</p>
        </div>
        <div className="flex justify-start  flex-col md:flex-row items-center md:items-start mt-3">
          <div className="md:border-1 rounded-2xl md:px-3  md:py-2 md:w-[70%]  rounded-1xl space-y-4 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-full  md:space-x-1 border-b pb-3"
              >
                <div className="flex items-center md:px-2 justify-between">
                  <div className="text-black p-1 px-2 font-semibold cursor-pointer  flex justify-center rounded-full items-center">
                    <img
                      className=" md:h-15 md:w-15 md:rounded-2xl"
                      src={item.image}
                    />
                    {/*  */}
                  </div>
                  <div className="flex  flex-col justify-center">
                    <p className="text-2xl md:text-2xl font-bold px-3">
                      ₹{item.prize}
                    </p>
                    <p className="text-sm px-3 font-medium">{item.name}</p>
                    <div className="flex justify-start ml-3 space-x-1">
                      <span className="text-1xl font-bold">
                        {item.quantity || 1}
                      </span>
                      <p className="text-[#FC8A06] font-bold">item</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[30%] h-full md:mt-0 mt-10 md:mx-10 flex w-full flex-col justify-start items-start">
            <div className="flex items-center p-2 md:p-3  w-full border-2 space-x-2 rounded-full justify-start">
              <div className="h-8 w-8 flex items-center justify-center md:h-10 md:w-10 border-2 rounded-full">
                <IoLocation className="text-2xl text-[#FC8A06] " size={24} />
              </div>
              <p className="text-1xl font-bold">Delevery Address</p>
            </div>
            <div className="flex flex-col border-t-2 mt-2  justify-between w-full items-center ">
              <div className="flex w-full justify-between items-center">
                <p className="md:text-2xl text-[#83858A] font-semibold">
                  items
                </p>
                <p className="md:text-2xl text-[#83858A] font-semibold">
                  Prize
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p className="md:text-2xl text-[#83858A] font-semibold">
                  Sales tax
                </p>
                <p className="md:text-2xl text-[#83858A] font-semibold">
                  {salesTax}
                </p>
              </div>
            </div>
            <div className="flex mt-3 border-t-2 justify-between items-center w-full">
              <p className="md:text-2xl font-bold">Subtotals</p>
              <p className="md:text-2xl font-bold"> prize</p>
            </div>
            <button onClick={()=>{
              navigate("/payment")
            }} className="flex bg-[#FC8A06] rounded-full md:text-1xl p-2 mt-4 cursor-pointer text-white justify-center items-center w-full">
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
      <PopularResturants />
      <Footer />
    </>
  );
};

export default OrderDetails;
