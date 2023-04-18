import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" h-[60vh] relative bg-black">
      <img
        className="w-full h-full object-cover"
        src="https://ugc.futurelearn.com/uploads/images/ce/43/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg"
        alt=""
      />
      <div className=" w-full h-full  z-10 absolute top-0 bg-black/70">
        <div className="w-[85%] lg:w-[75%]   h-full  mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-start lg:w-[45%]">
            <h4 className=" uppercase font-medium text-gray-300 mb-1  text-sm">
              contact us
            </h4>
            <h1 className=" tracking-wider capitalize text-3xl lg:text-5xl mb-3  text-gray-100 font-semibold">
              Get in touch with us
            </h1>
            <p className=" text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus fugit aliquid doloribus ipsa, excepturi alias temporibus
              quasi consequuntur provident soluta ducimus numquam molestias
              laudantium unde iste, vel laborum quo sapiente?
            </p>
          </div>
          <div className=" lg:w-[40%] mt-5 lg:mt-40 shadow-xl bg-white p-8">
            <h1 className="  uppercase text-2xl mb-6   font-semibold">
              Get a free quote
            </h1>

            <div className=" ">
              <div className=" grid grid-cols-2 gap-4">
                <div className=" flex flex-col mb-3">
                  <label className=" uppercase text-xs font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className=" border p-4 border-gray-300 rounded placeholder:text-gray-500 placeholder:font-medium"
                  />
                </div>

                <div className=" flex flex-col mb-3">
                  <label className=" uppercase font-medium text-sm mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className=" border p-4 border-gray-300 rounded placeholder:text-gray-500 placeholder:font-medium"
                  />
                </div>
              </div>

              <div className=" flex flex-col mb-3">
                <label className=" uppercase text-sm font-medium mb-2">
                  phone number
                </label>
                <input
                  type="email"
                  placeholder="Enter your phone number"
                  className=" border p-4 border-gray-300 rounded placeholder:text-gray-500 placeholder:font-medium"
                />
              </div>
              <div className=" flex flex-col mb-3">
                <label className=" uppercase text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className=" border h-[100px] p-4 border-gray-300 rounded placeholder:text-gray-500 placeholder:font-medium"
                  placeholder="Type here"
                ></textarea>
              </div>
            </div>

            <div className=" flex justify-center items-center mt-6">
              <button className="flex gap-2 items-center bg-orange-600 text-white capitalize px-8 py-4">
                request demo
                <div>
                  <BsArrowUpRight size={30} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
