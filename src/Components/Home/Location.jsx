import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import Logo from "../../../src/assets/LOGO 1.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";


const Location = () => {

  const {ToggleCartDetails} = useContext(MyContaxt)


  return (
    <div className="w-full flex justify-center h-15 ">
      <div className="flex hidden md:flex flex-row md:px-5 w-[95%] bg-gray-100 rounded-b-2xl h-full justify-around items-center">
        <div className="flex cursor-pointer h-full justify-center space-x-3 items-center">
          <p>
            Get 5% Off your first order ,{" "}
            <span className="text-[#FC8A06] font-semibold underline">
              Promo:ORDER
            </span>
          </p>
        </div>
        <div className="flex  cursor-pointer h-full justify-center space-x-3 items-center  ">
          <FaLocationDot size={24} />
          <p>
            Regret street , A4, A4201, Londan{" "}
            <span className="text-[#FC8A06] font-semibold underline">
              Change location
            </span>
          </p>
        </div>
        <div onClick={ToggleCartDetails} className="w-50  cursor-pointer h-full bg-[#028643] flex flex-row space-x-8 text-white justify-center items-center">
          <div className="flex  cursor-pointer space-x-2">
            <FaShoppingCart size={25} />
            <button className="font-semibold   rounded-2xl">My Cart</button>
          </div>
          <button className="font-semibold  cursor-pointer  rounded-2xl">
            <MdDownloadForOffline size={24} />{" "}
          </button>
        </div>
      </div>
      <div  className="md:hidden    flex w-full items-center justify-center h-15 ">
        <div className="p-3 flex items-center justify-between">
          <img className="h-8" src={Logo} alt="Logo" />
          <button className="ml-22 cursor-pointer border-l-2 border-gray-400 ">
            {" "}
            <IoReorderThreeOutline size={55} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
