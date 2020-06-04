/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

// Services
import { fetchTodos } from '../../services/todos';

/* Types */
import { TODOS } from './types';

function* handleFetchTodos(action) {
    try {
        const response = yield call(fetchTodos);

        if (response.status === 200) {
            yield put({ type: TODOS.SUCCESS, payload: response.data });
        }
    } catch (e) {
        console.log('error mega', e);
        yield put({ type: TODOS.FAILURE, error: e.response });
    }
}

export const todosSaga = [takeEvery(TODOS.REQUEST, handleFetchTodos)];
