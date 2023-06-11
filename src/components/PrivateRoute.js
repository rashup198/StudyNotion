import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
    
 if(isLoggedIn){
    return  <Navigate to="/dashboard"></Navigate>   ;
 }
 else{
    return <Navigate to="/login"></Navigate>
    
 }
}

export default PrivateRoute
