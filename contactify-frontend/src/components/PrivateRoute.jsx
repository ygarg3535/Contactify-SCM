import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserService from '../services/UserService'

const PrivateRoute = () => {
  return UserService.isAuthenticated() ? <Outlet/> : <Navigate to={"/login"}/>}

export default PrivateRoute
