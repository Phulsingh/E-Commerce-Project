import React from "react";
import Location from "./Location";
import Navbar from "./Navbar";
import ExclusiveDeals from "./ExclusiveDeals";
import PopularCategory from "./PopularCategory";
import PopularResturants from "./PopularResturants";
import ParterWithUs from "./ParterWithUs";
import Footer from "./Footer";
import CartDetails from "../Cart/CartDetails";

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Location />
        <Navbar />
      </div>
      <div className="mt-30 md:mt-35">
        <ExclusiveDeals />
        <PopularCategory />
        <PopularResturants />
        <ParterWithUs />
        <Footer />
        <CartDetails/>
      </div>
    </div>
  );
};

export default Home;
