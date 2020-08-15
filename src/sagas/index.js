import { all, fork } from "redux-saga/effects";
import {counterSagas} from './couner';
import {userSagas} from './user';

export default function* rootSaga() {
    // 并发，和顺序无关
    // yield all([
    //     watchIncrementAsync(),
    //     watchFetchUser(),
    //     watchFetchJoker()
    // ]);
    // yield all([
    //     fork(watchIncrementAsync),
    //     fork(watchFetchUser),
    //     fork(watchFetchJoker)
    // ]);

    yield all([
        ...counterSagas,
        ...userSagas
    ]);
}