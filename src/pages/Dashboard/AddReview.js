import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [person, setPerson] = useState({})
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://e-tools-manufacturer.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPerson(data);
            })
    }, [user?.email])

    const onSubmit = data => {
        const name = user.displayName || person.name;
        const image = user.image || person.img;
        const country = person.country;
        console.log(data);
        const review = {
            name: name,
            image: image,
            country: country,
            rating: data.Rating,
            comment: data.Comment
        }
        fetch('https://e-tools-manufacturer.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Thanks to your review')
                reset()
            })
    }

    return (
        <div className='text-white'>
            <div className="card w-full mx-auto my-10 sm:w-96 bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200  shadow-xl shadow-secondary">
                <div className="card-body">
                    <h2 className="card-title justify-center">Your review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full text-black max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Review (1-5)</span>
                            </label>
                            <input type='text' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Rating", {
                                required: {
                                    value: true,
                                    message: 'provide your review'
                                },
                                max: {
                                    value: 5,
                                    message: 'Provide your review in 1-5'
                                },
                            })} />
                            <label className="label">
                                {errors.Rating?.type === 'required' && <p className='text-red-600'>{errors.Rating.message}</p>}
                                {errors.Rating?.type === 'max' && <p className='text-red-600'>{errors.Rating.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full text-black max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Comment</span>
                            </label>
                            <textarea type='text' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Comment", {
                                required: {
                                    value: true,
                                    message: 'Provide your comment'
                                },
                            })} />
                            <label className="label">
                                {errors.Comment?.type === 'required' && <p className='text-red-400'>{errors.Comment.message}</p>}
                            </label>
                        </div>
                        <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;