import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import auth from '../firebase.init.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading'
import useAdmin from '../hooks/useAdmin.js';
import { signOut } from 'firebase/auth';

const AdminPrivate = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminProcess] = useAdmin(user)
    let location = useLocation();
    if (loading || adminProcess) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminPrivate;