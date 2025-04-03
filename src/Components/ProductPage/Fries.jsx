import React from "react";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";

const Fries = () => {
  const {addToCart} = useContext(MyContaxt)
  const Burgers = [
    {
      id: "9",
      name: "Royal Cheese Fries with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 120,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/8d3f6a2023ce4de9/Rectangle%2046%20(1).png?Expires=1837876489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lxy2KNweJHoNTi8vh7ILFrhVZE7mv6LkxurEsU-zqm7AvVfhUFfL7xM6DPl2vqd0vX1Q2I1N3kbby3uJ58zl149n9GtRe6uCTn7xc1i~gCc2dQz7N2~lVTEnbrp-OpBxFHnKaCG3pRR9a3DHS8-ZGXpqRFfaON3SIDKPXBew~uGOhyEcXdKwFLeqP4QuqpdHn98E8-~kTQ0FzlWXOmzJKaCcybBq8Skg~FX35RBKBlJHCnnXRsqIH7j8LR7f035nt6rPkErLoiSoTeWsP6azzw3diQ4HNnbpoR6m0cfPuP0OSRrbqGZe4h2ch9sNMZZBWZVK2BCznO57pGz9y-cvnQ__",
    },{
        id: "10",
        name: "Royal Cheese Fries with extra Fries",
        description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
        prize: 120,
        quantity:1,
        image:
          "https://media-hosting.imagekit.io/8d3f6a2023ce4de9/Rectangle%2046%20(1).png?Expires=1837876489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lxy2KNweJHoNTi8vh7ILFrhVZE7mv6LkxurEsU-zqm7AvVfhUFfL7xM6DPl2vqd0vX1Q2I1N3kbby3uJ58zl149n9GtRe6uCTn7xc1i~gCc2dQz7N2~lVTEnbrp-OpBxFHnKaCG3pRR9a3DHS8-ZGXpqRFfaON3SIDKPXBew~uGOhyEcXdKwFLeqP4QuqpdHn98E8-~kTQ0FzlWXOmzJKaCcybBq8Skg~FX35RBKBlJHCnnXRsqIH7j8LR7f035nt6rPkErLoiSoTeWsP6azzw3diQ4HNnbpoR6m0cfPuP0OSRrbqGZe4h2ch9sNMZZBWZVK2BCznO57pGz9y-cvnQ__",
      },
      {
        id: "11",
        name: "Royal Cheese Fries with extra Fries",
        description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
        prize: 120,
        quantity:1,
        image:
          "https://media-hosting.imagekit.io/8d3f6a2023ce4de9/Rectangle%2046%20(1).png?Expires=1837876489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lxy2KNweJHoNTi8vh7ILFrhVZE7mv6LkxurEsU-zqm7AvVfhUFfL7xM6DPl2vqd0vX1Q2I1N3kbby3uJ58zl149n9GtRe6uCTn7xc1i~gCc2dQz7N2~lVTEnbrp-OpBxFHnKaCG3pRR9a3DHS8-ZGXpqRFfaON3SIDKPXBew~uGOhyEcXdKwFLeqP4QuqpdHn98E8-~kTQ0FzlWXOmzJKaCcybBq8Skg~FX35RBKBlJHCnnXRsqIH7j8LR7f035nt6rPkErLoiSoTeWsP6azzw3diQ4HNnbpoR6m0cfPuP0OSRrbqGZe4h2ch9sNMZZBWZVK2BCznO57pGz9y-cvnQ__",
      },
      {
      id: "12",
      name: "Royal Cheese Fries with extra Fries",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 120,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/8d3f6a2023ce4de9/Rectangle%2046%20(1).png?Expires=1837876489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lxy2KNweJHoNTi8vh7ILFrhVZE7mv6LkxurEsU-zqm7AvVfhUFfL7xM6DPl2vqd0vX1Q2I1N3kbby3uJ58zl149n9GtRe6uCTn7xc1i~gCc2dQz7N2~lVTEnbrp-OpBxFHnKaCG3pRR9a3DHS8-ZGXpqRFfaON3SIDKPXBew~uGOhyEcXdKwFLeqP4QuqpdHn98E8-~kTQ0FzlWXOmzJKaCcybBq8Skg~FX35RBKBlJHCnnXRsqIH7j8LR7f035nt6rPkErLoiSoTeWsP6azzw3diQ4HNnbpoR6m0cfPuP0OSRrbqGZe4h2ch9sNMZZBWZVK2BCznO57pGz9y-cvnQ__",
    },
  ];

  return (
    <div className="w-full md:px-15 px-3 py-7">
      <div className="flex justify-start items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Fries</h1>
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
              <button onClick={()=> addToCart(burger)} className="absolute cursor-pointer h-10 md:h-15 w-15 bottom-[-10px] right-[-10px] bg-black/80 text-white rounded-tl-xl p-2 shadow-lg">
                <p className="text-xl md:text-3xl font-bold">+</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fries;
