import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        const email = data.Email
        const password = data.Password
        signInWithEmailAndPassword(email, password)
    }

    if (user) {

    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast(error.message)
    }
    return (
        <div className="card w-full sm:w-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div className="flex flex-col w-full border-opacity-50">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <p className='mb-1'>Forget password?<Link to='/forgetPass' className='text-slate-800 py-5 pl-1'>Click here</Link></p>
                        <input className="btn hover:border-0 hover:shadow-xl bg-transparent hover:bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />

                </form>
                    <div className="divider">OR</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;