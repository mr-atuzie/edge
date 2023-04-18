import React from "react";
import { IoLogoCapacitor } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" py-10">
      <div className=" w-[80%] mx-auto">
        <div className=" flex justify-between items-center">
          <div>
            <div className=" flex items-center gap-2">
              <div className=" text-orange-600">
                <IoLogoCapacitor size={40} />
              </div>
              <div>
                <h1 className=" font-semibold text-lg capitalize">
                  Engineering
                </h1>
                <h3 className=" text-orange-600 font-bold text-2xl uppercase -mt-2">
                  Edge
                </h3>
              </div>
            </div>

            <p className=" text-gray-500 text-sm leading-7 mt-4">
              We are committed to providing the highest level <br />
              of service and expertise to our clients. our team <br />
              is dedicated to helping you achieve your goals
            </p>
          </div>

          <div>
            <h1 className=" font-semibold text-lg  uppercase mb-4">Links</h1>

            <p className=" text-gray-700 uppercase font-medium mb-2">home</p>
            <p className=" text-gray-700 uppercase font-medium mb-2">service</p>
            <p className=" text-gray-700 uppercase font-medium mb-2">product</p>
            <p className=" text-gray-700 uppercase font-medium mb-2">News</p>
            <p className=" text-gray-700 uppercase font-medium mb-2">contact</p>
          </div>

          <div>
            <h1 className=" font-semibold text-lg  uppercase mb-4">
              Follow our social account
            </h1>

            <div className="flex gap-3 items-center">
              <div className=" bg-orange-600 text-white h-[60px] w-[60px] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className=" text-gray-500 text-sm  text-center  p-3 capitalize">
          copyright EngineeringEdge. 2023 all right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
