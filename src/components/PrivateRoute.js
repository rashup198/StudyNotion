import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn}) => {
    
 if(isLoggedIn){
    return  <Navigate to="/dashboard"></Navigate>   ;
 }
 else{
    return <Navigate to="/login"></Navigate>
    
 }
}

export default PrivateRoute
