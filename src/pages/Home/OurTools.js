import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OurTools = () => {
  const [tools, setTools] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://e-tools-manufecturer-server.vercel.app/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const navigateOrderRoute = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="container px-3 lg:px-0 lg:mx-auto">
      <div className="my-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold border-b-4 rounded-lg inline-block border-secondary text-primary p-1">
          Our Exclusive products
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-40">
        {tools.map((tool) => (
          <div
            key={tool._id}
            className="card w-full bg-secondary shadow-md shadow-secondary"
          >
            <figure className="px-10 pt-10">
              <img src={tool.image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-start text-accent text-Justify">
              <h2 className="card-title">Name: {tool.name}</h2>
              <p>
                <span className="text-md font-bold">Available quantity:</span>{" "}
                {tool.available}
              </p>
              <p>
                <span className="text-md font-bold">Minimum shipping:</span>{" "}
                {tool.minQuantity}
              </p>
              <p>
                <span className="text-md font-bold">Per item Price:</span>{" "}
                {tool.price}
              </p>
              <div className="card-actions w-full">
                <button
                  className="btn hover:border-0 border-accent hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
                  onClick={() => navigateOrderRoute(tool._id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTools;
