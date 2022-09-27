import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-center my-10">
          <h3 className="text-3xl border-b-4 rounded-lg inline-block border-accent font-bold text-primary p-1 ">
            Your Dashboard
          </h3>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-full bg-secondary text-accent">
            <li>
              <Link to="/dashboard">My profile</Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard/myOrder">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/allProduct">Manage product</Link>
                </li>
                <li>
                  <Link to="/dashboard/allOrders">Manage Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
