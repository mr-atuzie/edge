import React from "react";
import { BsStarFill, BsStar, BsArrowUpRight } from "react-icons/bs";

const Reviews = () => {
  const reviews = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDyfP8I4UWJZV5RV8PP_kMIn8Ylw_IzqUTw&usqp=CAU",
      title: "Leslie Alexander",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, odio, libero explicabo repellendus facere, eius recusandae laborum hic fugit itaque enim dolores. Natus deleniti, officiis eveniet doloribus molestiae ea minus!",
    },

    {
      img: "https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1024x682.jpg",
      title: "Devon Lane",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, odio, libero explicabo repellendus facere, eius recusandae laborum hic fugit itaque enim dolores. Natus deleniti, officiis eveniet doloribus molestiae ea minus!",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DzKX-TJCFXWXYK6xoA_4aFAw-Owx_7ek3w&usqp=CAU",
      title: "Wade Warren",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, odio, libero explicabo repellendus facere, eius recusandae laborum hic fugit itaque enim dolores. Natus deleniti, officiis eveniet doloribus molestiae ea minus!",
    },
  ];
  return (
    <div>
      <div>
        <div className="mx-auto w-[80%] -mb-28 relative">
          <img
            className="w-full max-h-[60vh]"
            src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div className=" bg-black/70 w-full h-full absolute top-0">
            <div className="b w-full h-full flex flex-col justify-end p-6">
              <h1 className=" text-lg lg:text-4xl text-white font-semibold capitalize tracking-wide ">
                make your dream project come true with
              </h1>
              <h2 className="text-lg mb-1 lg:my-3 lg:text-3xl text-orange-500  font-semibold">
                EngineeringEdge
              </h2>
              <div>
                <button className=" flex items-center gap-2 py-3 px-5 lg:px-7 font-semibold bg-orange-500 text-white">
                  Discover More
                  <div>
                    <BsArrowUpRight size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-orange-500">
          <div className="w-[90%] lg:w-[80%] mx-auto py-10">
            <div className=" mt-32">
              <div className="">
                <h1 className=" font-bold text-3xl mb-4 text-white ">
                  Customer Reviews
                </h1>
                <p className=" text-gray-50 -mt-3 max-w-lg">
                  We take pride in having establish a name for excelllence and
                  superior service. see what our clients have to say about their
                  interactions with us
                </p>
              </div>
              {/* <div>
              <button className=" border border-gray-50 px-6 py-2 text-gray-50 uppercase">
                previous
              </button>
              <button></button>
            </div> */}
            </div>

            <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-10">
              {reviews.map((blog) => {
                return (
                  <div className=" bg-white p-6 rounded">
                    <div className=" flex  justify-between items-center">
                      <img
                        src={blog.img}
                        alt=""
                        className=" h-[60px] w-[60px] object-cover "
                      />

                      <div className=" flex gap-2 text-orange-500">
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStar size={20} />
                      </div>
                    </div>

                    <p className="mt-3 text-lg capitalize font-semibold ">
                      {blog.title}
                    </p>

                    <p className=" text-gray-500 leading-6 mt-1 ">
                      {blog.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
