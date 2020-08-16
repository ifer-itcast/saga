import { createStore, compose, applyMiddleware } from 'redux';
// #1 引入
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchIncrementAsync } from '../sagas';
// #2 创建
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    // #3 应用
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
// #4 启用
sagaMiddleware.run(watchIncrementAsync);
export default store;