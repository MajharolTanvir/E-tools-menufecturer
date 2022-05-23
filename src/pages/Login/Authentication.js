import React from 'react';
import Login from './Login';
import Registration from './Registration';

const Authentication = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className="flex flex-col w-full lg:flex-row  justify-around">
                <Login></Login>
                <div className="divider bg-slate-100 rounded-lg lg:divider-horizontal"></div>
                <Registration />
            </div>
        </div>
    );
};

export default Authentication;