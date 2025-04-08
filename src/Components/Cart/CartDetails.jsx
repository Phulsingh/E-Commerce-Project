import React from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { FaCircleArrowDown } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const { toggleCart, cart, deleteCartItem, updateCartItemQuantity } =
    useContext(MyContaxt);

  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.prize, 0);
  const discount = 50;
  const deleveryFee = 30;
  const totalPayable = subtotal - discount + deleveryFee;

  
  return (
    <>
      {toggleCart && (
        <div className="w-full md:px-2  md:w-1/4 h-[82%] overflow-y-auto  md:h-[600px] md:overflow-y-auto absolute fixed top-30 right-0 bg-[#F9F9F9]">
          <div className="flex hidden md:flex justify-center space-x-4 bg-[#028643] items-center h-20">
            <FaShoppingBasket className="text-white" size={35} />
            <p className="text-white text-3xl  font-bold">My Basket</p>
          </div>
          <div className="p-3 space-y-4 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-full  md:space-x-1 border-b pb-3"
              >
                <div className="flex items-center px-2 justify-between">
                  <p
                    onClick={() => updateCartItemQuantity(item.id)}
                    className="text-black p-1 px-2 font-semibold cursor-pointer  flex justify-center rounded-full items-center bg-[#FC8A06]"
                  >
                    <span className="text-1xl">{item.quantity || 1}</span>X
                  </p>
                  <div className="flex  flex-col justify-center">
                    <p className="font-semibold px-3">₹{item.prize}</p>
                    <p className="text-sm px-3 font-medium">{item.name}</p>
                    {item.desc && (
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => deleteCartItem(item)}
                    className="text-red-500 px-5 cursor-pointer h-full   flex items-center justify-center hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cart.length >0 ? <div>
            <div className="flex px-4 space-y-1 flex-col items-start">
              <div className="flex justify-between w-full">
                <p className="text-1xl md:text-2xl font-bold"> Sub Total :</p>
                <p className="text-1xl md:text-2xl font-semibold text-[#212121]">
                  ₹{subtotal}.00
                </p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-1xl md:text-2xl font-bold">Discounts :</p>
                <p className="text-1xl md:text-2xl font-semibold text-[#212121]">
                  -₹{discount}.00
                </p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-1xl md:text-2xl font-bold">Delevery Fee:</p>
                <p className="text-1xl md:text-2xl font-bold text-[#212121]">
                  ₹{deleveryFee}.00
                </p>
              </div>
            </div>
            <hr className="mt-5"></hr>
            <div className="flex mx-1 rounded-2xl px-4 mt-7 py-2 h-[50px] bg-[#FC8A06] justify-between items-center">
              <p className="text-2xl font-bold text-white">Total to Pay</p>
              <p className="text-2xl font-bold text-white">
                ₹{totalPayable}.00
              </p>
            </div>
            <div className="flex flex-col mt-5 space-y-4 items-center justify-between">
              <p  className="text-1xl cursor-pointer md:text-2xl border-2 w-[93%] py-2 flex items-center justify-center rounded-3xl">
                Choose your free item
                <span className="ml-4 md:ml-1 text-[#FC8A06CC]">
                  <FaCircleArrowDown size={24} />
                </span>
              </p>
              <p className="text-1xl cursor-pointer md:text-2xl border-2 w-[93%] py-2 flex items-center justify-center rounded-3xl">
                Apply Coupon code here
                <span className="ml-4 md:ml-1 text-green-300">
                  <BsArrowRightCircleFill size={24} />
                </span>
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/order");
              }}
              className="flex justify-center cursor-pointer space-x-8 rounded-2xl bg-[#028643] items-center rounded-1xl p-3  m-4 md:m-5"
            >
              <BsArrowRightCircleFill className="text-white" size={24} />
              <p className="text-2xl font-bold text-white">Checkout</p>
            </div>
          </div> :<p className="text-3xl flex font-bold justify-center items-center">Your cart is Empty</p>}
        </div>
      )}
      <ToastContainer/>
    </>
  );
};

export default CartDetails;
