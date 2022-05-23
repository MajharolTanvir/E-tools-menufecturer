import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OurTools = () => {
    const [tools, setTools] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const navigateOrderRoute = id => {
        navigate(`/tool/${id}`)
    }
    return (
        <div>
            <div className='my-20 text-center'>
                <h3 className='text-3xl font-semibold border-b-4 rounded-lg inline-block border-accent text-slate-100 p-1'>Our Exclusive products</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center mb-40'>
                {
                    tools.map(tool =>
                        <div key={tool._id} className="card w-full sm:w-96  bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200  shadow-xl shadow-secondary">
                            <figure className="px-10 pt-10">
                                <img src={tool.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-start text-Justify">
                                <h2 className="card-title"> {tool.name}</h2>
                                <p><span className='text-md font-bold'>Description:</span> {tool.about}</p>
                                <p><span className='text-md font-bold'>Available quantity:</span> {tool.available}</p>
                                <p><span className='text-md font-bold'>Minimum shipping:</span> {tool.minQuantity}</p>
                                <p><span className='text-md font-bold'>Per item Price:</span> {tool.price}</p>
                                <div className="card-actions w-full">
                                    <button className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold"
                                        onClick={() => navigateOrderRoute(tool._id)}>Order Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurTools;