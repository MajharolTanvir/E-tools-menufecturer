import React from 'react';
import { Link } from 'react-router-dom';
import img from '../image/404.png'

const NotFound = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-white text-center lg:my-40 items-center'>
            <div className='p-10'>
                <img src={img} alt="" />
            </div>
            <div className='mb-10'>
                <h3 className='text-red-400 text-2xl'>Can not find this page.</h3>
                <p>Please go back to Home page</p>
                <Link to='/'><button className='btn btn-secondary'>Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;