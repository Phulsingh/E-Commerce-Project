import React from "react";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";
import {toast } from "react-toastify";

const Burgers = () => {
  const { addToCart } = useContext(MyContaxt);

  const Burgers = [
    {
      id: "1",
      name: "Royal Cheese Burger with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 120,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/e1a4ef5b081b4423/Rectangle%2046.png?Expires=1837870203&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ej3gkfQEp~gdqndFjXhP1skWzX9K9IN84YF8zjnKh3sWAuaQdX8D7EYzuW8F7r3OuVW3~bdKdyNfwUcYWbtwYl1J1Ct0gJEFgo4XD-TGr-l~6cbntjGicmhjEs9Msr2gawUci6Cp61psJ654qR7KW00kGbNc3czYdkslQghLFjFcIT4PuuHrhpBBx3VYBHBbtfPwA4Ssp7H4DZPEJH8HgNed5Kf4QyV5ucxSP47KknM2dC0W-3-Yre95OzhW-SzmYA-TeX~-1D7VEmGsLkMbwuVjdhcPUB5-QbkCBTBWIUkQ~DdkNErOEFfuIMiGSgPkSKlD-294YDCYp2WrLIyOFg__",
    },
    {
      id: "2",
      name: "Royal Cheese Burger with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 200,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/e1a4ef5b081b4423/Rectangle%2046.png?Expires=1837870203&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ej3gkfQEp~gdqndFjXhP1skWzX9K9IN84YF8zjnKh3sWAuaQdX8D7EYzuW8F7r3OuVW3~bdKdyNfwUcYWbtwYl1J1Ct0gJEFgo4XD-TGr-l~6cbntjGicmhjEs9Msr2gawUci6Cp61psJ654qR7KW00kGbNc3czYdkslQghLFjFcIT4PuuHrhpBBx3VYBHBbtfPwA4Ssp7H4DZPEJH8HgNed5Kf4QyV5ucxSP47KknM2dC0W-3-Yre95OzhW-SzmYA-TeX~-1D7VEmGsLkMbwuVjdhcPUB5-QbkCBTBWIUkQ~DdkNErOEFfuIMiGSgPkSKlD-294YDCYp2WrLIyOFg__",
    },
    {
      id: "3",
      name: "Royal Cheese Burger with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 520,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/e1a4ef5b081b4423/Rectangle%2046.png?Expires=1837870203&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ej3gkfQEp~gdqndFjXhP1skWzX9K9IN84YF8zjnKh3sWAuaQdX8D7EYzuW8F7r3OuVW3~bdKdyNfwUcYWbtwYl1J1Ct0gJEFgo4XD-TGr-l~6cbntjGicmhjEs9Msr2gawUci6Cp61psJ654qR7KW00kGbNc3czYdkslQghLFjFcIT4PuuHrhpBBx3VYBHBbtfPwA4Ssp7H4DZPEJH8HgNed5Kf4QyV5ucxSP47KknM2dC0W-3-Yre95OzhW-SzmYA-TeX~-1D7VEmGsLkMbwuVjdhcPUB5-QbkCBTBWIUkQ~DdkNErOEFfuIMiGSgPkSKlD-294YDCYp2WrLIyOFg__",
    },
    {
      id: "4",
      name: "Royal Cheese Burger with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 150,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/e1a4ef5b081b4423/Rectangle%2046.png?Expires=1837870203&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ej3gkfQEp~gdqndFjXhP1skWzX9K9IN84YF8zjnKh3sWAuaQdX8D7EYzuW8F7r3OuVW3~bdKdyNfwUcYWbtwYl1J1Ct0gJEFgo4XD-TGr-l~6cbntjGicmhjEs9Msr2gawUci6Cp61psJ654qR7KW00kGbNc3czYdkslQghLFjFcIT4PuuHrhpBBx3VYBHBbtfPwA4Ssp7H4DZPEJH8HgNed5Kf4QyV5ucxSP47KknM2dC0W-3-Yre95OzhW-SzmYA-TeX~-1D7VEmGsLkMbwuVjdhcPUB5-QbkCBTBWIUkQ~DdkNErOEFfuIMiGSgPkSKlD-294YDCYp2WrLIyOFg__",
    },
  ];

  return (
    <div className="w-full md:px-15 px-3 py-7">
      <div className="flex justify-start items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Burgers</h1>
      </div>
      <div className="grid mt-5 md:mt-10  grid-cols-1 md:grid-cols-3 gap-6">
        {Burgers.map((burger) => (
          <div
            key={burger.id}
            className="flex p-2 space-x-4 rounded-lg shadow-md border w-full"
          >
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="md:text-lg text-sm font-bold">{burger.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{burger.description}</p>
              <p className="text-lg font-bold md:mt-5">₹{burger.prize}</p>
            </div>
            {/* Image and Add Button */}
            <div className="relative  w-25 md:w-40">
              <img
                src={burger.image}
                alt="Burger Meal"
                className="w-full h-32 md:h-40 rounded-lg"
              />
              <button
                onClick={() => {
                  addToCart(burger);
                  toast.success(`${burger.name} added to cart!`);
                }}
                className="absolute cursor-pointer h-10 md:h-15 w-15 bottom-[-10px] right-[-10px] bg-black/80 text-white rounded-tl-xl p-2 shadow-lg"
              >
                <p className="text-xl md:text-3xl font-bold">+</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;
