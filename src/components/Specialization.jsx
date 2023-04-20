import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Specialization = () => {
  const services = [
    {
      img: "https://engineering.utulsa.edu/wp-content/uploads/sites/4/2017/08/north-campus-web.jpg",
      name: "Petroleum and Gas Energy",
      works: [
        "Drilling andwell completion services",
        "Refinery optimization and maintainance",
        "Safety and Risk assessment services",
        "Regulatory compliance services",
      ],
    },

    {
      img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Construction and Engineering",
      works: [
        "Dresign-build services for industrial projects",
        "Site analysis and feasibility studies",
        "Structure engineering and analysis",
        "Building information and modeling (BIM)",
      ],
    },

    {
      img: "https://i0.wp.com/blog.karir.com/wp-content/uploads/2022/11/asian-mechanical-technicians-wearing-protective-gl-2021-12-10-21-25-10-utc-min.jpg?fit=5733%2C3822&ssl=1",
      name: "Auto and Mechanical Engineering",
      works: [
        "Failure analysis and troubleshooting",
        "Materials selection and testing",
        "Prototype development and testing",
        "Manufacturing process optimization",
      ],
    },
  ];
  return (
    <div className=" py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <div className=" text-center">
          <h3 className=" text-orange-500 font-medium capitalize mb-2">
            our Specialization
          </h3>
          <h1 className=" font-extrabold text-3xl mb-4 ">
            Comprehensive Construction and Engineering <br /> Solutions
          </h1>

          <p className=" text-gray-700">
            We specialize in a range of areas, Including civil engineering,
            mechanical engineering engineering,
            <br /> petroleum and gas energy and more.
          </p>
        </div>

        <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-20">
          {services.map((blog) => {
            return (
              <div className=" shadow-md">
                <img src={blog.img} alt="" className="  h-[300px] w-full" />

                <div className=" p-4">
                  <p className="  uppercase font-semibold">{blog.name}</p>

                  <div className=" mt-3">
                    {blog.works.map((work) => {
                      return (
                        <div className="flex items-center gap-2 mb-1">
                          <div className=" w-[10px] h-[10px] rounded-full bg-orange-500"></div>
                          <p className=" text-gray-700">{work}</p>
                        </div>
                      );
                    })}
                  </div>

                  <button className=" underline mt-8  font-semibold uppercase text-sm md:text-base">
                    see details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center mt-8">
          <button className=" flex items-center gap-2 py-3 px-7 font-semibold border-2 border-orange-500 bg-white text-orange-500">
            More services
            <div>
              <BsArrowUpRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
