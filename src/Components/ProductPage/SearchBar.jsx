import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex container md:px-12 h-15 bg-[#FC8A06] justify-center items-center">
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="flex space-x-12 cursor-pointer items-center font-bold text-white px-4">
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Offers</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Burgers</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Fries</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Snacks</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Salads</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Cold Drinks</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Happy Meal</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out  rounded-xl">Desserts</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Hot Drinks</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Souces</li>
          <li className="hover:bg-black p-2 transition duration-200 ease-in-out rounded-xl">Orbit</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
