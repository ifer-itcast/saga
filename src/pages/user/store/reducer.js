import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actionTypes';
const initialState = {
    isFetching: false,
    error: null,
    user: null
};
export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_USER:
            return {
                isFetching: true,
                error: null,
                user: null
            };
        case FETCH_USER_SUCCESS:
            return {
                isFetching: false,
                error: null,
                user: action.payload
            };
        case FETCH_USER_FAILURE:
            return {
                isFetching: false,
                error: action.error,
                user: null
            };
        default:
            return state;
    }
}