import * as actionTypes from './actionTypes';
const initState = {};
export default function (state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                token: action.payload
            };
        case actionTypes.LOGIN_FAILED:
            return {
                error: action.error
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}