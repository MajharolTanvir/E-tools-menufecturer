import { Navigate, useLocation } from "react-router-dom";
import auth from '../firebase.init.js'
import { useAuthState } from 'react-firebase-hooks/auth';

function PrivateRouter({ children }) {
    let [user] = useAuthState(auth);
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default PrivateRouter