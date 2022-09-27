import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import logo from "../image/logo.png";
import Loading from "../Shared/Loading";
import { BiMenu } from "react-icons/bi";
import userImg from "../image/man-300x300.png";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [person, setPerson] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`https://e-tools-manufacturer.herokuapp.com/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPerson(data);
        });
    }
  }, [user?.email]);

  const { name, email, img } = person;

  if (loading) {
    return <Loading />;
  }
  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <nav className="sticky top-0 shadow-sm shadow-primary z-40 text-accent">
      <div className="navbar bg-secondary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent text-primary  rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                ""
              )}
              {user ? (
                <button onClick={handleLogOut}>Log out</button>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-md sm:text-xl "
          >
            <img className="w-8 sm:w-12 px-1 font-bold" src={logo} alt="" />
            E-tools manufacturer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <button onClick={handleLogOut}>Log out</button>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end justify-end hidden sm:block">
            <label
              tabIndex="0"
              className="btn z-10 btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL || img ? (
                  <img src={user?.photoURL || img} alt="" />
                ) : (
                  <img src={userImg} alt="" />
                )}
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-accent text-primary rounded-box w-52"
            >
              <li>
                <p>{user?.displayName || name}</p>
                <p>{user?.email || email}</p>
                <Link to="/dashboard" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
            </ul>
          </div>
          <label
            tabIndex="0  "
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <BiMenu className="text-2xl" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
