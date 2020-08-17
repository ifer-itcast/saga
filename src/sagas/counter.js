import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../pages/counter/store/actionCreators';
import { INCREMENT_ASYNC } from '../pages/counter/store/actionTypes';

export function* incrementAsync() {
    yield delay(2000);
    // delay 函数中的 this 就是 o，注意 delay 不能是一个箭头函数
    // const o = { name: 'ifer' };
    // yield call([o, delay], 2000);
    // yield apply(o, delay, [2000]);
    yield put(increment());
}
function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export const counterSagas = [
    watchIncrementAsync()
];