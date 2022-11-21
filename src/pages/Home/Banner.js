import React, { useEffect, useState } from "react";
import banner1 from "../../image/banner2.jpg";

const Banner = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://e-tools-manufacturer.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
      className="h-full relative"
    >
      <div>
        <div className="p-10 lg:p-20 bg-secondary opacity-70">
          <h5 className="text-2xl md:text-3xl lg:text-5xl text-accent font-bold text-center">
            E-TOOLS- MANUFACTURING
          </h5>
          <p className="text-lg md:text-xl lg:text-3xl text-accent text-center my-2">
            A global and most popular hammer selling website
          </p>
        </div>
        <div className="grid grid-cols-6 gap-3 absolute bottom-0">
          {tools.map((t) => (
            <div key={t._id} className="bg-secondary p-3">
              <img src={t.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
