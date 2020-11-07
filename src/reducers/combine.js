import counterReducer from './counter';
import isLoggedIn from './isLoggedIn';
import {combineReducers} from 'redux';

//combineReducers combine all reducers together so you can 
//pass them all together in one bundle.
const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn
})

export default allReducers;