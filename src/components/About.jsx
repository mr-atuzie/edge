import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <div className=" py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex ">
          <img
            className=" h-[300px] lg:h-[500px]"
            src="https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className=" border-t-4  border-r-4  border-b-4 border-orange-500 flex justify-center items-center pr-3 lg:pr-5 py-3 lg:py-5">
            <img
              className=" h-[200px] lg:h-[400px]"
              src="https://images.pexels.com/photos/7108780/pexels-photo-7108780.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="text-center lg:text-start">
            <h3 className=" text-sm text-orange-500 font-semibold uppercase mb-2">
              about us
            </h3>
            <h1 className=" font-semibold tracking-wide text-3xl lg:text-5xl mb-2 ">
              Experience and Expertise
            </h1>

            <h3 className=" font-medium ">
              22+ Years of working experience with global industries
            </h3>

            <p className=" text-gray-700 max-w-2xl mt-6">
              {" "}
              With years of experience in the engineering construction industry,
              we have the expertise and knowledge needed to deliver projects of
              all sizes and complexities. We specialize in design-build
              projects, project management, and construction consulting and are
              commmitted to delivering high-quality solutions that meets the
              unique needs of our clients.
            </p>

            <div className=" flex items-center justify-center lg:items-start lg:justify-start">
              <button className=" mt-3 flex items-center gap-2 py-3 px-7 font-semibold border-2 border-orange-500 bg-white text-orange-500">
                Learn More
                <div>
                  <BsArrowUpRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
