"use client"
import { AlignJustify, ChevronDown, Search, UserRound, X } from "lucide-react";
import React, { useState ,useEffect} from "react";
import HoverCard from "../hoverCard/page";

function Navbar() {
  const [dropdown, setDropdown] = useState("");
  const [show, setShow] = useState(false);
  interface DropdownDataType {
    [key: string]:
      | { section: string; items: string[] }[] 
      | string[]; 
  }
  const menuItems = [
    "New Arrivals",
    "Men",
    "Women",
    "Kids",
    "Home",
    "Wear Your Voice",
    "Minor fault",
    "Clearance",
    "Our Own Brands",
  ];
  const dropdownData: DropdownDataType = {
    "New Arrivals": ["Men", "Women", "Kids"],
    Men: [
      {
        section: "Tops",
        items: [
          "Tees",
          "Polos",
          "Shirts",
          "Outerwear",
          "Ethnic Wear",
          "Big & Tall",
        ],
      },
      {
        section: "Bottoms & Sleepwear",
        items: ["Jeans", "Trousers & Pants", "Shorts", "Thermals", "Sleepwear"],
      },
      {
        section: "Accessories & More",
        items: [
          "Activewear",
          "Footwear",
          "Shoes",
          "Socks",
          "Accessories",
          "Underwear",
          "Caps & Hats",
          "Bags, Belts & Wallets",
          "Eyewear",
          "Gloves & Scarves",
          "Health & Grooming",
          "Fragrances",
        ],
      },
    ],
    Women: [
      {
        section: "Ready to wear",
        items: [
          "Shirts",
          "Kurti",
          "Suits",
          "Dresses",
          "Co Ord Sets",
          "Outerwear",
          "Bottoms",
          "Activewear",
          "Tops",
          "Bottoms",
        ],
      },
      {
        section: "Activewear",
        items: ["Bras", "Panties", "Body Shapers", "Lingerie Sets"],
      },
      {
        section: "Underwear & Sleepwear",
        items: ["Bras", "Panties", "Body Shapers", "Lingerie Sets"],
      },
      {
        section: "Activewear",
        items: [
          "Bras",
          "Panties",
          "Body Shapers",
          "Lingerie Sets",
          "Lingerie Gowns & Dress",
          "Thermals",
          "Sleepwear",
        ],
      },

      {
        section: "Footwear",
        items: ["shoes", "socks"],
      },
      {
        section: "Accessories",
        items: [
          "Bags & Purses",
          "Eyewear",
          "Hats, Scarves & Accessories",
          "Jewellery",
          "Skincare & Cosmetics",
          "Fragrances",
          " Hair Accessories",
        ],
      },
    ],
    Kids: [
      {
        section: "Baby",
        items: ["Rompers", "Tops", "Sets", "Bottoms"],
      },
      {
        section: "Boys",
        items: ["Shirts", "Bottoms", "Sets", "Outerwear"],
      },
      {
        section: "Girls",
        items: ["Tops", "Bottoms", "Dresses", "Sets", "Outerwear"],
      },
      {
        section: "Footwear",
        items: ["Boy's Shoes", "Girl's Shoes", "Socks"],
      },
      {
        section: "Accessories",
        items: [
          "Toys",
          "Play Tent & Play Pen",
          "Eyewear, Belts & Watches",
          "Headwear",
          "Bags & Accessories",
        ],
      },
    ],
    "Wear Your Voice": [
      {
        section: "Baby",
        items: [
          " Free Palestine",
          "Pakwheels",
          "CEO,000,000",
          "Rumi",
          "Super Heros",
          " Doctors",
        ],
      },
    ],
    "Minor fault": [
      {
        section: "Baby",
        items: [
          " Free Palestine",
          "Pakwheels",
          "CEO,000,000",
          "Rumi",
          "Super Heros",
          " Doctors",
        ],
      },
    ],
    Clearance: [
      {
        section: "Baby",
        items: [
          " Free Palestine",
          "Pakwheels",
          "CEO,000,000",
          "Rumi",
          "Super Heros",
          " Doctors",
        ],
      },
    ],
    "Our Own Brands": [
      {
        section: "Baby",
        items: [
          " Free Palestine",
          "Pakwheels",
          "CEO,000,000",
          "Rumi",
          "Super Heros",
          " Doctors",
        ],
      },
    ],
  };
  const handleDrop = (item: string) => {
    if (dropdown === item) {
      setDropdown(null); 
    } else {
      setDropdown(item);
    }
  };
  const handleNav = () => {
    setShow(!show);
  };
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`flex-no-wrap  ease-in-out ${showBanner ? "flex z-0 top-0.5 translate-y-0" : " fixed z-10 top-0 -translate-y-10 pointer-events-none"} flex w-full overflow-hidden  items-center justify-center bg-zinc-50 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start `}>
        <div className="flex flex-col w-full">
        <p
          className={`text-xs  sm:text-sm lg:text-md py-2 mb-4 font-italic flex justify-center 
          font-sans bg-white w-full text-center shadow-lg transition-all duration-700 ease-in-out
          ${showBanner ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
        >
          Get a free gift on every order over Rs.4,000
        </p>
          <div className="flex items-center gap-2 text-center justify-evenly sm:justify-between">
            <button
              className=" border-0 ml-4 bg-transparent  text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleNav}
            >
              {show ? <X /> : <AlignJustify />}
            </button>
            <div className="w-24 h-24 ml-4">
              <img src="/img/logo-t1.png" />
            </div>
            {/* navbar data which is showing defult */}
            {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="relative group"
            onMouseEnter={() => setDropdown(item)}
            onMouseLeave={() => setDropdown(null)}
          >
            <a
              className="text-black/60 transition duration-300 ease-in-out hover:text-black/80 focus:text-black/80 active:text-black/80 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#"
            >
              {item}
            </a>

            {/* Dropdown Menu */}
            {dropdown === item && dropdownData[item] && (
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                <HoverCard item={item} dropdownData={dropdownData} dropdown={dropdown} />
              </div>
            )}
          </li>
        ))}
            <div className="relative flex gap-4 md:gap-8 mr-4 items-center ">
              <Search className="h-6 w-6 hover:h-7 hover:w-7  text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 " />
              <UserRound className="h-6 w-6 hover:h-7 hover:w-7 hidden md:flex text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 " />
              <a
                className="me-4 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                href="#"
              >
                <svg
                  className="h-8 w-8 hover:h-9 hover:w-9 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {show && (
            <div className=" top-0 left-0 w-full  h-full flex md:hidden bg-white dark:bg-gray-700 shadow-lg  transition-transform duration-500">
              <ul className="text-lg text-gray-800 w-full dark:text-gray-200">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col space-y-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                  >
                    <div className="flex justify-between p-4 items-center">
                      <p
                        className={`transition-all duration-500 ease-out transform ${
                          item
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-10 opacity-0"
                        }`}
                      >
                        {item}
                      </p>
                      <button onClick={() => handleDrop(item)}> 
                        {dropdown === item ? <X /> : <ChevronDown />}
                      </button>
                    </div>
                    {dropdown === item && dropdownData[item] && ( 
                      <div className="transition-all duration-700 text-start ease-in-out overflow-hidden transform">
                        <ul className="text-sm text-gray-700  dark:text-gray-200">
                          {Array.isArray(dropdownData[item]) &&
                          typeof dropdownData[item][0] === "object"
                            ? dropdownData[item].map((section, secIdx) => (
                                <li key={secIdx} className="mb-2">
                                  <p className="font-semibold px-4 py-2 text-gray-900 dark:text-white border-b-1 border-black">
                                    {section.section}
                                  </p>
                                  <ul className="ml-4  ">
                                    {section.items.map((subItem, subIdx) => (
                                      <li
                                        key={subIdx}
                                        className={`        ${
                                          dropdown === item
                                            ? "max-h-[400px] translate-y-0 opacity-100"
                                            : "animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300"
                                        } text-md`}
                                      >
                                        <a
                                          href="#"
                                          className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        > 
                                          {subItem}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))
                            : dropdownData[item].map((dropItem, dropIdx) => (
                                <li key={dropIdx}>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 w-full animate-jump-in animate-once animate-duration-[1500ms] animate-delay-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                  {dropItem}
                                  </a>
                                </li>
                              ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
