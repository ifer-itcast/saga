import { takeEvery, delay, put } from 'redux-saga/effects';
import { increment } from '../pages/counter/store/actionCreators';
import { INCREMENT_ASYNC } from '../pages/counter/store/actionTypes';

export function* helloSaga() {
    yield console.log('Hello Saga!');
}

// #2 异步代码
function* incrementAsync() {
    yield delay(2000);
    yield put(increment());
}

// #3 注意不要忘了在外部 run watchIncrementAsync

export function* watchIncrementAsync() {
    // #1 监听 action，触发 incrementAsync 函数
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}