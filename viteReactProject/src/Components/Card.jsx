import React from "react";

function Card({card1="Available Soon", price, imagesrc}){
    
    return(
    <div className=" max-w-[1120px] m-auto flex flex-col h-auto items-center mb-12 ">
            <h1 
                className="bg-green-500 mb-5 py-4 px-16 rounded-2xl">
                {card1}
            </h1>
            <div className="w-60 h-60 rounded-xl">
                <img
                    src={imagesrc}
                    alt="Giphy"
                    className="rounded-t-xl h-full w-full"
                />
                <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
                    <h1 className="font-bold  font-mono  text-xl bg-green-500 text-center   ">Price: {price}</h1>
                </div>
            </div>
    </div>
    )
}


export default Card
