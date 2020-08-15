import { takeEvery, call, all, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_USER, FETCH_JOKER } from "../pages/user/store/actionTypes";

function* fetchUser() {
    const data1 = yield call(axios.get, "https://autumnfish.cn/api/joke")
    yield put({ type: "FETCH_USER_SUCCESS", user: data1 })
    console.log(data1);
}

function* fetchJoker() {
    const data1 = yield call(axios.get, "https://autumnfish.cn/api/joke/list?num=3")
    console.log(data1);
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USER, fetchUser);
}

function* watchFetchJoker() {
    yield takeEvery(FETCH_JOKER, fetchJoker);
}

export const userSagas = [
    watchFetchUser(),
    watchFetchJoker()
];