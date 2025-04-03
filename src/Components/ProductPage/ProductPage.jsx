import React from 'react'
import Location from '../Home/Location'
import Navbar from '../Home/Navbar'
import SearchBar from './SearchBar'
import People from './People'
import Burgers from './Burgers'
import Fries from './Fries'
import ColdDrinks from './ColdDrinks'
import Footer from "../Home/Footer"
import CartDetails from '../Cart/CartDetails'


const ProductPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Location />
        <Navbar />
      </div>
      <div className="mt-35 md:mt-35">
        <SearchBar/>
        <People/>
        <Burgers/>
        <Fries/>
        <ColdDrinks/>
        <Footer/>
        <CartDetails/>
      </div>
    </div>
  )
}

export default ProductPage
