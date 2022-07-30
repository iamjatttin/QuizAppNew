import {HOST,GET_ALL_USERS_FAIL,GET_ALL_USERS,UPDATE_USER_SCORE,UPDATE_SCORE_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL,CLEAR_ERRORS,LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL} from "../../utils/userConstants";
import axios from 'axios';

// Login User
export const loginUser = (userId, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST });

        const config = {
            headers: {
                "Accept":"*",
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            `${HOST}/login`,
            { userId, password },
            config
        );

        localStorage.setItem('token', data.token); 
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        setTimeout(() => {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: error.response.data.message,
            });
        }, 500);
        
    }
}
// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            headers: {
                "Accept":"*",
                "Content-Type": "application/json",
            },
        }
        // console.log(userData)
        const {name,email,password}=userData;
        const { data } = await axios.post(
            `${HOST}/create`,
            {name,email,password},
            config
        );

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};
// Load User
export const loadUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token'); 
        console.log(token)
        if(token){
 
            dispatch({ type: LOAD_USER_REQUEST });
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'token':`${token}`
                },
            }
            const {data}  = await axios.post(
                `${HOST}/profile`,
                token,
                config
            );

            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data.user,
            }); 
        }else{
            dispatch({
                type: LOAD_USER_FAIL,
                payload: "Please Login"
            })
        }

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
// Update User Score
export const UpdateScore = (score) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token'); 
        console.log(token)
        if(token){
            console.log(score)
            const config = {
                headers: {
                    "Accept":"*",
                    "Content-Type": "application/json",
                    'token':`${token}`
                },
            }
            await axios.post(
                `${HOST}/updatescore`,
                score,
                config
            );

            dispatch({
                type: UPDATE_USER_SCORE,
                payload: score.Score,
            }); 
        }else{
            dispatch({
                type: UPDATE_SCORE_FAIL,
                payload: "Failed to update Score"
            })
        }

    } catch (error) {
        dispatch({
            type: UPDATE_SCORE_FAIL,
            payload: "Failed to update Score"
        })
    }
}
// Logout User
export const logoutuser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT_USER_SUCCESS
        }); 
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL
        })
    }
}
export const getAllUsers = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Accept":"*",
                "Content-Type": "application/json",
                
            },
        }
       const {data}= await axios.post(
            `${HOST}/getalluser`,
            config
        );
        dispatch({
            type: GET_ALL_USERS,
            payload:data
        }); 
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAIL
        })
    }
}

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};