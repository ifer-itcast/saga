import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../pages/user/store/actionTypes";
function* fetchUser() {
    try {
        // https://api.github.com/users
        const { data } = yield call(axios.get, "https://autumnfish.cn/api/joke/list?num=3");
        yield put({ type: FETCH_USER_SUCCESS, payload: data });
    } catch(e) {
        yield put({ type: FETCH_USER_FAILURE, error: e.message });
    }
}
function* watchFetchUser() {
    yield takeEvery(FETCH_USER, fetchUser);
}
export const userSagas = [
    watchFetchUser()
];