import { FETCH_USER } from './actionTypes';
const initialState = {
    isFetching: false,
    error: null,
    user: null
};

const user = (state={}, action={}) => {
    switch(action.type) {
        case FETCH_USER:
            return {
                isFetching: true,
                error: null,
                user: null
            };
        case 'FETCH_USER_SUCCESS':
            return {
                isFetching: false,
                error: null,
                user: action.user
            }
        default:
            return state;
    }
};

export default user;