import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Dashboard/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1uuUCT1NJC8mjcbixyYrLbVw6nYtMtyiOJbmqtN7bxmX1mSwSQREZdjJqZldjHOa5Ax3xAPDdzNfP7Ayr3nZuH00SokcmCZ1"
);

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center my-10 text-white">
      <div className="card w-96 bg-gradient-to-r from-sky-600 to-indigo-500 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={order.productImg} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{order.productName}</h2>
          <p>Quantity: {order.quantity}</p>
          <p>Price: {order.price}</p>
        </div>
      </div>
      <div className="card w-96 bg-gradient-to-r from-sky-600 to-indigo-500 shadow-xl">
        <h4 className="text-2xl my-8">Pay your Bill</h4>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
