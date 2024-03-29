import React from "react";
import deal from "../../image/deal.jpg";

const OurMission = () => {
  return (
    <div
      className="text-white container mx-auto my-20"
    >
      <div className="my-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold border-b-4 rounded-lg inline-block border-secondary text-primary p-1">
          Our Mission
        </h3>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={deal}
            className="w-full h-96 sm:w-96 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="text-secondary">
            <h1 className="text-2xl md:text-5xl font-bold">
              Our company mission and vision
            </h1>
            <ul className="my-5 pl-10">
              <li className="list-disc">
                Made strong bonding with our clients .
              </li>
              <li className="list-disc">
                Grow up our business in every country .
              </li>
              <li className="list-disc">
                A good business deal setup with clients .
              </li>
              <li className="list-disc">
                Grow up a secure business strategy .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
