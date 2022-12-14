import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const OrderDetailFrom = ({ tool }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [quantity, setQuantity] = useState(0);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const updatePrice = tool.price * parseInt(quantity);

  const { data: person, isLoading } = useQuery(["person", email], () =>
    fetch(`http://localhost:5000/user/${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    console.log(data);
    if (parseInt(data.Quantity) > parseInt(tool.available)) {
      console.log(parseInt(tool.available), parseInt(data.Quantity));
      toast.error(`Can not select more then ${tool.available}`);
      return;
    }
    if (parseInt(data.Quantity) < tool.minQuantity) {
      console.log(tool.minQuantity, parseInt(data.Quantity));
      toast.error(`Can not select less then ${tool.minQuantity}`);
      return;
    }

    const order = {
      name: data.Name,
      email: data.Email,
      address: data.Address,
      phone: data.Number,
      quantity: data.Quantity,
      productImg: tool.image,
      productName: tool.name,
      price: updatePrice,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your order added successFully");
        reset();
        setQuantity(0);
        navigate("/dashboard/myOrder");
      });
  };

  return (
    <div className="card w-full sm:w-96 bg-secondary text-accent  shadow-xl shadow-secondary">
      <div className="card-body">
        <h2 className="card-title justify-center">Delivery address</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Name</span>
            </label>
            <input
              readOnly
              value={user.displayName || person?.name}
              className="border-2 border-secondary px-1 py-2 rounded-lg"
              {...register("Name", {
                required: true,
              })}
            />
          </div>

          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Email</span>
            </label>
            <input
              readOnly
              value={user.email || person?.email}
              className="border-2 border-secondary px-1 py-2 rounded-lg"
              {...register("Email", {
                required: true,
              })}
            />
          </div>

          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Your Address</span>
            </label>
            <input
              type="text"
              className="border-2 border-secondary px-1 py-2 text-primary rounded-lg"
              {...register("Address", {
                required: {
                  value: true,
                  message: "Provide a valid Address",
                },
              })}
            />
            <label className="label">
              {errors.Address?.type === "required" && (
                <p className="text-red-400">{errors.Address.message}</p>
              )}
            </label>
          </div>

          <div className="form-control text-primary w-full max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Phone number</span>
            </label>
            <input
              type="number"
              className="border-2 border-secondary px-1 py-2 rounded-lg"
              {...register("Number", {
                required: {
                  value: true,
                  message: "Enter valid Number",
                },
                minLength: {
                  value: 11,
                  message: "Enter 11 digit Number",
                },
              })}
            />
            <label className="label">
              {errors.Number?.type === "required" && (
                <p className="text-red-400">{errors.Number.message}</p>
              )}
              {errors.Number?.type === "minLength" && (
                <p className="text-red-400">{errors.Number.message}</p>
              )}
            </label>
          </div>
          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Product quantity</span>
            </label>
            <input
              type="number"
              className="border-2 border-secondary px-1 py-2 text-primary rounded-lg"
              {...register("Quantity", {
                onChange: (e) => setQuantity(e.target.value),
                required: {
                  value: true,
                  message: "Provide a valid Quantity",
                },
              })}
            />
            <label className="label">
              {errors.Quantity?.type === "required" && (
                <p className="text-red-400">{errors.Quantity.message}</p>
              )}
            </label>
          </div>
          <div className="form-control w-full text-primary max-w-xs">
            <label className="label">
              <span className="label-text text-accent">Total price</span>
            </label>
            <input
              type="number"
              value={quantity ? updatePrice : ""}
              className="border-2 border-secondary px-1 py-2 text-primary rounded-lg"
              {...register("Price", { required: true })}
            />
          </div>
          <input
            className="btn hover:border-2 border-primary hover:shadow-xl bg-primary hover:bg-accent text-accent hover:text-primary my-3 w-full hover:font-bold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderDetailFrom;
