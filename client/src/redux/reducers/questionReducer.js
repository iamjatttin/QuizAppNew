import {GET_ALL_QUESTION_SUCCESS,GET_ALL_QUESTION_REQUEST,GET_ALL_QUESTION_FAIL,CLEAR_ERRORS} from "../../utils/userConstants";

export const questionReducer = (state = { Questions: {} }, { type, payload }) => {

    switch (type) {
        case GET_ALL_QUESTION_REQUEST:
            return {
                loading: true,
            };
        case GET_ALL_QUESTION_SUCCESS:
            return {
                ...state,
                loading: false,
                Questions: payload,
            };
        case GET_ALL_QUESTION_FAIL:
            return {
                ...state,
                loading: false,
                Questions: null,
                error: "Fetching Question Failed",
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}