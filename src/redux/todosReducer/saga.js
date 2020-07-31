/* Modules */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import publicApi from '../../utils/publicApi';

/* Types */
import { Types } from './reducer';

const URL = 'http://jsonplaceholder.typicode.com';

function* handleFetchTodos(action) {
    try {
        const response = yield call(publicApi.get, `${URL}/todos`);

        if (response.status === 200) {
            yield put({ type: Types.SUCCESS, payload: response.data });
        }
    } catch (e) {
        yield put({ type: Types.FAILURE, error: e.response });
    }
}

export default all([takeLatest(Types.REQUEST, handleFetchTodos)]);
