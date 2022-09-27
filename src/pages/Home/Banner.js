import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="md:flex justify-end mx-20 items-start pt-60 pb-60">
        <div>
          <p className="text-lg md:text-2xl lg:text-4xl text-neutral text-center font-bold">
            A reputable wholesale
          </p>
          <p className="text-lg md:text-2xl lg:text-4xl text-neutral text-center font-bold">
            hammer selling website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
