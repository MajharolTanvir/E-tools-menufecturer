import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer>
      <div className="footer justify-items-center p-10 bg-secondary text-accent">
        <div>
          <span className="footer-title">Services</span>
          <p className="">Ball peen hammer</p>
          <p className="">Claw peen hammer</p>
          <p className="">Cross peen hammer</p>
          <p className="">Sledge hammer</p>
          <p className="">String peen hammer</p>
          <p className="">Tack hammer</p>
        </div>
        <div>
          <span className="footer-title">Menubar</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link to="/portfolio" className="link link-hover">
            Portfolio
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-secondary border-t-2 text-accent">
        <p>
          Copyright &copy; {getYear()} - All right reserved by E-Tools
          Manufacturer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
