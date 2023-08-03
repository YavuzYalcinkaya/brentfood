"use client";
import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Featured = () => {
  return (
    <div>
      {/* WRAPPER */}
      <div className="flex">
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {/* SINGLE ITEM */}
          {featuredProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300">
                {/* IMAGE CONTAINER */}
                {item.img && (
                  <div className="relative flex-1  hover:rotate-[60deg] transition-all duration-500">
                    <Image src={item.img} alt="" width={200} height={200} />
                  </div>
                )}
                {/* TEXT CONTAINER */}
                <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <h1 className="text-xl text-red-500 font-bold uppercase xl:text-2xl 2xl:text-3xl">
                    {item.title}
                  </h1>
                  <p className="p-4 2xl:p-8 text-neutral-600">{item.desc}</p>
                  <span className="text-xl font-bold">${item.price}</span>
                  <button className="bg-red-500 text-white p-3 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
