import React from "react";

const Contact = () => {
  return (
    <div className=" h-[60vh] relative bg-black">
      <img
        className="w-full h-full object-cover"
        src="https://ugc.futurelearn.com/uploads/images/ce/43/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg"
        alt=""
      />
      <div className=" w-full h-full  z-10 absolute top-0 bg-black/70">
        <div className="w-[90%] lg:w-[80%]   h-full  mx-auto flex items-center justify-between">
          <div className="">
            <h4 className=" uppercase font-medium text-gray-100 mb-1  text-sm">
              contact us
            </h4>
            <h1 className=" tracking-wide capitalize text-3xl lg:text-6xl mb-3  text-white font-semibold">
              Get in touch with us
            </h1>
            <p className=" text-gray-100 max-w-xl">
              Thank you for considering EngineeringEdge for your construction,
              engineering or energy needs. Our team is commmitted to providing
              the highest level of service and expertise to our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
