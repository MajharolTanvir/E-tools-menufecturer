import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Users from './Users';

const MakeAdmin = () => {
    const { data: users, loading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (loading) {
        return <Loading />
    }
    return (
        <div className='text-white mx-10'>
            <div className="overflow-x-auto">
                <table className="table w-full text-black">
                    <thead>
                        <tr>
                            <th>sl no.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <Users
                                key={user._id}
                                user={user}
                                i={i}
                                refetch={refetch}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;