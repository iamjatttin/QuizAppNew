import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  logoutuser } from '../redux/actions/userAction';
const Logout = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(logoutuser())
        localStorage.removeItem('token')
        navigate(`/login`)
    },[]);
  return (
    <div>Logout</div>
  )
}

export default Logout