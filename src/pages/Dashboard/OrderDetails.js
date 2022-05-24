import React from 'react';

const OrderDetails = ({ order, setCancel, i}) => {
    return (
        <tr key={order._id}>
            <th>{i + 1}</th>
            <td>{order?.name}</td>
            <td>{order?.productName}</td>
            <td className='flex justify-center'><img className='w-10' src={order?.productImg} alt="" /></td>
            <td>{order?.quantity}</td>
            <td>{order?.price}</td>
            <td><button className='btn btn-info btn-xs'>Pay</button></td>
            <td><label htmlFor="cancel" onClick={() => setCancel(order)} className="btn btn-xs modal-button">Cancel</label></td>
        </tr>
    );
};

export default OrderDetails;