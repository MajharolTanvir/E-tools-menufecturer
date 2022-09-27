import React from "react";
import banner1 from "../../image/banner1.jpg";
import banner3 from "../../image/banner3.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-between pt-20 items-center">
      <img className="col-span-1" src={banner1} alt="" />
      <div className="col-span-2 my-10 md:my-0">
        <h4 className="text-xl md:text-2xl lg:text-5xl text-secondary text-center font-bold">
          E-Tool Manufacturer
        </h4>
        <p className="text-md md:text-lg lg:text-2xl text-secondary text-center font-bold">
          A reputable wholesale hammer selling website.
        </p>
      </div>
      <img className="col-span-1" src={banner3} alt="" />
    </div>
  );
};

export default Banner;
