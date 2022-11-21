import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CancelOrder from "./CancelOrder";
import ManageOrder from "./ManageOrder";
import Loading from "../../Shared/Loading";

const ManageAllOrders = () => {
  const [cancel, setCancel] = useState(null);

  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://e-tools-manufacturer.herokuapp.com/order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto my-8 md:mx-8">
      <table className="table table-compact w-full text-center">
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <ManageOrder
              key={order._id}
              order={order}
              setCancel={setCancel}
              i={i}
            ></ManageOrder>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Sl no.</th>
            <th>Name</th>
            <th>Product name</th>
            <th>Image</th>
            <th>Product quantity</th>
            <th>Product price</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
      {cancel && (
        <CancelOrder
          cancel={cancel}
          refetch={refetch}
          setCancel={setCancel}
        ></CancelOrder>
      )}
    </div>
  );
};

export default ManageAllOrders;
