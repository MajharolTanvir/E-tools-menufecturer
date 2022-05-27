import React from 'react';


const ManageOrder = ({ order, setCancel, i }) => {
    return (
        <tr key={order._id}>
            <th>{i + 1}</th>
            <td>{order?.name}</td>
            <td>{order?.productName}</td>
            <td className='flex justify-center'><img className='w-10' src={order?.productImg} alt="" /></td>
            <td>{order?.quantity}</td>
            <td>{order?.price}</td>
            <td>
                {(order.price && !order.paid) && <button className='btn btn-info btn-xs'>Unpaid</button>}
                {(order.price && order.paid) && <button disabled className='btn btn-success btn-xs'>Paid</button>}
            </td>
            <td>
                {(order.price && !order.paid) && <label htmlFor="cancel" onClick={() => setCancel(order)} className="btn btn-xs modal-button btn-error">Cancel</label>}
                {(order.price && order.paid) && <label htmlFor="cancel" disabled className="btn btn-xs modal-button btn-error">Cancel</label>}
            </td>
            <td>
                {(order.price && !order.paid) && <label htmlFor="cancel" onClick={() => setCancel(order)} className="btn btn-xs modal-button btn-error">Pending</label>}
                {(order.price && order.paid) && <label htmlFor="cancel" disabled className="btn btn-xs modal-button btn-error">Shipping</label>}
            </td>
        </tr>
    );
};

export default ManageOrder;