import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const Slider = () => {
  return (
    <>
      {/* <div>
            <img loading="lazy" src="./Images/img1.jpg" alt="" />
        </div> */}

      <Carousel
        className="relative p-2 cursor-pointer"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        showArrows={true}
      >
        <div>
          <img
            src="./imgs/download.webp"
            alt=""
            className="w-full pt-5 "
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="./imgs/download1.webp"
            alt=""
            className="w-full pt-5 "
            loading="lazy"
          />
        </div>

      </Carousel>
      
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-28 absolute top-[35%] bg-white rounded-e-md "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-28 absolute top-[35%] right-2 bg-white rounded-s-md"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
    </>
  );
};
