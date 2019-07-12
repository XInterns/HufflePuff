import authReducer from './authReducer';
import modalReducer from './teamReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer
});

export default rootReducer;


