import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center my-10">
                    <h3 className='text-3xl border-b-4 rounded-lg inline-block border-accent font-semibold text-slate-100 p-1 '>Your Dashboard</h3>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My profile</Link></li>
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;