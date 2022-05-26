import { Navigate, useLocation } from "react-router-dom";
import auth from '../firebase.init.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading'

function PrivateRouter({ children }) {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default PrivateRouter