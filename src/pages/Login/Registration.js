import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey = 'e13c0deb95648d59c098b58894a2f7c7';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, SendingError] = useSendEmailVerification(auth);

    const onSubmit = data => {
        const image = data.Image[0]
        const email = data.Email
        const password = data.Password
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
                    console.log(result);
                }
            })
        createUserWithEmailAndPassword(email, password)
        toast('Your account is been created')
        sendEmailVerification()
        toast('Verification email send successful')
    }
    if (user) {
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error || SendingError) {
        toast(error?.message || SendingError?.message)
    }
    return (
        <div className="card w-full sm:w-96 bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Name", {
                            required: {
                                value: true,
                                message: 'Enter your name'
                            },
                        })} />
                        <label className="label">
                            {errors.Name?.type === 'required' && <p className='text-red-400'>{errors.Name.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Your Photo</span>
                        </label>
                        <input type='file' className='border-2 border-slate-500 px-1 py-2 text-white rounded-lg' {...register("Image", {
                            required: {
                                value: true,
                                message: 'Provide a valid image'
                            },
                        })} />
                        <label className="label">
                            {errors.Image?.type === 'required' && <p className='text-red-400'>{errors.Image.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full text-black max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Email", {
                            required: {
                                value: true,
                                message: 'Enter email address'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                message: 'Enter a valid email'
                            }
                        })} />
                        <label className="label">
                            {errors.Email?.type === 'required' && <p className='text-red-400'>{errors.Email.message}</p>}
                            {errors.Email?.type === 'pattern' && <p className='text-red-400'>{errors.Email.message}</p>}
                        </label>
                    </div>
                    <div className="form-control text-black w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type='password' className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Password", {
                            required: {
                                value: true,
                                message: 'Enter valid password'
                            },
                            minLength: {
                                value: 6,
                                message: 'Enter 6 digit password'
                            }
                        })} />
                        <label className="label">
                            {errors.Password?.type === 'required' && <p className='text-red-400'>{errors.Password.message}</p>}
                            {errors.Password?.type === 'minLength' && <p className='text-red-400'>{errors.Password.message}</p>}
                        </label>
                    </div>
                    <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Registration;