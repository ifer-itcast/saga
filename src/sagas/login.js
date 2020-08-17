import { take, call, put } from 'redux-saga/effects';
import { actionTypes as loginActionTypes } from '../pages/login/store';
import api from '../utils/api';

// worker saga
function* login(username, password) {
    try {
        const token = yield call(api.login, username, password);
        return token;
    } catch(error) {
        console.log(error);
        yield put({ type: loginActionTypes.LOGIN_FAILED, error });
    }
}

// watcher saga
function* watchLogin() {
    while(true) {
        const { payload: { username, password } } = yield take(loginActionTypes.LOGIN);
        const token = yield call(login, username, password);
        if (token) {
            yield put({ type: loginActionTypes.LOGIN_SUCCESS, payload: token});
            // 登录成功后开始监听退出的动作
            yield take(loginActionTypes.LOGOUT);
            yield put({ type: loginActionTypes.LOGOUT_SUCCESS });
        }
    }
}

export const loginSagas = [
    watchLogin()
];