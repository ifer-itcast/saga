import { take, call, put, fork, cancel, cancelled } from 'redux-saga/effects';
import { actionTypes as loginActionTypes } from '../pages/login/store';
import api from '../utils/api';

// worker saga
function* login(username, password) {
    try {
        api.setItem('loading', 'true');

        const token = yield call(api.login, username, password);
        yield put({ type: loginActionTypes.LOGIN_SUCCESS, payload: token});

        api.setItem('loading', 'false');
    } catch(error) {
        console.log(error);
        yield put({ type: loginActionTypes.LOGIN_FAILED, error });
        api.setItem('loading', 'false');
    } finally {
        if(yield cancelled()) {
            api.setItem('loading', 'false');
        }
    }
}

// watcher saga
/* function* watchLogin() {
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
} */
function* watchLogin() {
    while(true) {
        const { payload: { username, password } } = yield take(loginActionTypes.LOGIN);
        // 插起来，代码会立刻向下执行
        // 返回值是一个任务对象，拿不到 login 的返回值
        const task = yield fork(login, username, password);

        // Bug：先点退出的话下一次就不能再退出了
        const action = yield take(loginActionTypes.LOGOUT);
        if(action.type === loginActionTypes.LOGOUT) {
            yield cancel(task);
        }
        yield put({ type: loginActionTypes.LOGOUT_SUCCESS });
    }
}

export const loginSagas = [
    watchLogin()
];