import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const { cart } = useContext(MyContaxt);
  const navigate = useNavigate();

  return (
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
      <div className="flex justify-start flex-col md:flex-row items-center md:items-start mt-3">
        <div className="md:border-1 md:px-3 md:py-2 md:w-1/2  rounded-1xl space-y-4 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full  md:space-x-1 border-b pb-3"
            >
              <div className="flex items-center md:px-2 justify-between">
                <div
                  onClick={() => updateCartItemQuantity(item.id)}
                  className="text-black p-1 px-2 font-semibold cursor-pointer  flex justify-center rounded-full items-center"
                >
                  <img
                    className=" md:h-15 md:w-15 md:rounded-2xl"
                    src={item.image}
                  />
                  {/*  */}
                </div>
                <div className="flex  flex-col justify-center">
                  <p className="text-2xl md:text-2xl font-bold px-3">₹{item.prize}</p>
                  <p className="text-sm px-3 font-medium">{item.name}</p>
                  <div className="flex justify-start ml-3 space-x-1">
                    <span className="text-1xl font-bold">{item.quantity || 1}</span>
                    <p className="text-[#FC8A06] font-bold">item</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 h-full flex w-full flex-col justify-start items-start">
         <div className="flex w-full justify-center">
            <p className="text">Delevery Address</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
