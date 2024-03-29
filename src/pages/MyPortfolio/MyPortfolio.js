import React from "react";
import image from "../../image/DSC_3583.JPG";

const MyPortfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-primary m-10 items-center md:m-20">
      <div className="">
        <img
          className="w-full md:w-96 border-8 border-secondary rounded-2xl shadow-lg shadow-secondary"
          src={image}
          alt=""
        />
        <div className="pt-10">
          <p>
            <span className="font-bold text-lg">Name:</span> Majharul Tanvir
          </p>
          <p>
            <span className="font-bold text-lg">Email:</span>{" "}
            mdtanvir6070@gmail.com
          </p>
          <p>
            <span className="font-bold text-lg">Profession:</span> MERN-Stack
            developer
          </p>
        </div>
      </div>
      <div className="my-10">
        <div></div>
        <div>
          <h6 className="font-bold text-center my-5">Education:</h6>
          <div className="overflow-x-auto text-primary shadow-lg shadow-secondary rounded--lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Sl. no</th>
                  <th>Level</th>
                  <th>Passing year</th>
                  <th>Board</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>JDC</td>
                  <td>2014</td>
                  <td>Madrasah</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Dakhil</td>
                  <td>2017</td>
                  <td>Madrasah</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>HSC</td>
                  <td>2019</td>
                  <td>Chattogram</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Honors</td>
                  <td>Runing</td>
                  <td>Chattogram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h6 className="text-center font-bold my-5">Technology</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg shadow-secondary border-2 rounded-2xl border-secondary">
            <ul className="text-center">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>DaisyUI</li>
              <li>Javascript</li>
              <li>React</li>
              <li>React Router</li>
            </ul>
            <ul className="text-center">
              <li>Firebase</li>
              <li>Firebase hook</li>
              <li>Recharts</li>
              <li>Axios</li>
              <li>React Query</li>
              <li>React hook form</li>
              <li>Json web token</li>
              <li>Stripe</li>
            </ul>
          </div>
        </div>
        <div>
          <h6 className="font-bold text-center my-5">
            The last 3 projects I created
          </h6>
          <p>
            <span className="font-bold">Link 3:</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://myscheduler-893bf.web.app/"
            >
              MyScheduler
            </a>
          </p>
          <p>
            <span className="font-bold">Link 1:</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://car-inventory-6dae5.web.app/"
            >
              Car inventory.
            </a>
          </p>
          <p>
            <span className="font-bold">Link 2:</span>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fuoad-saeed.web.app/"
            >
              Tanvir anowear.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
