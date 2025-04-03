import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCategory = () => {
    const navigate = useNavigate();

  const PopularCategory = [
    {
      id: "1",
      name: "Burger & Fast Food",
      list: "21",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/a4ebd2374f3a4b2d/Rectangle%2013.png?Expires=1837766744&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dMD8B5~tBUiocODliPzhS2MhjnrfAqQ1kWSsLZ-kJwphrhHXUX4KVX2oiyXzpIXm38s2wx64dd-YnSoA1SqnMJmxGPX1qSIAlwYt3LhqZ~aBzCwiVWV5JK43L8MoMBkn-wdJnmmvIf-XO12t3Jiry2Rw7iZPnZz~N7Okm2ZreGUboWkoX74L8EH3lie~US7IeDRMGdmaNPlNQiwcJXDAGny~1CoVAYfoLsxPC9yugmOXMAYoPuFqkq4~fGBDPIt0j6f83SyjLNvyj6TQfJ~jEmiBhbHX0hgKagREzU9WpHMbqus0vGXIyIl1JKpl8odrbfc64fa~SvZC2g9cvBBsNw__",
    },
    {
      id: "2",
      name: "Salads",
      list: "31",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/546d285af1d848f4/Rectangle%2015.png?Expires=1837964342&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wuaqVX7m7AcH0Cbq~UCSmE92C5JlWr4Q6QUa6zlHFMRe3XM-EKaZZLKk4ZyQ1QNpfW8NDI52u4AEzJu9nEFIUnA1yriJhVhV3OqJlYF7VxpBTzasb2QxLa2~-V6dQjm5ha3Ko8ZtMbEz5iZCqy4cx2XUjYMv1PMymBWbGZnmoPDqy7ML2HVo3H~EyU3NuLFyHds~GfFSaPzAFqE6ZNDe5pJKf21Q0IC~HCYStlISOMpLRB2Hrt1m-wQ8P8R7Equ4sAPgGvmp29Il2~zeKTcnGdTVfQNnpP3JFjSOqHshH5FCcDtJkFM1bUGx6l7K~2ddFf6kzIECcFx2r-gGAX95Tw__",
    },
    {
      id: "3",
      name: "Pasta & Casuals",
      list: "10",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/2b6975f5fd084e1e/Rectangle%2017.png?Expires=1837964399&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t2naF1OPwK-4H160px8umL88-90f2JQrW6dDLiZM7FmuI11kBzR7sAPq98eevc108tun0~NBna4Jr6yyRSTnbuZ~krDp~ys4i6T7uW5Q8r3sMh7eGo6wK88QqZTJsSyBeAG6V25yBumBbc8GIx1k5lmHTWFnvHQiePXRlFAGv1Kqb1CedF1BMeC6OmHa~TxrucmFHBMaJtsmzBue-KF3hVmOTtyFKD8dCgu0mF3bs4n1xESq4HKOS9bRoKRNyzLAvvOPJxNpV-8nMxv-oDRYrLGHGUAevDgiODfuiET-WllxioQjWLYCxqs10T1LI3hVFyBv-ic6AWMHoE3GExPCvw__",
    },
    {
      id: "4",
      name: "Pizza",
      list: "5",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/d5b600cedb044809/Rectangle%2019.png?Expires=1837964460&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qRMipcm3RbADcVajCFg1m9MpC-ua2Jt9rMGHnrqHh-lTI90JoXjn2XGpjDg0mUQAlNpSAA6gweq5pQfwEAoEFPkSUALCnoAMHDlIJyxaKnJDMd57aAbYJsbILXZnrqkCNLZXRF~xGKxq7GSHQILZEGv5gUwv-KeQdXS810xj5gL2waIX03b3bInvlomu24c47nn9Z8Z88dpb4bR~nauBAtkgxbsC0jlj6BKhwoeAWU0eJiWC5ZGdfeQxAfEQi0KHiT7fVCiZG18goPUs3UoSQTQ3Sv3poidNdvjDlk7q~hm-1IROgWWGbIkpEjmECIqoFBAKeS4ItlWvqS5FgVg5NA__",
    },
    {
      id: "5",
      name: "Breakfast",
      list: "4",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/d4a45a482a134c33/Rectangle%2021.png?Expires=1837964498&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=syNaNBip~Aqkj3euiFV~-WvGNKVFHCcLdF-KRjucHuaRQtjRmMevXXFHRUPiajm~JWFSwTucxwY0K0Ql0N8SEuMXGy1qUUfTbOU~rq3GCEs98J~oPHDl3Ui6sdwW~rrDMcHsU0E1LKM3eXI4cvQnzxyV1O7zOMwQROgbhZyVlTaKaV8jctbdgk8KxKRG1JSKrYCww7Ajo4civiNhJnI1aIPu448Ev35VJrYODrPRf7KJ3G4aXAw~FNKQLCShoXtpp1JNwP3Mc8KQT6JC~lf1iMxnBrb2H8tRlRoLz9bki8uSqeEdAm1KR5Z3Zbz7A-bz0tzOaJg6CJW5w0wxajfjgQ__",
    },
    {
      id: "6",
      name: "Soups",
      list: "32",
      category: "Restaurants",
      image:
        "https://media-hosting.imagekit.io/41b744b523984af2/Rectangle%2023.png?Expires=1837964539&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z4wmlfZcxlxltF0j-I32YWxgGtynn38UROaV9n5o1Owoh~xZwUGcgcajL9BEaEHEJlA5g2J5MXFKEtoQDjpFkHyssHbEOPVpltygXVcDLcinU5~ebHSZImfMG-2-qiQcChGJ5vExznqqvNMmwOLvDJuIxOpBC8i8A7vFeVt9DCO8rdbpAu2c3CrXkRDjQk4zu2VOlRslWoXWyUcqkqgMArzNSzYAlTQhhd89ThX2jjUoY7N7-cceV52VGAb-OkLWo8NvvsnSeqCNP7686X7jyFuwCn5G2b~Q7PZtQ6p5e3nWTZuv00qo5GcyLsFTCvfsEX0WBbEPz~Pk3YVvJlmtMQ__",
    },
  ];
  return (
    <div className="w-full flex flex-col md:px-20">
      <div className="flex mt-5 px-2 md:px-0 md:mt-5 justify-between w-full">
        <p className="md:text-2xl flex start-0  font-bold">
          order.uk Popular Categories
        </p>
      </div>
      <div className="w-full cursor-pointer p-2 md:py-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {PopularCategory.map((popcate) => (
            <div
             onClick={()=>{
                navigate("/product")
             }}
              key={popcate.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={popcate.image}
                alt={popcate.name}
                className="w-full h-35 md:h-40 object-cover"
              />
              <div className="flex flex-col p-2 md:p-3 bg-[#0000001A]">
                <p className="font-bold text-sm md:text-[16px]">{popcate.name}</p>
                <div className="flex space-x-2 justify-self-start items-center">
                  <p className="font-bold">{popcate.list}</p>
                  <p className="text-sm font-semibold text-[#FC8A06]">{popcate.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
