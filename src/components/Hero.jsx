import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" h-[60vh] lg:h-[90vh] relative">
      <img
        className="w-full h-full"
        src="https://media.istockphoto.com/id/1273337098/photo/aerial-shot-of-a-new-constructions-development-site-with-high-tower-cranes-building-real.jpg?s=612x612&w=0&k=20&c=DQmHvLXo9-6QD-tYlNZ0i3kibCBr5WWiYB1ktwKT7pY="
        alt=""
      />

      <div className=" absolute top-0 w-full h-full   bg-black/90">
        <div className="w-full h-full flex items-center px-6 flex-col justify-center ">
          <h1 className=" text-center text-4xl lg:text-6xl text-white font-semibold uppercase">
            your partner in transformative <br /> engineering construction
          </h1>

          <p className=" text-gray-100 text-center mt-6">
            We pride ourselves on our ability to communicate cleary and
            collaborate <br className=" hidden lg:block" /> effectively with our
            clients, ensuring that their goals and vision are always at the{" "}
            <br className=" hidden lg:block" /> forefront of our work.
          </p>

          <div className="flex items-center justify-center mt-8">
            <button className=" flex items-center gap-2 py-3 px-7 font-semibold bg-orange-500 text-white">
              Discover More
              <div>
                <BsArrowUpRight size={20} />
              </div>
            </button>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-6 gap-3  absolute bottom-4 ">
          <img
            className=" h-[200px] "
            src="https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg"
            alt=""
          />
          <img
            className=" h-[200px]"
            src="https://newsletter.blogs.wesleyan.edu/files/2023/03/DSC_1065-scaled-e1678816059108-1280x675.jpg"
            alt=""
          />
          <img
            className="  h-[200px]"
            src="https://www.build-review.com/wp-content/uploads/2021/06/Minimizing-Disruption-to-Construction-Projects.jpg"
            alt=""
          />
          <img
            className=" h-[200px] "
            src="https://www.devicemagic.com/wp-content/uploads/2020/01/AdobeStock_190729433-1-2.jpg"
            alt=""
          />
          <img
            className=" h-[200px]"
            src="https://www.designingbuildings.co.uk/w/images/0/08/Gravel-pit-g267ef5258_1280.jpg"
            alt=""
          />
          <img
            className="  h-[200px]"
            src="https://capeeng.co.za/wp-content/uploads/2021/08/worker-with-contruction-iron-lines-building-foundation-construction-worker-scaled.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
