import jwtDecode from 'jwt-decode';
import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const PrivateWrapper = () => {
  const token = window.localStorage.getItem('token');

  const location = useLocation();
  const paths = location.pathname.split('/');
  const pathResult = paths[1].toLowerCase();
  let userRole;

  if (pathResult.includes('-')) {
    let deriveArray = pathResult.split('-');
    userRole = deriveArray[0];
  } else {
    userRole = pathResult;
  }
  console.log(userRole);

  let role;
  try {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return <Navigate to='/' replace />;
  }

  return role === userRole ? <Outlet /> : <Navigate to='/' replace />;
};
export default PrivateWrapper;
