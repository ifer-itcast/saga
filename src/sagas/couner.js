import { takeEvery, put, delay, takeLatest, call, all } from "redux-saga/effects";
import { INCREMENT_ASYNC } from "../pages/counter/store/actionTypes";
import { increment } from "../pages/counter/store/actionCreators";

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    yield delay(2000);
    yield put(increment());
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export const counterSagas = [
    watchIncrementAsync()
];