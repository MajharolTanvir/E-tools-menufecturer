import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../../Shared/Loading";

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageStorageKey = "e13c0deb95648d59c098b58894a2f7c7";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, SendingError] =
    useSendEmailVerification(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const token = useToken(user);
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const image = data.Image[0];
    const email = data.Email;
    const password = data.Password;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const user = {
            name: data.Name,
            img: result.data.display_url,
            email: email,
          };
          fetch("https://e-tools-manufecturer-server.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }
      });
    createUserWithEmailAndPassword(email, password);
    toast("Your account is been created");
    sendEmailVerification();
    toast("Verification email send successful");
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  if (error || SendingError) {
    toast(error?.message || SendingError?.message);
  }
  return (
    <div className="card w-full sm:w-96 bg-secondary text-accent  shadow-xl shadow-secondary">
      <div className="card-body">
        <h2 className="card-title justify-center">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Name</span>
            </label>
            <input
              className="border-2 border-secondary text-primary px-1 py-2 rounded-lg"
              {...register("Name", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
            />
            <label className="label">
              {errors.Name?.type === "required" && (
                <p className="text-red-400">{errors.Name.message}</p>
              )}
            </label>
          </div>
          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Your Photo</span>
            </label>
            <input
              type="file"
              className="border-2 border-accent text-primary px-1 py-2 rounded-lg"
              {...register("Image", {
                required: {
                  value: true,
                  message: "Provide a valid image",
                },
              })}
            />
            <label className="label">
              {errors.Image?.type === "required" && (
                <p className="text-red-400">{errors.Image.message}</p>
              )}
            </label>
          </div>
          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Email</span>
            </label>
            <input
              className="border-2 border-secondary text-primary px-1 py-2 rounded-lg"
              {...register("Email", {
                required: {
                  value: true,
                  message: "Enter email address",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            <label className="label">
              {errors.Email?.type === "required" && (
                <p className="text-red-400">{errors.Email.message}</p>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="text-red-400">{errors.Email.message}</p>
              )}
            </label>
          </div>
          <div className="form-control text-primary w-full max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Password</span>
            </label>
            <input
              type="password"
              className="border-2 border-secondary text-primary px-1 py-2 rounded-lg"
              {...register("Password", {
                required: {
                  value: true,
                  message: "Enter valid password",
                },
                minLength: {
                  value: 6,
                  message: "Enter 6 digit password",
                },
              })}
            />
            <label className="label">
              {errors.Password?.type === "required" && (
                <p className="text-red-400">{errors.Password.message}</p>
              )}
              {errors.Password?.type === "minLength" && (
                <p className="text-red-400">{errors.Password.message}</p>
              )}
            </label>
          </div>
          <input
            className="btn hover:border-0 hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Registration;
