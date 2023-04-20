import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className=" py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <div className=" ">
          <h3 className=" text-orange-500 font-medium capitalize mb-1">
            our project
          </h3>
          <h1 className=" font-bold text-3xl mb-4 ">Case solution</h1>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className=" flex items-center gap-2 py-3 px-7 font-semibold border-2 border-orange-500 bg-white text-orange-500">
            See more projects
            <div>
              <BsArrowUpRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
