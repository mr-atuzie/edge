import React from "react";

const News = () => {
  const blogs = [
    {
      img: "https://img.freepik.com/premium-photo/excavator-construction-site_33835-1337.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph",
      name: "construction",
      date: "12 jan 2023",
      title: "sustainable construction techniques",
      text: "As the world become more focused on sustainablity. the construction industry is no exception. in our Sustainable Constructions Techniques series , we explore the latest methods....",
    },

    {
      img: "https://img.freepik.com/free-photo/working-housing-project_1098-17511.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph",
      name: "Engineering",
      date: "19 mar 2023",
      title: "artificial intelligence Engineering",
      text: "Artificial intelligence (AI) is revolutionizing the way we approach engineering design and analysis.  in our AI Engineering series , we explore the latest development in AI  technologies and how they....",
    },

    {
      img: "https://img.freepik.com/premium-photo/photovoltaic-modules-solar-power-plant_29332-1692.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=ais",
      name: "Energy",
      date: "04 feb 2023",
      title: "renewable energy innovations",
      text: "As the world transition to a moe sustainable energy future, innovation in renewable energy technologies has become critical. in our Renewable Energy Innovations series , we explore the latest ....",
    },
  ];
  return (
    <div className=" py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <div className=" text-center">
          <h3 className=" text-orange-500 font-medium capitalize mb-2">
            latest blog
          </h3>
          <h1 className=" font-extrabold text-3xl mb-4 ">News and Articles</h1>

          <p className=" text-gray-700">
            Stay up to date with the latest news and insights from the world of
            engineering ,<br className=" hidden md:block" />
            construction and energy
          </p>
        </div>

        <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-10">
          {blogs.map((blog) => {
            return (
              <div className=" bg-gray-100 p-3 md:p-6 rounded">
                <img
                  src={blog.img}
                  alt=""
                  className=" rounded-md h-[250px] w-full"
                />

                <div className=" flex gap-4  mt-3 text-sm">
                  <p className=" text-orange-500 uppercase font-semibold">
                    {blog.name}
                  </p>

                  <p className=" border-l-2 border-gray-600 pl-2 uppercase font-semibold text-gray-700">
                    {blog.date}
                  </p>
                </div>

                <p className="mt-3 uppercase font-semibold ">{blog.title}</p>

                <p className=" text-gray-500 leading-6 mt-1 ">{blog.text}</p>

                <button className=" underline text-orange-500 mt-3  font-semibold uppercase text-sm md:text-base">
                  read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
