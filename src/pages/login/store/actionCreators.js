import * as actionTypes from './actionTypes';

export const login = (username, password) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            username,
            password
        }
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};