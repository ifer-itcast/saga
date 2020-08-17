import { takeEvery, delay, put, take, select } from 'redux-saga/effects';
import { increment } from '../pages/counter/store/actionCreators';
import { INCREMENT_ASYNC } from '../pages/counter/store/actionTypes';

export function* incrementAsync() {
    yield delay(2000);
    yield put(increment());
}
function* watchIncrementAsync() {
    while(true) {
        yield take(INCREMENT_ASYNC);
        yield incrementAsync();
    }
}
function* watchAll() {
    while(true) {
        // 监听所有的 action，获取最新的状态树
        console.log(yield take('*'));
        console.log(yield select());
        // 也可以传递函数对状态进行过滤
        // console.log(yield select(state => state.counter));
    }
}

export const counterSagas = [
    watchIncrementAsync(),
    watchAll()
];