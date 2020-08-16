import { INCREMENT, INCREMENT_ASYNC } from './actionTypes';

export const increment = () => ({
    type: INCREMENT
});

export const incrementAsync = () => ({
    type: INCREMENT_ASYNC
});