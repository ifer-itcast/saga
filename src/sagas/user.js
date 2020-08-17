import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../pages/user/store/actionTypes";
// #1 失败了，后台返回对应的 HTTP Code，前端针对状态码处理
// #2 无论成功或失败，后端 HTTP Code 都响应 200，然后提供不同的 status 标识符，前端据此进行判断
function* fetchUser() {
    try {
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