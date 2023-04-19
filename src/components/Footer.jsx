import React from "react";
import { IoLogoCapacitor } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" h-[60vh] py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <div className=" flex flex-col gap-14 lg:gap-0 lg:flex-row justify-between py-10 ">
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
              We are committed to providing the highest level{" "}
              <br className=" hidden lg:block" />
              of service and expertise to our clients. our team{" "}
              <br className=" hidden lg:block" />
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
              <div className=" bg-orange-500 text-white h-[40px] w-[40px] flex items-center justify-center rounded-full">
                <FaFacebookF size={25} />
              </div>
              <div className=" bg-orange-500 text-white h-[40px] w-[40px] flex items-center justify-center rounded-full">
                <FaInstagram size={25} />
              </div>
              <div className=" bg-orange-500 text-white h-[40px] w-[40px] flex items-center justify-center rounded-full">
                <FaWhatsapp size={25} />
              </div>
            </div>

            <h1 className=" font-semibold   uppercase mt-6 mb-2">contact us</h1>
            <div>
              <div className="flex gap-3 items-center mb-3">
                <div className=" text-orange-500">
                  <FaEnvelope size={20} />
                </div>
                <p className=" text-sm text-gray-700">
                  Info@engineeringedge.com
                </p>
              </div>

              <div className="flex gap-3 items-center mb-2">
                <div className=" text-orange-500">
                  <HiPhone size={20} />
                </div>
                <p className=" text-sm text-gray-700">(234) 456-7890</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" font-semibold text-lg  uppercase mb-4">
              subscribe
            </h1>

            <input
              type="email"
              placeholder="Enter your email"
              className=" w-full lg:w-[350px] border p-4 border-gray-300 rounded placeholder:text-gray-500 placeholder:font-medium"
            />
            <button className="flex gap-2 items-center mt-4 bg-orange-500 text-white px-6 py-3 uppercase">
              send
            </button>
          </div>
        </div>
        <div className=" text-gray-500 text-xs lg:text-sm  text-center  p-3 capitalize">
          copyright EngineeringEdge. 2023 all right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
