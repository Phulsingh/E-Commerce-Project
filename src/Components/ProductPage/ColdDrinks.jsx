import React from "react";
import { useContext } from "react";
import MyContaxt from "../Contaxt/MyContaxt";



const ColdDrinks = () => {

  const {addToCart} = useContext(MyContaxt);

  const Burgers = [
    {
      id: "5",
      name: "Royal Cheese Fries with extra Tomato chechup",
      description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
      prize: 120,
      quantity:1,
      image:
        "https://media-hosting.imagekit.io/f4fc690d090e489e/Rectangle%2046%20(3).png?Expires=1837876982&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ht25K5u2-tfzGkzj-Cc9eHs7JXsoqmfnUPEF-OPNidcmIEJQO8qkNKPhtz7jUie7p3j0XT90xlkfuf2VxMW3ljRDWh9bBXr~7BueZrzZTVPnY3rE9xakDB5FRXNsF1jB~-tuRYaDy6yWHa~YfRQnoiLwm7t7SJ66I9qThqadVGNo4~F9PD~sUw89TVCKqxBnZhESmiAkJZxVvdBoK858knhwYqB3uwCE6BCitdE07j0mcyKdT3fxXxk9NyuKEOYGkFJ9YJyafE46jfjd8sTNLkdYz3YjYjWuq-LMoK6BtdLTYLrrCvecwXsJdUu~84-AHiLZIk0iD-PjGuf9T0mAFg__",
    },
    {
        id: "6",
        name: "Royal Cheese Fries with extra Tomato chechup",
        description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
        prize: 120,
        quantity:1,
        image:
          "https://media-hosting.imagekit.io/aed794ad098e4d7c/Rectangle%2046%20(4).png?Expires=1837877029&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rSYkN3hNR~L-b-muEIgC3llDYX30UqbX~cTXSWJNUdXQ9u1jW9hwAEuPkkxDgWIsARLTjZ5x4l~76~-bNBHhEyScK-a51qzETlqjJG5PliD-GctRCCKCBKXwsWk6thAhXtsvSUi-H1VrXTdKkiP5tE1I0nTz8v2PXkBWYZFUSkE3mfpplskjFfS48CZ5zqd39fGKeNj4~tg8V9PD5pS9w39VaVXAY-FbJZhRaeqp8p29GL26LJiUjoXwN4ie-EfSKI91w2lqvxBVazVRbuD-IWeuT0dLPDhuDjuP6SrTK8qRAuAMkKoze9owz3W9nHzEmU~pwjfqtDMKZs2ki03SoQ__",
      },
      {
        id: "7",
        name: "Royal Cheese Fries with extra Tomato chechup",
        description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
        prize: 120,
        quantity:1,
        image:
          "https://media-hosting.imagekit.io/6a4123f6371640f5/Rectangle%2046%20(5).png?Expires=1837877106&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0ljT8PX00E2kzAWy2G3hq55V-FyH9wc~WniiH-OAJqkJTQOBPG0MVCiPZfTJ1s-X1-VYAK1Gu7Uk73H-ebStOEgHuIqNMDyMyil~C0jXkL9LwjmK9ATPMs7zJkVJ7V3Fb4rawzrOvbXNEOyOIwjPyrVEGcK022ZBiVlNVm~GAgpvXvLKFBgOiwOZwjDc1Xa8nhDZEgecGgW2WDxy6W26MR7XlQYUAcv8zsqg6cXhEG5wkct0dRgbN07iEzdjKrQvLqk3pZ1-wWBfb36oCfU6lxDTnkq~vWrrxnRMG5pS9OghfLLY5phjHnUSFmMqwYv3Dxog9vtfCzyyAq-sbCCC9g__",
      },
      {
        id: "8",
        name: "Royal Cheese Fries with extra Tomato chechup",
        description: "1 MC Chicken, 1 Big Mac, 1 Royal Cheeseburger,",
        prize: 120,
        quantity:1,
        image:
          "https://media-hosting.imagekit.io/121ca40e89e74423/Rectangle%2046%20(6).png?Expires=1837877141&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L1dke20lQyoOtiWFOMiuIuvJ~aUQWmv4K5mc1Kd1ASRjFgH7E13FprzPCLz97i2XMf0AqvFGpv-dCZ3lHOKsPsKC0eC5ZrOLcM1XDGS9QoqfQYX2DeANdAxvdKv6kZnn~nH-7xhomPZW9EbwG98BeL3m9imXJSEmqMCO4AdJvh-fO0dmYZhEaAnkNG0YZtuPpR~5PMUqZlVi9mMn2a38ba6BGAQgg2owmvoCcow8IpNBac~8sPfL7Ip0nsabYpGZaESYCgZ290WALvz3MEtd7X7G2rCRGa-venfz1JmokYMCAtjLNRVLW~8KBQfTW7cvDhvS84gsCCdU2jGvXipRWQ__",
      }
  ];

  return (
    <div className="w-full md:px-15 px-3 py-7">
      <div className="flex justify-start items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Cold Drinks</h1>
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
              <button  onClick={() => addToCart(burger)} className="absolute cursor-pointer h-10 md:h-15 w-15 bottom-[-10px] right-[-10px] bg-black/80 text-white rounded-tl-xl p-2 shadow-lg">
                <p className="text-xl md:text-3xl font-bold">+</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColdDrinks;
