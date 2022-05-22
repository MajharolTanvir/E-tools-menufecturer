import React from 'react';
import { MdOutlineLocalShipping, MdOutlinedFlag, } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

const BusinessSummery = () => {
    return (
        <div>
            <div className='my-10 text-center'>
                <h3 className='text-3xl border-b-4 rounded-lg inline-block border-accent font-semibold text-slate-100 p-1'>Business Summery</h3>
            </div>
            <div className="container mx-auto">
                <div className='flex justify-between items-center mb-10'>
                    <div className='text-center'>
                        <MdOutlinedFlag className='mx-auto text-secondary text-4xl mb-3' />
                        <h4 className='font-bold text-2xl text-slate-100'>30+</h4>
                        <p className='text-secondary'>Shipping Countries</p>
                    </div>
                    <div className='text-center'>
                        <MdOutlineLocalShipping className='mx-auto text-secondary text-4xl mb-3' />
                        <h4 className='font-bold text-2xl text-slate-100'>500000+</h4>
                        <p className='text-secondary'>Complete delivery</p>
                    </div>
                    <div className='text-center'>
                        <FaUsers className='mx-auto text-secondary text-4xl mb-3' />
                        <h4 className='font-bold text-2xl text-slate-100'>3000+</h4>
                        <p className='text-secondary'>Happy clients</p>
                    </div>
                    <div className='text-center'>
                        <VscFeedback className='mx-auto text-secondary text-4xl mb-3' />
                        <h4 className='font-bold text-2xl text-slate-100'>1800+</h4>
                        <p className='text-secondary'>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;