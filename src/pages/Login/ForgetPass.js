import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const ForgetPass = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const onSubmit = data => {
        const email = data.Email;
        sendPasswordResetEmail(email);
        toast('Email sent successfully. Check your email.')
    }

    if (sending) {
        return <Loading></Loading>
    }

    if (error) {
        toast(error.message)
    }
    return (
        <div className='flex justify-center m-14'>
            <div className="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-white">Forget password?</h2>
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
                        <input className="btn hover:border-0 hover:shadow-xl bg-transparent hover:bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;