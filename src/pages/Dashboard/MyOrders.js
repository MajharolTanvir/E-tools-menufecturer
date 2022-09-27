import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CancelOrder from "./CancelOrder";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancel, setCancel] = useState(null);
  const [orders, setOrders] = useState([]);
  const { email } = user;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://e-tools-manufacturer.herokuapp.com/order/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [email, navigate]);
  return (
    <div className="overflow-x-auto my-8 md:mx-8">
      <table className="table table-compact w-full text-primary text-center">
        <thead>
          <tr>
            <th>Sl no.</th>
            <th>Name</th>
            <th>Product name</th>
            <th>Image</th>
            <th>Product quantity</th>
            <th>Product price</th>
            <th>Action</th>
            <th>Action</th>
            <th>TransactionId</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <OrderDetails
              key={order._id}
              order={order}
              setCancel={setCancel}
              i={i}
            ></OrderDetails>
          ))}
        </tbody>
      </table>
      {cancel && (
        <CancelOrder
          cancel={cancel}
          // refetch={refetch}
          setCancel={setCancel}
        ></CancelOrder>
      )}
    </div>
  );
};

export default MyOrders;
