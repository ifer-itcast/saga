import { all } from "redux-saga/effects";
import {counterSagas} from './couner';
import {userSagas} from './user';

export default function* rootSaga() {
    yield all([
        ...counterSagas,
        ...userSagas
    ]);
}