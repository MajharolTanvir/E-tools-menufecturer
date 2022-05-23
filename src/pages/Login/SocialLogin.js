import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import Loading from '../../Shared/Loading'
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (googleUser || githubUser) {
    }
    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }
    if (googleError || githubError) {
        toast(googleError?.message || githubError?.message)
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold"><BsGoogle className='text-white text-2xl mr-2' />Login in with Google</button>
            <button onClick={() => signInWithGithub()} className="btn hover:border-0 hover:shadow-xl bg-slate-800 hover:bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-slate-100 hover:text-slate-900 my-3 w-full hover:font-bold"><BsGithub className='text-white text-2xl mr-2' />Login in with Github</button>
        </div>
    );
};

export default SocialLogin;