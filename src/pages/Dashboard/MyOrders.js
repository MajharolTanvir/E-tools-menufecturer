import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import CancelOrder from './CancelOrder';
import OrderDetails from './OrderDetails';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [cancel, setCancel] = useState(null)
    const { email } = user
    const { data: orders, isLoading, refetch } = useQuery(['orders', email], () => fetch(`http://localhost:5000/order/${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto my-10 md:mx-10">
            <table className="table table-compact w-full text-center">
                <thead>
                    <tr>
                        <th>Sl no.</th>
                        <th>Name</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Product quantity</th>
                        <th>Product price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) => <OrderDetails
                            key={order._id}
                            order={order}
                            setCancel={setCancel}
                            i={i}
                        ></OrderDetails>)
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
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
            {cancel && <CancelOrder
                cancel={cancel}
                refetch={refetch}
                setCancel={setCancel}
            ></CancelOrder>}
        </div>
    );
};

export default MyOrders;