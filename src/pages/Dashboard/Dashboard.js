import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h3 className='text-center text-3xl text-white'>Your Dashboard</h3>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
                        <li><Link to='/dashboard/myProfile'>My profile</Link></li>
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;