import React from "react";
import Navbar from "../Home/Navbar";
import Location from "../Home/Location";
import OrderDetails from "./OrderDetails";

const CheckoutPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Location />
        <Navbar />
      </div>
      <div className="mt-30 md:mt-35">
        <OrderDetails />
      </div>
    </div>
  );
};

export default CheckoutPage;
