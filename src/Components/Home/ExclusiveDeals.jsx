import React  from "react";
import { useNavigate } from "react-router-dom";

const ExclusiveDeals = () => {
  const navigate = useNavigate();

 
  const ExclusiveDeal  = [
    {
        id:"1",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"30%",
        image:"https://media-hosting.imagekit.io/07df8de3ad184247/Group%208%20(1).png?Expires=1837695360&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RX9hrs~enlLftle6S4v0Bu2YKGeLalmaAiJ3DUdNbyIofG0I7CGi~Vls1Ficmzp0BMEiChwpGZZDM8eBBOPJ0B6R2wOxJj7SdQXsz6IR0vzmmCTEfWvcvZ4wUt2k~csJDugCS45LJ81-civBQ6lgB9d1k7J9ZCtJWsrjC5CFqdBdNG6zC-EnA2RKK3mOrCU89f7~qmLXxaGICu2weXQd-KHJfPMAqcpCYXhLN7HTa9Lcc44ZnERQODB0DpxQXbdhPqllRAzw4vkKSzT803KaMbZNYitxwF94QGJj37ooXiCbThtWpn6QC7ZPiOgS6P0MVlqyQxXC0vyJCvLAA-cWsA__"
    },
    {
        id:"2",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"25%",
        image:"https://media-hosting.imagekit.io/32c58d77997f4001/Group%208%20(7).png?Expires=1837963699&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OT2V0Jqin6IX~lTwbJrDwBnGiXuSdmaokcQJYIJ3-fufiAz881S0juZwji34A0yEmpQqN6vonq06E-2BT01H2Pfl5i6n~pdQOpxbyNf0b1uCQYh2VPFyNnschML2~BXEsVRfPA4d-0YmW2l8COJ0rucnbns8u65HNljPo2wRk5C-7ln7qKJQJdg~7ZSjtkS9haX0gGPJI8am4kSfptWiZel6CQ0OHcolJoo-u5B-zcSvq5SbnVCT4m2j2o~LVgXg2gp~qHraBbp7bgZzyX8D-BV7RmOk20Iy37E5krBI6uW9alerP-INXgkB7T98zyq3bpcVNB9Ae9R7yKo-oTz61w__"
    },
    {
        id:"3",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"10%",
        image:"https://media-hosting.imagekit.io/07df8de3ad184247/Group%208%20(1).png?Expires=1837695360&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RX9hrs~enlLftle6S4v0Bu2YKGeLalmaAiJ3DUdNbyIofG0I7CGi~Vls1Ficmzp0BMEiChwpGZZDM8eBBOPJ0B6R2wOxJj7SdQXsz6IR0vzmmCTEfWvcvZ4wUt2k~csJDugCS45LJ81-civBQ6lgB9d1k7J9ZCtJWsrjC5CFqdBdNG6zC-EnA2RKK3mOrCU89f7~qmLXxaGICu2weXQd-KHJfPMAqcpCYXhLN7HTa9Lcc44ZnERQODB0DpxQXbdhPqllRAzw4vkKSzT803KaMbZNYitxwF94QGJj37ooXiCbThtWpn6QC7ZPiOgS6P0MVlqyQxXC0vyJCvLAA-cWsA__"
    },
    {
        id:"4",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"12%",
        image:"https://media-hosting.imagekit.io/07df8de3ad184247/Group%208%20(1).png?Expires=1837695360&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RX9hrs~enlLftle6S4v0Bu2YKGeLalmaAiJ3DUdNbyIofG0I7CGi~Vls1Ficmzp0BMEiChwpGZZDM8eBBOPJ0B6R2wOxJj7SdQXsz6IR0vzmmCTEfWvcvZ4wUt2k~csJDugCS45LJ81-civBQ6lgB9d1k7J9ZCtJWsrjC5CFqdBdNG6zC-EnA2RKK3mOrCU89f7~qmLXxaGICu2weXQd-KHJfPMAqcpCYXhLN7HTa9Lcc44ZnERQODB0DpxQXbdhPqllRAzw4vkKSzT803KaMbZNYitxwF94QGJj37ooXiCbThtWpn6QC7ZPiOgS6P0MVlqyQxXC0vyJCvLAA-cWsA__"
    }
]



  return (
    <div className="w-full flex flex-col px-2 md:px-20">
      <div className="flex mt-5 px-2 md:px-0 md:mt-5 justify-between w-full">
        <p className="md:text-2xl  flex start-0 py-2 font-bold">
          up to - 40% Order.uk Exclusive deals
        </p>
      </div>
      <div>
        <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 gap-4">
          {ExclusiveDeal.map((restaurant) => (
            <div
            onClick={()=>{
              navigate("/product")
            }}
              key={restaurant.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-50 md:h-58 object-cover"
              />
              <div className="absolute top-0 right-2 bg-black md:text-bold text-white px-2 py-1 md:px-5 md:py-2 rounded-b-lg ">
                -{restaurant.discount}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-yellow-400 text-sm">{restaurant.category}</p>
                <h2 className="text-white font-bold text-sm md:text-lg">
                  {restaurant.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeals;
