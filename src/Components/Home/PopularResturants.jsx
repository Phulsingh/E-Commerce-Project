import React from 'react'
import { useNavigate } from 'react-router-dom'

const PopularResturants = () => {
  const navigate = useNavigate();
    const PopularResturants = [
        {
            id:"1",
            name:"McDonald's Londan",
            image:"https://media-hosting.imagekit.io/0537b697a60c4952/Rectangle%2013%20(1).png?Expires=1837768331&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rJbpjhnT195~HtHvT8-C5wp8VQtUONj3rkZaHYK34RMiixiLkBvXVX1Mt-JNdvBUWN4AeRCz2yX~7xvTN2NCm5wYIIBC7b7vbINTKSZnErNvgVnF~UjL2ZRrYC-gcFjABQXCjq0uyi10J1jSIzuNRn2OckMYSFcGsSptIT37hOQSABnx4ZSKaV6aAi7GeckqQ-yZcBxady6017TXbW-ATBJ~8e6NifuugjWuzbgy3yIAsGf5kNpGWRQRFHO6Sv2y6zfv5ls6~aStsKvv~6WIYluslAa-7dOq3dZ5mlliEhgdeajDI3XcgagJhoOaLLh-z8VxM~-o79m4lFkbhqJMbQ__"
        },
        {
            id:"2",
            name:"Papa Johns",
            image:"https://media-hosting.imagekit.io/b5d124c1de1043d1/Rectangle%2013%20(2).png?Expires=1837963935&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kt14PvS8~5wHI5ffNc1jZrWY2Yy9D97mahTnPFFMA2QmnVeD1xuk5y21D9KxS74f1nfBshoKPKROy7Sgc0~jrwZdFcleHgQi~In67Fy-YIJG665QvQPWh8GpvlWFWMmWlDAQYF1tMSMVw-aPGvDEDtSNol1y8JVq5kQPSw~ufXF5Y4FgR3P2DHvzCYfzAQf5jg1JL8tGQKVj6938G68fhsxwlET~bNHGHHxehN5-MJFeAEPooE59mSCTXp7KNlH9HFTpS2BS6z1afQLwzwqXSrB-CP4QgCAYVTd8T26THRc2hxgUhE7M6b~aepTNxXqfPVhXVgWpVLmIc19Wjhuofw__"
        },
        {
            id:"3",
            name:"KFC west London",
            image:"https://media-hosting.imagekit.io/029f7bafc26841f9/Rectangle%2013%20(3).png?Expires=1837964146&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xfg20OgOobaHLuUUfUHYED6LTJUNiVJMIx8znNzjtxfJaFkJM8FSGxwZh1-RMX9Aeula34hnYx5dKk-D1ecwqsO2SxHp69lWyG2S-pZK4eFEtKjDnDwwpGWWgTL2ZGwzpMfkaBodpAHhlu4Au1W~hqOnwwNY0AheLrKG-QyH-Uie2DwgUpaUXzviuyxZ7drxsW80uVfrvyF5ReRYrnnOmrpfFE4bR-VBJ~AzN2aGLm1IXNY7D2M0g07RsM5DnmCCasBBDNke0LjBufPbFU1V1-G5ocLSQWcgQdD0algrF9-Ik8G1NutGeLEWXQ6hloVZoVhZem1RMYdzTegRl1HA2g__"
        },
        {
            id:"4",
            name:"Texas Chickens",
            image:"https://media-hosting.imagekit.io/57c3e8e2258c45c7/Rectangle%2013%20(4).png?Expires=1837964185&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KdrPTxjD7K6PAXg5OkDatNoVR19HNdn2k6D6uYSAwxMsgu7FE8M5xnGmuewYGiq~gHkQOGHmIbIRUXGw2KqAFUIftJ8tiB-iTXoV54EU0Fjee9hcksvrhRaugttWLWOLLnpXK0vasjo~2YcJwF2Ivhf9J4pWuSwXAR6xrUm10jw2ZX7CLEDAj4ME71dCNci-RUEiIUPzhi2I6PVj1Uh4GERYIiNaAPp1aKP~uqRHK08aDpw5aip5Q3kxH5j9StVcnHffow1ZD2GhnGvyo7nFuGJ71PjJVneH0DVHxN-ud1I~NIJEyuBerFXArstG09RM0RLUGeMlbCp~gTOeuewz6A__"
        },
        {
            id:"5",
            name:"Burger King",
            image:"https://media-hosting.imagekit.io/f1bb46eb7a364f2c/Rectangle%2013%20(5).png?Expires=1837964224&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qUU608~zUBVEfQ3ZgNXTxOsAzPCJJ5mTwVFxR5~m6Lyy75GhqoceA457asYPsGRQaycZYkNTTMAbSmJ74vy5lQvjf1KQ1wuh-KzKIhCsjOHaxeTQebWag97FmIvdEGW6KTfpbtiNWcvHEfEj5CExmJOiprgsbikH2H65uCta3p9oMBnxcG6OXIu-fS7pI2daRlwlW6kW5ySFChgIxxCy3sBkrGxNft0be4APyO9uxy7biuTnvKP0b4v5gBR4xMxQFESw2927P817zfW6-Sq6khwHuSc3XZ4u~iZPDJlVbkXrZM5TXWvQuuGiufRnEaXWbrx4cMiuNRFw77cJgivQkw__"
        },
        {
            id:"6",
            name:"Shaurama 1",
            image:"https://media-hosting.imagekit.io/6eb3652a243441fc/Rectangle%2013%20(6).png?Expires=1837964281&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LyZAIxZZPr43nLk~1-MfGGHSY98M1TBARimj3vEFSKUYyvaw~2VJsPSMGLOUxxV7G0yVO3wrAehELwIJPALlvOQ9eWiPaSGJQtMjlwjyAU90V7VikL1JMeRdjxRfJ8M~ZCXQaUCr6i3sLmPF5x2ABl4ilPFrjtwkjqiZJHgfHMhW7N0VTImkr4evEhhITIwlPE10c4fU2P6tnK1e1sXWeQ6HRYnveLoQmNjUI24Nvti-qJCIT-bf9LqIG0Z5lTjTMKnD2nQzju-WHtx-abQtTWdtendLOTXAN2d1B3pH3rLfi6XqfBACYH9-xiq7hFvIyeA~XoFY843WUNT-x7TtHw__"
        },
        
    ]
  return (
    <div className="w-full flex flex-col px-2 md:px-20">
    <div className="flex mt-5 px-2 md:px-0 md:mt-5 justify-between w-full">
      <p className="md:text-2xl  flex start-0 py-2 font-bold">
        up to - 40% Order.uk Exclusive deals
      </p>
    </div>
    <div>
      <div className="grid cursor-pointer grid-cols-2 md:grid-cols-6 gap-4">
        {PopularResturants.map((restaurant) => (
          <div onClick={()=>{
            navigate("/product")
          }}
            key={restaurant.id}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 md:h-40 object-cover"
            />
            <div className="bg-[#FC8A06] p-2 md:p-3">
              <h2 className="text-white font-semibold text-sm md:text-lg">
                {restaurant.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default PopularResturants
