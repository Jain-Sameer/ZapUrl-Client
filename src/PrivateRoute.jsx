import React from 'react'
import { useStoreContext } from "./contextApi/ContextApi.jsx";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, PublicPage }) => {
    const { token } = useStoreContext();
    if (PublicPage) {
        return token ? <Navigate to={"/dashboard"} /> : children;
    }

    return !token ? <Navigate to={"/login"} /> : children;
}

export default PrivateRoute