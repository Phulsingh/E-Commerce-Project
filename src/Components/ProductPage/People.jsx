import React  from "react";
import { useNavigate } from "react-router-dom";

const People = () => {
  const navigate = useNavigate();

 
  const ExclusiveDeal  = [
    {
        id:"1",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"30%",
        image:"https://media-hosting.imagekit.io/01fc9f311f824390/Group%208%20(6).png?Expires=1837857716&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RJo6h6PUdLhPn2aaNrN1BNfDrNMjGQ046uWo2ytX-oNNwpUkpC1cTj0VR8CcPNS-rd26fbgJV2EKjkQU9a6xAtvWFfIAATCHo~bCnKsb03jucJlXWzTmIEHYKQxp8oWHJim1sjCC77ugrxg7Bz8Qe8895zVWHxU36P5Af1yR9nYWR0wBWpp0~CEVRlR-yMuoAfAbR5QqF4xMDPvCrUxIqQxAvPEUocLqlXAU2XIAm5dgrkpfvrZlCXQhk-2l7IGLdqhu5qoZqJ6HVrVcAJqK0fXYFeWuw4BMQ5dwTjnyayCDDNetc4zLFOZt9Jm5l1D8E1QAYnYiouPZkB93M234Jg__"
    },
    {
        id:"2",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"25%",
        image:"https://media-hosting.imagekit.io/2db8c482ee8c4842/Group%208%20(4).png?Expires=1837857420&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HJVgAI~F4kUOuNWsnRmQEh511LxgmSJYf95EorjYxyW6wE8ZRNsL7p9tw7-PXMTdRy7a4N0BL9HVUbMuu5PxPLUWllJffz-Xz38LUCnhpe3nd2BFf24HXqNAJCxWFNIaZ7bGeRDef1As56GhUcf8kzwbURb4fRL8r4gWPKV~sbMbU8ghsvJ3z62oR907QbBlQrddb49WHjc4HuNyZEFsp9slhyw22SF~q~zqeFYL2GgEP8YiFMD-mqoxICoQ5p~R0~MbprIxiuya45VpHWcD2eXQB8SfewMCpvDtQ1ro8zHdCfiKEfvAGC5rG1CZVDp-95v~3mpM9tm3eQRSwdEGqA__"
    },
    {
        id:"3",
        name:"Chefe Burger London",
        category :"Restauant",
        discount:"10%",
        image:"https://media-hosting.imagekit.io/9540852cea7f41e7/Group%208%20(5).png?Expires=1837857684&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HFCWTbBOLzg-jQPBq7KPVXUi9Igv1QRyScW2iV3KXVYdtG1dg9sxKi6quDwp9bVAbfSRQqMS0mIAp2AuTPxvf4hsg~N7tC0Otw0ycI3ViGPHRzMaE5mjWVFBBoyP6eZVzveiBtsruiiiMQeDsSma7jUwxtuSemO6F~5B~wA~E5hoynQlGyQ3MwJMrPT4YKFNqx6i2nF68nERGRWhAFzgXBMqIziDFAvfflY8G55z-pXAHTS16Tx9uSbdg7VHyozc19gzN7EXTJS0x9ML2KuZ4hWc8bRsWGLL9eaJH3lR04cubKXXvbnsgIcgN9L2ikkXTeCjXFSvleJBaYiZ5gZbsA__"
    },
]
  return (
      <div className="p-3 md:mx-10">
        <div className="grid cursor-pointer grid-cols-1 md:grid-cols-3 gap-4">
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
                className="w-full h-50 md:h-70 object-cover"
              />
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
  );
};

export default People;
