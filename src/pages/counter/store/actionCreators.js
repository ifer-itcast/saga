import { INCREMENT } from './actionTypes';

const increment = () => ({
    type: INCREMENT
});

export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    }
};