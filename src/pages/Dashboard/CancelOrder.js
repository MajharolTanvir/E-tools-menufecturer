import React from "react";
import { toast } from "react-toastify";

const CancelOrder = ({ cancel, refetch, setCancel }) => {
  const handleDeleteOrder = (id) => {
    fetch(`https://e-tools-manufecturer-server.vercel.app/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order canceled");
        refetch();
        setCancel(null);
      });
  };
  return (
    <div className="">
      <label htmlFor="cancel" className="btn modal-button">
        Cancel
      </label>
      <input type="checkbox" id="cancel" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Can you cancel this order?</h3>
          <div className="modal-action justify-center">
            <label
              onClick={() => handleDeleteOrder(cancel._id)}
              htmlFor="cancel"
              className="btn"
            >
              Yes
            </label>
            <label htmlFor="cancel" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
