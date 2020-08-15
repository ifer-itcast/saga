import { combineReducers } from 'redux';
import { reducer as counterReducer } from '../pages/counter/store';
export default combineReducers({
    counter: counterReducer
});