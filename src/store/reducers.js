import { combineReducers } from 'redux';
import { reducer as counterReducer } from '../pages/counter/store';
import { reducer as userReducer } from '../pages/user/store';
export default combineReducers({
    counter: counterReducer,
    user: userReducer
});