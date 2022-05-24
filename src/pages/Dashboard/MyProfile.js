import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [person, setPerson] = useState({})
    const [user] = useAuthState(auth)
    const { displayName, email, photoURL } = user
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(result => {
                setPerson(result);
            })
    }, [email])
    console.log(user);

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
                    const userInfo = {
                        img: result.data.display_url,
                        address: data.Address,
                        number: data.Number,
                    }
                    fetch(`http://localhost:5000/user/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                toast('Your profile update successFul')
                            };
                        })
                }
            })

    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:mx-20 justify-around mx-10  gap-10 sm:mx-auto'>
            <div className="card w-full glass text-white p-5 mt-8">
                <figure><img src={person.img || photoURL} className='rounded-3xl w-60 p-2' alt="profile" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">Name: {person.name || displayName}</h2>
                    <p className='text-md text-left'>Email: {person.email || email}</p>
                    <p className='text-md text-left'>Phone: {person.number}</p>
                    <p className='text-md text-left'>Email: {person.address}</p>
                </div>
            </div>
            <div>
                <div className="card w-full glass text-white p-5 mt-8">
                    <div className="card w-full sm:w-96bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200\">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Update profile</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full text-black max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Your Address</span>
                                    </label>
                                    <input type='text' className='border-2 border-slate-500 px-1 py-2 text-black rounded-lg' {...register("Address", { required: true })} />
                                </div>

                                <div className="form-control text-black w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Phone number</span>
                                    </label>
                                    <input type='number' className='border-2 border-slate-500 px-1 py-2 rounded-lg' {...register("Number", { required: true })} />
                                </div>
                                <div className="form-control w-full text-black max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Your Photo</span>
                                    </label>
                                    <input type='file' className='border-2 border-slate-500 px-1 py-2 text-white rounded-lg' {...register("Image", { required: true })} />
                                </div>
                                <input className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;