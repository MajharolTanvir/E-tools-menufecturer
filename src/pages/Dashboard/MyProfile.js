import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { displayName, email, photoURL } = user;
  const { register, handleSubmit } = useForm();

  const {
    data: person,
    isLoading,
    refetch,
  } = useQuery(["person", email], () =>
    fetch(`https://e-tools-manufecturer-server.vercel.app/user/${email}`).then(
      (res) => res.json()
    )
  );

  const imageStorageKey = "e13c0deb95648d59c098b58894a2f7c7";

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const image = data.Image[0];
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
          const userInfo = {
            img: result.data.display_url,
            address: data.Address,
            number: data.Number,
            country: data.Country,
          };
          fetch(
            `https://e-tools-manufecturer-server.vercel.app/user/${email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast("Your profile update successFul");
                refetch();
              }
            });
        }
      });
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:mx-20 justify-around mx-10  gap-10 sm:mx-auto">
      <div className="card w-full glass text-primary p-5 mt-8">
        <figure>
          <img
            src={person.img || photoURL}
            className="rounded-3xl w-60 p-2"
            alt="profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            Name: {person.name || displayName}
          </h2>
          <span className="text-md text-left">
            Email: {person.email || email}
          </span>
          <span className="text-md text-left">Phone: {person.number}</span>
          <span className="text-md text-left">Address: {person.address}</span>
          <span className="text-md text-left">Country: {person.country}</span>
        </div>
      </div>
      <div>
        <div className="card w-full glass text-primary p-5 mt-8">
          <div className="card w-full sm:w-96 text-gray-200\">
            <div className="card-body">
              <h2 className="card-title justify-center">Update profile</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full text-black max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary">
                      Your Address
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-secondary px-1 py-2 text-black rounded-lg"
                    {...register("Address", { required: true })}
                  />
                </div>

                <div className="form-control text-black w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary">
                      Phone number
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border-2 border-secondary px-1 py-2 rounded-lg"
                    {...register("Number", { required: true })}
                  />
                </div>

                <div className="form-control text-black w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary">Country</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-secondary px-1 py-2 rounded-lg"
                    {...register("Country", { required: true })}
                  />
                </div>

                <div className="form-control w-full text-black max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary">Your Photo</span>
                  </label>
                  <input
                    type="file"
                    className="border-2 border-secondary px-1 py-2 text-primary rounded-lg"
                    {...register("Image", { required: true })}
                  />
                </div>
                <input
                  className="btn hover:border-0 hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
