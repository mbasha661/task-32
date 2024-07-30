import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuthenticated = () => {
    // Replace this with your actual authentication logic (e.g., checking for a token)
    return sessionStorage.getItem('token') !== null;
  };
    return(
      isAuthenticated() ? <Outlet/>:<Navigate to="/login"/>
    )
}

export default PrivateRoutes