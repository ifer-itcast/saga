import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER } from "../pages/user/store/actionTypes";
function* fetchUser() {
    const user = yield call(axios.get, "https://autumnfish.cn/api/joke");
    console.log(user);
}
function* watchFetchUser() {
    yield takeEvery(FETCH_USER, fetchUser);
}
export const userSagas = [
    watchFetchUser()
]