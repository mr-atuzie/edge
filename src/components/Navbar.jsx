import React, { useState } from "react";
import { IoCloseOutline, IoLogoCapacitor } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about-us", name: "about us" },
    { id: 3, link: "/services", name: "service" },
    { id: 4, link: "/blog", name: "project" },
    { id: 5, link: "/contact-us", name: "contact" },
  ];
  return (
    <nav className=" absolute top-0 w-full z-50   text-gray-50">
      <div className=" w-[90%] lg:w-[80%] flex justify-between items-center  mx-auto py-4">
        <div className=" flex items-center gap-2">
          <div className=" text-orange-600">
            <IoLogoCapacitor size={30} />
          </div>
          <div>
            <h1 className=" font-semibold text-lg capitalize">Engineering</h1>
            <h3 className=" text-orange-600 font-bold text-xl uppercase -mt-2">
              Edge
            </h3>
          </div>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, name }) => {
            return (
              <li
                key={id}
                className=" text-gray-200 capitalize px-4 cursor-pointer hover:text-orange-500  hover:scale-105 duration-200"
              >
                {name}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex">
          <button className="flex items-center gap-2 py-3 px-7  border-2 border-gray-200  text-gray-200">
            Get a Quote
          </button>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className=" cursor-pointer z-40 lg:hidden"
        >
          {nav ? (
            <IoCloseOutline className=" text-orange-500" size={30} />
          ) : (
            <HiOutlineBars3 size={30} />
          )}
        </div>

        {nav && (
          <ul className=" flex flex-col justify-center absolute z-30 items-center bg-gray-50 top-0 right-0 w-[300px] h-[450px]">
            {links.map(({ id, name }) => {
              return (
                <li
                  onClick={() => setNav(!nav)}
                  key={id}
                  className=" text-gray-700 px-4 cursor-pointer capitalize py-4 text-xl  hover:scale-105 duration-200"
                >
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
