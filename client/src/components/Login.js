import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import BackdropLoader from './layouts/BackdropLoader';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../redux/actions/userAction';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(inputField.email, inputField.password));
    }

    const [inputField , setInputField] = useState({
        email: '',
        password: '',
    })
    const inputsHandler = (e) =>{
        setInputField({...inputField,[e.target.name]: e.target.value})
    }
    useEffect(() => {
        if (error) {
            toast(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate(`/`)
        }
    }, [dispatch, error, isAuthenticated, navigate]);


    return (
        <>
            {loading && <BackdropLoader />}
            <div className="ml-56 pt-16">
                <div className=" max-w-4xl rounded-xl overflow-hidden shadow-lg" style={{backgroundColor:"#fff"}}>
                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1  p-10">
                        <div className="col-span-2 ">
                            <img src="../assets/img/login.png" className="max-w-sm mt-8"alt="" />
                        </div>
                        <div className="col-span-2 ">
                            <h1>Sign In</h1>
                            <form>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your email</label>
                                    <input type="email" onChange={inputsHandler}  value={inputField.email} name="email" id="email" class=" border-0  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-800 text-slate-800 dark:focus:ring-blue-500 " placeholder="name@flowbite.com" />
                                </div>
                                <div class="mb-6">
                                    <label for="password" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your password</label>
                                    <input type="password" onChange={inputsHandler} name="password"  value={inputField.password} id="password" class=" border-0  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:placeholder-gray-800 text-slate-800 dark:focus:ring-blue-500 " />
                                </div>
                                <div class="flex items-start mb-6">
                                    <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded-full border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-50 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-700">Remember me</label>
                                </div>
                                <button type="submit" onClick={handleLogin} class="border-0 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                            <hr className="w-48 bg-sky-900 text-sky opacity-50" />
                            <div className="decoration-none text-center">
                                <Link to="/register">Signup</Link>
                            </div>

                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login