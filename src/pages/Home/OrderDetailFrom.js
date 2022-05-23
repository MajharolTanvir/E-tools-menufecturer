import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const OrderDetailFrom = ({ tool }) => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                        <label className="label">
                            {errors.Email?.type === 'required' && <p className='text-red-400'>{errors.Email.message}</p>}
                            {errors.Email?.type === 'pattern' && <p className='text-red-400'>{errors.Email.message}</p>}
                        </label>
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
                    <div className="form-control text-black w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Order quantity</span>
                        </label>
                        <input type='number'  className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Quantity", {
                            required: {
                                value: true,
                                message: 'Enter your needed quantity',
                            },
                            
                        })} />
                        <label className="label">
                            {errors.Quantity?.type === 'required' && <p className='text-red-400'>{errors.Number.message}</p>}
                            {errors.Quantity?.type === 'max' && <p className='text-red-400'>{errors.Number.message}</p>}
                            {errors.Quantity?.type === 'min' && <p className='text-red-400'>{errors.Number.message}</p>}
                        </label>
                    </div>
                    <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderDetailFrom;