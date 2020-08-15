import {
    INCREMENT,
    INCREMENT_ASYNC
} from './actionTypes';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const incrementAsync = () => {
    return {
        type: INCREMENT_ASYNC
    }
};