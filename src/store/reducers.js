import { combineReducers } from 'redux';
import { reducer as counterReducer } from '../pages/counter/store';
import { reducer as loginReducer } from '../pages/login/store';
export default combineReducers({
    counter: counterReducer,
    login: loginReducer
});