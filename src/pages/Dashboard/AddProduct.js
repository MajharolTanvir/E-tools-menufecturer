import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const imageStorageKey = 'e13c0deb95648d59c098b58894a2f7c7';


    const onSubmit = data => {
        const image = data.Image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const productInfo = {
                        image: result.data.display_url,
                        name: data.Name,
                        about: data.Description,
                        available: parseInt(data.Available),
                        minQuantity: parseInt(data.minQuantity),
                        price: parseInt(data.Price)
                    }
                    fetch('http://localhost:5000/addTool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast('Product data added done')
                            reset()
                        })
                }
            })

    }
    return (
        <div className="card md:w-96 w-full mx-auto glass text-white p-5 mt-8">
            <div className="card w-full sm:w-96bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200\">
                <div className="card-body">
                    <h2 className="card-title justify-center">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}><div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Your product image</span>
                        </label>
                        <input type='file' className='border-2 border-slate-500 px-1 py-2 text-white rounded-lg' {...register("Image", {
                            required: {
                                value: true,
                                message: 'Enter your Product image'
                            }
                        })} />
                        <label className="label">
                            {errors.Image?.type === 'required' && <p className='text-red-400'>{errors.Image.message}</p>}
                        </label>
                    </div>

                        <div className="form-control w-full text-black max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Name", {
                                required: {
                                    value: true,
                                    message: 'Enter your product name'
                                },
                            })} />
                            <label className="label">
                                {errors.Name?.type === 'required' && <p className='text-red-400'>{errors.Name.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full text-black max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <textarea type='text' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Description", {
                                required: {
                                    value: true,
                                    message: 'Provide your produce description'
                                },
                            })} />
                            <label className="label">
                                {errors.Description?.type === 'required' && <p className='text-red-400'>{errors.Description.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full text-black max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Available Quantity</span>
                            </label>
                            <input type='number' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Available", {
                                required: {
                                    value: true,
                                    message: 'Provide your available quantity'
                                }
                            })} />
                            <label className="label">
                                {errors.Available?.type === 'required' && <p className='text-red-400'>{errors.Available.message}</p>}
                            </label>
                        </div>

                        <div className="form-control text-black w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Minimum shipping</span>
                            </label>
                            <input type='number' className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("minQuantity", {
                                required: {
                                    value: true,
                                    message: 'Provide your minimum shipping quantity'
                                }
                            })} />
                            <label className="label">
                                {errors.minQuantity?.type === 'required' && <p className='text-red-400'>{errors.minQuantity.message}</p>}
                            </label>
                        </div>

                        <div className="form-control text-black w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Per item price</span>
                            </label>
                            <input type='number' className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Price", {
                                required: {
                                    value: true,
                                    message: 'Provide your item price'
                                }
                            })} />
                            <label className="label">
                                {errors.Price?.type === 'required' && <p className='text-red-400'>{errors.Price.message}</p>}
                            </label>
                        </div>


                        <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" value='Add product' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;