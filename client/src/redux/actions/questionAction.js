import {HOST,GET_ALL_QUESTION_SUCCESS,GET_ALL_QUESTION_REQUEST,GET_ALL_QUESTION_FAIL,CLEAR_ERRORS} from "../../utils/userConstants";
import axios from 'axios';

export const getAllQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_QUESTION_REQUEST });

        const config = {
            headers: {
                "Accept":"*",
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            `${HOST}/getallquestions`,
            config
        );

        dispatch({
            type: GET_ALL_QUESTION_SUCCESS,
            payload: data.question,
        });
    } catch (error) {
        setTimeout(() => {
            dispatch({
                type: GET_ALL_QUESTION_FAIL,
                payload:" error.response.data.message",
            });
        }, 500);
        
    }
}


// Clear All Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};