import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { email } = user
    const { data: orders, isLoading } = useQuery(['orders', email], () => fetch(`http://localhost:5000/order/${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto my-10">
            <table class="table table-compact w-full text-center">
                <thead>
                    <tr>
                        <th>Sl no.</th>
                        <th>Name</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Product quantity</th>
                        <th>Product price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.productName}</td>
                            <td className='flex justify-center'><img className='w-10' src={order.productImg} alt="" /></td>
                            <td>{order.quantity}</td>
                            <td>{order.productPrice}</td>
                            <td><button>Delete</button></td>
                        </tr>)
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Sl no.</th>
                        <th>Name</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Product quantity</th>
                        <th>Product price</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default MyOrders;