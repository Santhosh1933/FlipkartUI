import React from "react";
import { data,Sdata } from "./electronicData";

export const Electronic = () => {

  return (
    <>
    <div className="h-[20rem] bg-white m-2 flex shadow-lg">
      <div className="w-56 h-full  flex flex-col items-center justify-end">
        <p className="text-center text-3xl">Best of Electronics</p>
        <button className="bg-blue text-white py-2 px-4 rounded-sm shadow-2xl mb-4">VIEW ALL</button>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="" />
      </div>
      <div className="flex items-center  h-full w-screen">
        {data.map((data,i)=>(
          <div className="flex flex-col items-center basis-64  h-full justify-center mr-2">
          <img src={data.link} alt="" className="w-2/4 pb-2 hover:scale-105"/>
          <p className="font-semibold">{data.name}</p>
          <p className="text-green">{data.cost}</p>
          <p className="text-secondaryGray">{data.brand}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="h-[20rem] bg-white m-2 flex shadow-lg">
      <div className="w-56 h-full  flex flex-col items-center justify-end">
        <p className="text-center text-3xl">Beauty, Food, Toys & more</p>
        <button className="bg-blue text-white py-2 px-4 rounded-sm shadow-2xl mb-4">VIEW ALL</button>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" alt="" />
      </div>
      <div className="flex items-center  h-full  w-screen">
        {Sdata.map((data,i)=>(
          <div className="flex flex-col items-center basis-64  h-full justify-center mr-2">
          <img src={data.link} alt="" className="w-2/4 pb-2 hover:scale-105"/>
          <p className="font-semibold">{data.name}</p>
          <p className="text-green">{data.cost}</p>
          <p className="text-secondaryGray">{data.brand}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
