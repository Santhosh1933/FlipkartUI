import React from "react";

export const Search = () => {
  return (
    <div className="bg-white w-2/6 rounded-sm h-4/5 flex flex-row justify-between px-5 items-center ">
      <input
        type="text"
        className="outline-none"
        placeholder="Search for products, brands and more"
      />
      <svg
        class="h-8 w-8 text-blue"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="6" />{" "}
        <line x1="20" y1="20" x2="14" y2="14" />
      </svg>
    </div>
  );
};
