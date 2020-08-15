import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// #1 引入
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
// #2 创建
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    // #3 应用
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
// #4 启动
sagaMiddleware.run(rootSaga);
export default store;