import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import BackdropLoader from './layouts/BackdropLoader';
import {   useDispatch, useSelector } from 'react-redux';
import { UpdateScore } from '../redux/actions/userAction';

const Questions = () => {
    const {loading,Questions} = useSelector((state) => state.Questions);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentQuestion, setcurrentQuestion] = useState(0);
    
    const options=Questions[currentQuestion].options;

    const [Score, setScore] = useState(0);
 
    const handleNext = () => {
        setScore(Score)
        if(Questions[currentQuestion].correct===inputField){
            setScore(Score + 1)
        }
        setcurrentQuestion(currentQuestion+1)
    }
    const handleBack = (e) => {
        setcurrentQuestion(currentQuestion-1)
    }
    // console.log(Score)
    const [inputField , setInputField] = useState("")
    const inputsHandler = (e) =>{
        setInputField(e.target.value)
        // console.log(inputField)
    }

    const handleFinish = () => {
        if(Questions[currentQuestion].correct===inputField){
            setScore(Score + 1); 
        }
        dispatch(UpdateScore({Score:Score}))
        navigate("/scores")
     }
     
  return (
        <>
            {loading && <BackdropLoader />}
            <div className="ml-56 pt-16 mb-40">
                <div className="h-auto max-w-4xl rounded-xl overflow-hidden shadow-lg p-5" style={{backgroundColor:"#fff"}}>
                    <div className="">
                        <p className='text-gray-500 mb-2'>Question {currentQuestion+1} of {Questions.length}</p>
                    </div>
                    <div className="">
                        <h2 className='text-gray-900'>{Questions[currentQuestion].question}</h2>
                    </div>
                    <div className="">
                        <p className='text-gray-500'>Answer the question!</p>
                    </div>
                    {options.map((option) => (
                        <div className="flex options card h-auto max-w-4xl rounded-xl overflow-hidden p-4 mt-2" style={{border:"1px solid #cecbcb"}}>
                            <input type="radio" onClick={inputsHandler} value={option} name="option" id="" />
                            <p className='text-gray-500 ml-8'>{option}</p>
                        </div>
                    ))
                    }
                    <div className=" flex justify-between mt-4">
                       <Link to='/logout' className="ml-10 mb-6 mt-3 no-underline hover:underline text-blue-600 
                   
                        visited:text-blue-700">Logout</Link>
                        <div>
                            {currentQuestion===0? <button disabled type="button" className="text-dark border-0 bg-white-700 hover:bg-white-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-white-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>:
                            <button type="button" onClick={handleBack} className="text-dark border-0 bg-white-700 hover:bg-white-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-white-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                                }
                       {(currentQuestion+1)<Questions.length?  <button type="button" onClick={handleNext} className="text-white border-0 bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
   :
                    <button type="button" onClick={handleFinish} className="text-white border-0 bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Finish</button>
                                }
                       
                        </div>

                    </div>
                </div>
            </div>
        </>
  )
}

export default Questions


