import React from 'react';
import SocialLogin from './SocialLogin';
import Login from './Login';
import Registration from './Registration';

const Authentication = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Registration></Registration>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Login></Login>
                    </div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Authentication;