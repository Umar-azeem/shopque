"use client";
import React from "react";
import Customslider from "../custom-slider/page";

function pagesilder() {
  const images = [
      {
        imgURL:"/img/landscape1.webp",
        imgAlt: "img-1",
      },
      {
        imgURL:"/img/landscape2.webp",
        imgAlt: "img-2",
      },
      {
        imgURL:"/img/landscape3.webp",
        imgAlt: "img-3",
      },
      {
        imgURL:"/img/landscape1.webp",
        imgAlt: "img-1",
      },
    ];
  return (
    <>
      <div className="relative  font-italic  font-sans, font-serif, font-mono">
        <div className="sticky flex h-auto flex-col items-center justify-center text-white">
          <div className="">
            <Customslider>
              {images.map((image, index) => {
                return (
                  <img key={index} src={image.imgURL} alt={image.imgAlt} />
                );
              })}
            </Customslider>
            {/* <div className="info">
              <h1>ReactJS Slider</h1>
              <h2>Features</h2>
              <ul>
                <li>
                  <p>Autoplay</p>
                </li>
                <li>
                  <p>Next and Previous Buttons</p>
                </li>
                <li>
                  <p>Select a desired slide</p>
                </li>
              </ul>
              <h3>Made by rem029</h3>
            </div> */}
          </div>
        </div>
        <div className="sticky flex flex-col h-auto md:flex-row gap-1 lg:px-10 mt-1">
          <div className="bg-white  shadow-md overflow-hidden max-w-sm w-full5">
            <div className="relative">
              <img
                src="/img/man.webp"
                alt="Product image"
                className="w-full max-h-[470px] object-cover"
              ></img>
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-lg">
                Save 25%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                {/* <svg
                  className="w-4 h- text-center text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg> */}
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-start items-start ">
                <div>
                  <a
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                    href="#"
                    data-twe-nav-link-ref
                  >
                    <span className=" hover:border-b w-full border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      USQUARED Men s Essentials Tee Shirt
                    </span>
                  </a>
                  <p>
                    {" "}
                    <span className=" hover:border-b border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      Electronics
                    </span>
                  </p>
                </div>
              </div>
              <div className="py-2 flex">
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="text-md hover:border-b font-extralight border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                    <p>$129.99</p>
                  </span>
                </a>
                <p className="text-md text-gray-500 line-through font-extralight">
                  $159.99
                </p>
              </div>
              <div className="flex space-x-2"></div>
            </div>
          </div>

          <div className="bg-white  shadow-md overflow-hidden max-w-sm w-full5">
            <div className="relative">
              <img
                src="/img/leady.webp"
                alt="Product image"
                className="w-full max-h-[470px] object-cover"
              ></img>
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-lg">
                Save 25%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                {/* <svg
                  className="w-4 h- text-center text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg> */}
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-start items-start ">
                <div>
                  <a
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                    href="#"
                    data-twe-nav-link-ref
                  >
                    <span className=" hover:border-b w-full border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      USQUARED Men s Essentials Tee Shirt
                    </span>
                  </a>
                  <p>
                    {" "}
                    <span className=" hover:border-b border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      Electronics
                    </span>
                  </p>
                </div>
              </div>
              <div className="py-2 flex">
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="text-md hover:border-b font-extralight border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                    <p>$129.99</p>
                  </span>
                </a>
                <p className="text-md text-gray-500 line-through font-extralight">
                  $159.99
                </p>
              </div>
              <div className="flex space-x-2"></div>
            </div>
          </div>

          <div className="bg-white  shadow-md overflow-hidden max-w-sm w-full5">
            <div className="relative">
              <img
                src="/img/towboys.webp"
                alt="Product image"
                className="w-full max-h-[470px] object-cover"
              ></img>
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-lg">
                Save 25%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                {/* <svg
                  className="w-4 h- text-center text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg> */}
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-start items-start ">
                <div>
                  <a
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                    href="#"
                    data-twe-nav-link-ref
                  >
                    <span className=" hover:border-b w-full border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      USQUARED Men s Essentials Tee Shirt
                    </span>
                  </a>
                  <p>
                    {" "}
                    <span className=" hover:border-b border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      Electronics
                    </span>
                  </p>
                </div>
              </div>
              <div className="py-2 flex">
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="text-md hover:border-b font-extralight border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                    <p>$129.99</p>
                  </span>
                </a>
                <p className="text-md text-gray-500 line-through font-extralight">
                  $159.99
                </p>
              </div>
              <div className="flex space-x-2"></div>
            </div>
          </div>

          <div className="bg-white  shadow-md overflow-hidden max-w-sm w-full5">
            <div className="relative">
              <img
                src="/img/blue.webp"
                alt="Product image"
                className="w-full max-h-[470px] object-cover"
              ></img>
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-lg">
                Save 25%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                {/* <svg
                  className="w-4 h- text-center text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg> */}
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-start items-start ">
                <div>
                  <a
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                    href="#"
                    data-twe-nav-link-ref
                  >
                    <span className=" hover:border-b w-full border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      USQUARED Men s Essentials Tee Shirt
                    </span>
                  </a>
                  <p>
                    {" "}
                    <span className=" hover:border-b border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                      Electronics
                    </span>
                  </p>
                </div>
              </div>
              <div className="py-2 flex">
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  <span className="text-md hover:border-b font-extralight border-black animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 group-hover:w-full">
                    <p>$129.99</p>
                  </span>
                </a>
                <p className="text-md text-gray-500 line-through font-extralight">
                  $159.99
                </p>
              </div>
              <div className="flex space-x-2"></div>
            </div>
          </div> 
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <h2 className="text-4xl font-bold">The Second slide</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <h2 className="text-4xl font-bold">The Third slide</h2>
          <p className="mt-2">Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <h2 className="text-4xl font-bold">The Fourth slide</h2>
        </div>
      </div>
    </>
  );
}

export default pagesilder;
