import { all } from "redux-saga/effects";
import { counterSagas } from './counter';
import { userSagas } from './user';
import { loginSagas } from './login';

export default function* rootSaga() {
    yield all([
        ...counterSagas,
        ...userSagas,
        ...loginSagas
    ]);
}