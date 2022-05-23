import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailFrom from './OrderDetailFrom'

const ToolDetails = () => {
    const { id } = useParams()
    const [tool, setTool] = useState([])

    const { name, image, about, available, minQuantity, price } = tool

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])
    return (
        <div className='flex justify-around items-center my-20'>
            <div className="card w-full sm:w-96 bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200  shadow-xl shadow-secondary">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-Justify">
                    <h2 className="card-title"> {name}</h2>
                    <p><span className='text-md font-bold'>Description:</span> {about}</p>
                    <p><span className='text-md font-bold'>Available quantity:</span> {available}</p>
                    <p><span className='text-md font-bold'>Minimum shipping:</span> {minQuantity}</p>
                    <p><span className='text-md font-bold'>Per item Price:</span> {price}</p>
                    <div className="card-actions w-full">
                        <button className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold"
                        >Order Now</button>
                    </div>
                </div>
            </div>
            <div>
                <OrderDetailFrom
                    tool={tool}
                ></OrderDetailFrom>
            </div>
        </div>
    );
};

export default ToolDetails;