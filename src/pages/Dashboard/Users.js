import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, i, refetch }) => {
    const { name, email, role } = user

    const MakeAdmin = () => {
        fetch(`https://e-tools-manufacturer.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast('Failed to make an admin')
                }
                res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Make admin successfully')
                }

            })
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='btn btn-xs' onClick={MakeAdmin}>Make admin</button>}</td>
            <td><button className='btn btn-xs'>Remove admin</button></td>
        </tr>
    );
};

export default Users;