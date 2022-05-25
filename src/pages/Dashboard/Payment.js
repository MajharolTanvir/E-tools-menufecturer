import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                console.log(data);
            })
    }, [id])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center my-10 text-white'>
            <div class="card w-96 bg-gradient-to-r from-sky-600 to-indigo-500 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={order.productImg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{order.productName}</h2>
                    <p>Price: {order.quantity}</p>
                    <p>Price: {order.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-gradient-to-r from-sky-600 to-indigo-500 shadow-xl">
                <h1>Pay </h1>
            </div>
        </div >
    );
};

export default Payment;