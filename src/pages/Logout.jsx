import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch();

    // Runs once when the component mounts: clears the user from the redux store.
    useEffect(() => {
        dispatch({ type: 'LOGOUT' });
    }, [dispatch]);

    // Once the user is gone, send them back to the login page.
    return <Navigate to="/practice-5" replace />;
}

export default Logout;