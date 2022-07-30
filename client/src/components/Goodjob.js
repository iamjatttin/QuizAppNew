import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import BackdropLoader from './layouts/BackdropLoader';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../redux/actions/userAction';

const Goodjob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);
    const { Questions } = useSelector((state) => state.Questions);

    useEffect(() => {
        if (error) {
            toast(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, isAuthenticated, navigate]);

    return (
        <>
            {loading && <BackdropLoader />}
            <div className="ml-56 pt-16 mb-40">
                <div className="h-auto max-w-4xl rounded-xl overflow-hidden shadow-lg" style={{backgroundColor:"#fff"}}>
                    <div className=" text-center">
                        <p className='text-gray-500'>Quiz Completed</p>
                        <h2>Good Job !</h2>
                    </div>
                    <div className=" flex justify-center ">
                        <div className="h-80 grid-rows-1 content-center">
                            <img src="../assets/img/goodjob.png" className="max-w-sm "alt="" />
                        </div>
                    </div>
                    <div className=" text-center mb-10">
                        <p className='text-gray-400'>You scored <strong>{user.score}/{Questions.length}</strong> Points</p>
                    </div>
                    <div className=" flex justify-between ">
                       <Link to='/logout' className="ml-10 mb-6 mt-3 no-underline hover:underline text-blue-600 
                   
                   visited:text-blue-700">Logout</Link>
                   
                       <Link to='/results' className="hover:bg-sky-700 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 mr-8 mb-8">
                       Compare Results
                       </Link>
                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Goodjob

