import test from 'tape';
import { put, call, delay } from 'redux-saga/effects';
import { incrementAsync } from './counter';
import { increment } from '../pages/counter/store/actionCreators';

test('incrementAsync saga test', function(assert) {
    const it = incrementAsync();
    // yield 什么，这里的 it.next().value 就是什么
    assert.deepEqual(
        it.next().value,
        delay(2000),
        "A promise with a delay of 2 s should be returned"
    );
    assert.deepEqual(
        it.next().value,
        put(increment()),
        "An increase action should be initiated"
    );
    assert.end();
});