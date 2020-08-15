import { takeEvery, put, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC } from '../pages/counter/store/actionTypes';
import { increment } from '../pages/counter/store/actionCreators';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    yield delay(2000);
    yield put(increment());
}

export function* watchIncrementAsync() {
    // ## 监听 action 触发 incrementAsync 函数
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}