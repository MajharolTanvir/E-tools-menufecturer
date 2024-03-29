import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetails = ({ order, setCancel, i }) => {
  const navigate = useNavigate();
  const handlePay = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  return (
    <tr key={order._id}>
      <th>{i + 1}</th>
      <td>{order?.name}</td>
      <td>{order?.productName}</td>
      <td className="flex justify-center">
        <img className="w-10" src={order?.productImg} alt="" />
      </td>
      <td>{order?.quantity}</td>
      <td>{order?.price}</td>
      <td>
        {order.price && !order.paid && (
          <button
            className="btn btn-secondary btn-xs"
            onClick={() => handlePay(order._id)}
          >
            Pay
          </button>
        )}
        {order.price && order.paid && (
          <button disabled className="btn btn-secondary btn-xs">
            Pay
          </button>
        )}
      </td>
      <td>
        {order.price && !order.paid && (
          <label
            htmlFor="cancel"
            onClick={() => setCancel(order)}
            className="btn btn-xs modal-button bg-red-600"
          >
            Cancel
          </label>
        )}
        {order.price && order.paid && (
          <label
            htmlFor="cancel"
            disabled
            className="btn btn-xs modal-button bg-red-600"
          >
            Cancel
          </label>
        )}
      </td>
      {order.transactionId && <td>{order.transactionId}</td>}
    </tr>
  );
};

export default OrderDetails;
