import React from "react";
import banner1 from "../../image/images.jpg";

const Banner = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-2xl md:text-6xl lg:text-8xl font-bold text-center text-cyan-400 mt-10">
        E-Tools Manufacturing
      </h2>
      <p className="text-xl md:text-3xl lg:text-5xl my-6 text-cyan-400 text-center font-bold">
        A reputable wholesale hammer selling website
      </p>
      {/* <img src={banner1} className="w-full" alt="" /> */}
    </div>
  );
};

export default Banner;
