import React, { useState } from "react";
import { item_name } from "./TopProduct";

export const Products = () => {
  const [arro,setArro]=useState('v');
  return (
    <div className="w-full flex bg-white shadow p-3 justify-center gap-12 items-center">
      {item_name.map((data, i) => (
        <div text='Shopping' pointing  className="bg-white flex flex-col items-center link item">
          <img src={data.link} alt="products" className="w-20" />
          <p className="text-slate-900 font-semibold flex items-center gap-2">
            {data.name}
            {i==1||i==2||i==3||i==4||i==5||i==8?(<div className="text-blue"> v</div>):(<></>)}
          </p>
        </div>
      ))}
    </div>
  );
};
