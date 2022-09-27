import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [token] = useToken(googleUser || githubUser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  if (googleError || githubError) {
    toast(googleError?.message || githubError?.message);
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn hover:border-0 hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
      >
        <BsGoogle className="text-white text-2xl mr-2" />
        Login in with Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn hover:border-0 hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
      >
        <BsGithub className="text-white text-2xl mr-2" />
        Login in with Github
      </button>
    </div>
  );
};

export default SocialLogin;
