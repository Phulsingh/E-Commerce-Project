import React from 'react'
import Parter1 from "../../../src/assets/Group 8 (3).png"
import Parter2 from "../../../src/assets/Group 8 (2).png"

const ParterWithUs = () => {
  return (
    <div className="flex flex-col md:mx-17 mt-3  md:flex-row gap-4 p-4">
    {/* Partner Card */}
    <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
      <img
        src={Parter1}
        alt="Partner with us"
        className="w-full h-100 object-cover"
      />
      <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-md font-semibold">
        Earn more with lower fees
      </div>
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-orange-400 text-sm">Signup as a business</p>
        <h2 className="text-2xl font-bold">Partner with us</h2>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </div>

    {/* Rider Card */}
    <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
      <img
        src={Parter2}
        alt="Ride with us"
        className="w-full h-100 object-cover"
      />
      <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-md font-semibold">
        Avail exclusive perks
      </div>
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-orange-400 text-sm">Signup as a rider</p>
        <h2 className="text-2xl font-bold">Ride with us</h2>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  </div>
  )
}

export default ParterWithUs
