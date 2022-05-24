import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderDetailFrom = ({ tool }) => {
    const [user] = useAuthState(auth)
    const [quantity, setQuantity] = useState(0)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const updatePrice = tool.price * parseInt(quantity)

    const onSubmit = data => {
        if (parseInt(data.Quantity) > parseInt(tool.available)) {
            console.log(parseInt(tool.available), parseInt(data.Quantity));
            toast(`Can not select more then ${tool.available}`)
            return
        }
        if (parseInt(data.Quantity) < tool.minQuantity) {
            console.log(tool.minQuantity, parseInt(data.Quantity));
            toast(`Can not select less then ${tool.minQuantity}`)
            return
        }

        const order = {
            name: data.Name,
            email: data.Email,
            address: data.Address,
            phone: data.Number,
            quantity: data.Quantity,
            productImg: tool.image,
            productName: tool.name,
            price: updatePrice,
        }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId > 0) {
                    toast('Your order added successFully')
                }
            })
    }


    return (
        <div className="card w-full sm:w-96 bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200  shadow-xl shadow-secondary">
            <div className="card-body">
                <h2 className="card-title justify-center">Delivery address</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input readOnly value={user.displayName} className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Name", {
                            required: true
                        })} />
                    </div>

                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input readOnly value={user.email} className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Email", {
                            required: true
                        })} />
                    </div>

                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Your Address</span>
                        </label>
                        <input type='text' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Address", {
                            required: {
                                value: true,
                                message: 'Provide a valid Address'
                            },
                        })} />
                        <label className="label">
                            {errors.Address?.type === 'required' && <p className='text-red-400'>{errors.Address.message}</p>}
                        </label>
                    </div>

                    <div className="form-control text-black w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Phone number</span>
                        </label>
                        <input type='number' className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Number", {
                            required: {
                                value: true,
                                message: 'Enter valid Number'
                            },
                            minLength: {
                                value: 11,
                                message: 'Enter 11 digit Number'
                            }
                        })} />
                        <label className="label">
                            {errors.Number?.type === 'required' && <p className='text-red-400'>{errors.Number.message}</p>}
                            {errors.Number?.type === 'minLength' && <p className='text-red-400'>{errors.Number.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Product quantity</span>
                        </label>
                        <input type='number' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Quantity", {
                            onChange: (e) => setQuantity(e.target.value),
                            required: {
                                value: true,
                                message: 'Provide a valid Quantity'
                            },
                        })} />
                        <label className="label">
                            {errors.Quantity?.type === 'required' && <p className='text-red-400'>{errors.Quantity.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Total price</span>
                        </label>
                        <input type='number' readOnly value={updatePrice} className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Price", { required: true })} />
                    </div>
                    <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderDetailFrom;