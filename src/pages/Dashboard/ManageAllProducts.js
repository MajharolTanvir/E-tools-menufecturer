import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const ManageAllProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://e-tools-manufacturer.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    fetch(`https://e-tools-manufacturer.herokuapp.com/deleteTool/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Your item deleted");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto mx-10 text-primary my-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl no.</th>
            <th>Product name</th>
            <th>image</th>
            <th>Available</th>
            <th>Minimum shipping</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tools?.map((tool, i) => (
            <tr key={tool._id}>
              <th>{i + 1}</th>
              <td>{tool.name}</td>
              <td>
                <img className="w-12" src={tool.image} alt="" />
              </td>
              <td>{tool.available}</td>
              <td>{tool.minQuantity}</td>
              <td>{tool.price}</td>
              <td>
                <button
                  className="btn bg-red-600 btn-xs"
                  onClick={() => handleDelete(tool._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
