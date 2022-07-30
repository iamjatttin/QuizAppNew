import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from './redux/reducers/userReducer';
import { questionReducer } from './redux/reducers/questionReducer';

const reducer = combineReducers({
    user: userReducer,
    Questions: questionReducer,
    allUsers: allUsersReducer,
    forgotPassword: forgotPasswordReducer,
    userDetails: userDetailsReducer,
    profile: profileReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;