import { takeEvery, delay, put } from 'redux-saga/effects';
import { increment } from '../pages/counter/store/actionCreators';
import { INCREMENT_ASYNC } from '../pages/counter/store/actionTypes';

export function* incrementAsync() {
    yield delay(2000);
    yield put(increment());
}
function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export const counterSagas = [
    watchIncrementAsync()
];